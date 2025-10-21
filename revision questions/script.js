// Core quiz logic
// Configuration
const SHUFFLE = false;       // set to true to randomize question order
const AUTO_ADVANCE = false;  // set to true to auto-advance after answering

// State
let questions = Array.isArray(window.QUESTIONS) ? [...window.QUESTIONS] : [];
if (SHUFFLE) questions = questions.sort(() => Math.random() - 0.5);

let idx = 0;
let score = 0;

// Elements
const questionText = document.getElementById('questionText');
const optionsEl    = document.getElementById('options');
const hintBtn      = document.getElementById('hintBtn');
const hintText     = document.getElementById('hintText');
const nextBtn      = document.getElementById('nextBtn');
const restartBtn   = document.getElementById('restartBtn');
const scoreEl      = document.getElementById('score');
const qIndexEl     = document.getElementById('qIndex');
const progressBar  = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function updateProgress() {
  const total = questions.length;
  const current = Math.min(idx+1, total);
  const pct = Math.round((current-1) / total * 100);
  progressBar.style.width = pct + '%';
  progressText.textContent = `${current-1} / ${total}`;
}

function renderQuestion() {
  if (idx >= questions.length) return renderEnd();
  const q = questions[idx];

  qIndexEl.textContent = `Question ${idx+1}`;
  questionText.textContent = q.question;
  scoreEl.textContent = `Score: ${score}`;

  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65+i)}) ${opt}`;
    btn.setAttribute('role', 'option');
    btn.addEventListener('click', () => select(i, btn));
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });

  // hint
  hintText.classList.add('hidden');
  hintText.textContent = q.hint || 'No hint provided.';
  hintBtn.setAttribute('aria-expanded', 'false');

  // controls
  nextBtn.disabled = true;
  nextBtn.textContent = idx === questions.length-1 ? 'Finish' : 'Next';
  restartBtn.classList.add('hidden');

  updateProgress();
}

function select(i, btn) {
  const q = questions[idx];
  const optionButtons = Array.from(document.querySelectorAll('.option-btn'));

  optionButtons.forEach((b, ix) => {
    b.disabled = true;
    if (ix === q.answer) b.classList.add('correct');
  });

  if (i === q.answer) {
    score++;
  } else {
    btn.classList.add('wrong');
  }

  scoreEl.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
  if (AUTO_ADVANCE) setTimeout(next, 600);
}

function next() {
  idx++;
  if (idx < questions.length) {
    renderQuestion();
  } else {
    renderEnd();
  }
}

function renderEnd() {
  // Final screen
  questionText.textContent = `Finished! You scored ${score} / ${questions.length}`;
  optionsEl.innerHTML = '';
  hintText.classList.add('hidden');
  hintBtn.setAttribute('aria-expanded', 'false');
  nextBtn.disabled = true;
  nextBtn.textContent = 'Next';
  restartBtn.classList.remove('hidden');
  updateProgress();
  progressBar.style.width = '100%';
  progressText.textContent = `${questions.length} / ${questions.length}`;
}

hintBtn.addEventListener('click', () => {
  const hidden = hintText.classList.toggle('hidden');
  hintBtn.setAttribute('aria-expanded', String(!hidden));
  hintBtn.textContent = hidden ? 'Show Hint' : 'Hide Hint';
});

nextBtn.addEventListener('click', next);
restartBtn.addEventListener('click', () => {
  idx = 0; score = 0;
  if (SHUFFLE) questions = questions.sort(() => Math.random() - 0.5);
  renderQuestion();
});

// kick off
renderQuestion();
