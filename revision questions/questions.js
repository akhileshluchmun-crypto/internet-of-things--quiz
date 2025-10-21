// IoT MCQ dataset (125 questions) grouped by topic.
// Sections: Fundamentals(1-25), Reasoning(26-35), Microcontrollers & Sensors(36-50),
// Platforms(51-70), Security(71-85), Ultrasonic(86-100), Advanced(101-125)

(function(){
    window.QUESTIONS = [
    {
      "question": "Which statement best defines the Internet of Things (IoT)?",
      "options": [
        "Networked devices that sense, communicate, and act on data",
        "A social network for smartphones",
        "A replacement for the traditional Internet",
        "A cloud-only computing paradigm"
      ],
      "answer": 0,
      "hint": "IoT links physical devices to the Internet so they can sense/act and exchange data autonomously."
    },
    {
      "question": "Which is NOT a typical IoT characteristic?",
      "options": [
        "Context awareness",
        "Autonomous operation",
        "Always-on connectivity",
        "Human-only interaction"
      ],
      "answer": 3,
      "hint": "IoT involves machine-to-machine and human-in-the-loop interactions; 'human-only' is not typical."
    },
    {
      "question": "Which layer is responsible for device sensing in a classic 3‑layer IoT model?",
      "options": [
        "Perception (Device) layer",
        "Network layer",
        "Application layer",
        "Control plane"
      ],
      "answer": 0,
      "hint": "Perception layer includes sensors/actuators that capture physical-world data."
    },
    {
      "question": "Which protocol is most associated with publish/subscribe messaging in IoT?",
      "options": [
        "HTTP",
        "MQTT",
        "FTP",
        "SSH"
      ],
      "answer": 1,
      "hint": "MQTT is a lightweight pub/sub protocol commonly used by constrained devices."
    },
    {
      "question": "Which is an example of an IoT application domain?",
      "options": [
        "Smart agriculture",
        "Compiler optimization",
        "Spreadsheet design",
        "Desktop publishing"
      ],
      "answer": 0,
      "hint": "IoT spans domains like agriculture, healthcare, smart cities, and industrial monitoring."
    },
    {
      "question": "A key benefit of edge computing in IoT is:",
      "options": [
        "Increased latency",
        "Higher bandwidth costs",
        "Local processing reduces backhaul",
        "Eliminating sensors"
      ],
      "answer": 2,
      "hint": "Processing at the edge reduces latency and cloud bandwidth usage."
    },
    {
      "question": "Which wireless technology is optimized for low power wide area (LPWAN)?",
      "options": [
        "LoRaWAN",
        "Wi‑Fi 6",
        "Bluetooth Classic",
        "Zigbee"
      ],
      "answer": 0,
      "hint": "LoRaWAN is built for long range, low power, and small payloads."
    },
    {
      "question": "Which metric typically matters MOST for battery‑powered sensors?",
      "options": [
        "Clock speed",
        "RGB color gamut",
        "Power consumption",
        "Disk throughput"
      ],
      "answer": 2,
      "hint": "Power consumption dominates lifetime in battery‑operated IoT nodes."
    },
    {
      "question": "Which is a device‑to‑device short‑range technology commonly used for wearables?",
      "options": [
        "BLE",
        "NB‑IoT",
        "Satellite IoT",
        "Ethernet"
      ],
      "answer": 0,
      "hint": "Bluetooth Low Energy (BLE) supports ultra‑low power and short‑range connectivity."
    },
    {
      "question": "Which topology reduces single points of failure for IoT sensor networks?",
      "options": [
        "Star with single hub",
        "Bus with one backbone",
        "Mesh networking",
        "Point‑to‑point only"
      ],
      "answer": 2,
      "hint": "Mesh allows multipath routing and better resilience."
    },
    {
      "question": "Which statement about CoAP is TRUE?",
      "options": [
        "It runs over TCP by default",
        "It mirrors REST over UDP",
        "It is a file transfer protocol",
        "It replaces TLS"
      ],
      "answer": 1,
      "hint": "CoAP is a lightweight RESTful protocol typically over UDP, often secured with DTLS."
    },
    {
      "question": "A digital twin is:",
      "options": [
        "A cryptographic key",
        "A virtual replica of a physical asset",
        "A firmware update mechanism",
        "A sensor calibration file"
      ],
      "answer": 1,
      "hint": "Digital twins mirror physical assets to simulate, monitor, and optimize behavior."
    },
    {
      "question": "Which cloud service is most suitable for time‑series IoT telemetry?",
      "options": [
        "Object storage only",
        "Time‑series database",
        "Relational OLTP only",
        "CDN"
      ],
      "answer": 1,
      "hint": "Time‑series databases (e.g., InfluxDB/TSDBs) fit timestamped sensor streams."
    },
    {
      "question": "Which is an example of an actuator?",
      "options": [
        "DHT22",
        "HC‑SR04",
        "SG90 servo",
        "BMP280"
      ],
      "answer": 2,
      "hint": "Servos (e.g., SG90) are actuators; the others are sensors."
    },
    {
      "question": "The main advantage of using message brokers in IoT is:",
      "options": [
        "Centralizing UI rendering",
        "Decoupling producers and consumers",
        "Replacing databases",
        "Encrypting packets automatically"
      ],
      "answer": 1,
      "hint": "Brokers (MQTT) decouple publishers/subscribers for scalable event distribution."
    },
    {
      "question": "Which factor MOST influences link budget for long‑range IoT radios?",
      "options": [
        "Carrier logo",
        "Transmit power & antenna gain",
        "UI theme",
        "File format"
      ],
      "answer": 1,
      "hint": "Link budget depends on Tx power, antenna gains, path loss, and sensitivity."
    },
    {
      "question": "Edge AI on microcontrollers is often called:",
      "options": [
        "TinyML",
        "MacroML",
        "EdgeDB",
        "NanoHTTP"
      ],
      "answer": 0,
      "hint": "TinyML refers to ML inference on extremely resource‑constrained devices."
    },
    {
      "question": "Which is typically TRUE for IoT traffic patterns?",
      "options": [
        "Large continuous video streams only",
        "Small, sporadic, uplink‑heavy messages",
        "Pure downlink control",
        "Bulk file transfers"
      ],
      "answer": 1,
      "hint": "IoT is commonly uplink‑dominant with small, periodic or event‑driven payloads."
    },
    {
      "question": "Which is the BEST power source for long‑term remote sensors with low sun exposure?",
      "options": [
        "Small solar only",
        "Vibration energy harvesting only",
        "Primary lithium cell",
        "USB power"
      ],
      "answer": 2,
      "hint": "Primary lithium (e.g., Li‑SOCl2) offers long shelf life and high energy density."
    },
    {
      "question": "A ‘device shadow’ in IoT platforms stores:",
      "options": [
        "Raw video frames",
        "Desired & reported device state",
        "Compiled binaries",
        "UI themes"
      ],
      "answer": 1,
      "hint": "Shadows keep desired/reported states for offline/online synchronization."
    },
    {
      "question": "Which is TRUE for NB‑IoT vs. LTE‑M?",
      "options": [
        "NB‑IoT has higher bandwidth than LTE‑M",
        "NB‑IoT generally offers better coverage & lower throughput",
        "Both require Wi‑Fi backhaul",
        "Neither supports power‑saving modes"
      ],
      "answer": 1,
      "hint": "NB‑IoT targets deep coverage and low throughput; LTE‑M offers higher data rates and mobility."
    },
    {
      "question": "In a smart agriculture deployment, soil moisture sensors should be sampled based on:",
      "options": [
        "UI refresh rate",
        "Soil dynamics & irrigation cycles",
        "CPU clock speed",
        "MQTT broker vendor"
      ],
      "answer": 1,
      "hint": "Sampling strategy should reflect process dynamics to capture meaningful changes."
    },
    {
      "question": "Which measurement is typically analog?",
      "options": [
        "Button pressed",
        "Temperature from thermistor",
        "Device online flag",
        "Binary door contact"
      ],
      "answer": 1,
      "hint": "Thermistors produce analog voltages that are digitized via ADC."
    },
    {
      "question": "A gateway in IoT commonly performs:",
      "options": [
        "Actuator calibration only",
        "Protocol translation and edge aggregation",
        "User authentication UI",
        "Image editing"
      ],
      "answer": 1,
      "hint": "Gateways translate protocols (e.g., Modbus→MQTT), buffer data, and provide local processing."
    },
    {
      "question": "Which KPI indicates sensing accuracy over repeated measurements?",
      "options": [
        "Latency",
        "Jitter",
        "Repeatability",
        "Bitrate"
      ],
      "answer": 2,
      "hint": "Repeatability describes the closeness of agreement between successive measurements under unchanged conditions."
    },
    {
      "question": "A freezer sends temperature every 10 minutes; spikes last ~2 minutes. How to reliably detect spikes while minimizing power?",
      "options": [
        "Decrease sampling to 30 minutes",
        "Sample faster and compute at the edge",
        "Only rely on cloud averaging",
        "Disable alarms at night"
      ],
      "answer": 1,
      "hint": "Increase sampling during suspected events or continuously at a modest rate and detect at edge to avoid missing short spikes."
    },
    {
      "question": "A soil sensor node runs on battery for 2 years. Which design helps MOST?",
      "options": [
        "Always‑on Wi‑Fi",
        "Duty cycling with deep sleep",
        "Bright status LEDs",
        "High CPU frequency"
      ],
      "answer": 1,
      "hint": "Deep sleep and short active windows drastically reduce average power draw."
    },
    {
      "question": "You need building occupancy counting with privacy. Best option?",
      "options": [
        "Cameras with face ID",
        "BLE scanning + thresholds",
        "PIR + doorway beam break",
        "RFID badges only"
      ],
      "answer": 2,
      "hint": "PIR plus beam break provides accurate counts without PII; BLE has bias and cameras raise privacy concerns."
    },
    {
      "question": "Edge anomaly detection is chosen over cloud detection primarily to:",
      "options": [
        "Consume more bandwidth",
        "Increase latency",
        "Operate during network outages",
        "Disable security"
      ],
      "answer": 2,
      "hint": "Edge analytics keep critical functions running when the backhaul is down and reduce latency."
    },
    {
      "question": "You must push firmware updates securely to 10k devices. Key requirement?",
      "options": [
        "Open TFTP server",
        "OTA with code signing/verification",
        "Disable bootloader",
        "Use FTP with anonymous login"
      ],
      "answer": 1,
      "hint": "Secure OTA requires signing firmware and verifying signatures (secure boot/anti‑rollback)."
    },
    {
      "question": "Sensor is noisy at 50 Hz mains interference. What simple digital filter helps?",
      "options": [
        "High‑pass at 60 Hz",
        "Notch around 50 Hz",
        "Amplify noise",
        "No filtering"
      ],
      "answer": 1,
      "hint": "A notch filter near the interference frequency attenuates mains hum."
    },
    {
      "question": "A battery device transmits tiny messages hourly. Best network?",
      "options": [
        "LoRaWAN",
        "Gigabit Ethernet",
        "Wi‑Fi 6E",
        "UWB"
      ],
      "answer": 0,
      "hint": "LoRaWAN fits small, infrequent payloads over long ranges with low power."
    },
    {
      "question": "A BLE wearable must last a week and stream heart‑rate every second. Which optimization?",
      "options": [
        "Increase Tx power to max",
        "Use connection intervals & notifications",
        "Force pairing every minute",
        "Prefer long GATT writes for each beat"
      ],
      "answer": 1,
      "hint": "Longer connection intervals and notifications cut radio on‑time while meeting throughput needs."
    },
    {
      "question": "Gateways buffer data because:",
      "options": [
        "Cloud is always available",
        "To smooth intermittent backhaul and batch uploads",
        "To increase packet size for fun",
        "To avoid encryption"
      ],
      "answer": 1,
      "hint": "Buffering survives backhaul outages and reduces connection overhead with batch transfers."
    },
    {
      "question": "Nyquist theorem implies sampling should be:",
      "options": [
        "Below the highest signal frequency",
        "At least twice the highest frequency component",
        "Equal to the DC component",
        "Unrelated to signal bandwidth"
      ],
      "answer": 1,
      "hint": "To avoid aliasing, sample ≥ 2× the highest significant frequency component."
    },
    {
      "question": "What does an ADC do on a microcontroller?",
      "options": [
        "Generates PWM",
        "Converts analog voltage to digital value",
        "Stores files",
        "Compiles C code"
      ],
      "answer": 1,
      "hint": "An ADC digitizes analog signals for processing by the MCU."
    },
    {
      "question": "Which bus supports multiple masters and uses SDA/SCL lines with pull‑ups?",
      "options": [
        "SPI",
        "I²C",
        "UART",
        "CAN"
      ],
      "answer": 1,
      "hint": "I²C uses open‑drain with pull‑up resistors on SDA/SCL lines."
    },
    {
      "question": "SPI differs from I²C mainly because SPI:",
      "options": [
        "Is single‑ended two‑wire only",
        "Uses chip select and separate clock/data lines",
        "Requires start/stop conditions",
        "Is only half‑duplex"
      ],
      "answer": 1,
      "hint": "SPI uses SCLK, MOSI, MISO, and per‑slave CS, enabling high throughput."
    },
    {
      "question": "A pull‑up resistor on a button input prevents:",
      "options": [
        "Debounce",
        "Floating input states",
        "ADC saturation",
        "EEPROM wear"
      ],
      "answer": 1,
      "hint": "Pull‑ups hold inputs at a defined logic level when switches are open."
    },
    {
      "question": "Which sensor measures barometric pressure?",
      "options": [
        "BMP280",
        "DHT22",
        "HC‑SR04",
        "PIR"
      ],
      "answer": 0,
      "hint": "BMP280/ BME280 are barometric sensors; DHT22 measures temp/humidity."
    },
    {
      "question": "HC‑SR04 primarily measures:",
      "options": [
        "Temperature",
        "Humidity",
        "Distance via ultrasound",
        "Ambient light"
      ],
      "answer": 2,
      "hint": "The HC‑SR04 is an ultrasonic range finder for distance."
    },
    {
      "question": "Which MCU feature lowers power during inactivity?",
      "options": [
        "Busy‑wait loops",
        "Polling only",
        "Sleep modes/interrupt wakeup",
        "Max clock always"
      ],
      "answer": 2,
      "hint": "Sleep modes and interrupts drastically reduce power while idle."
    },
    {
      "question": "PWM is typically used to:",
      "options": [
        "Read analog sensors",
        "Drive variable motor speed/LED brightness",
        "Encrypt data",
        "Flash firmware"
      ],
      "answer": 1,
      "hint": "PWM controls average power to motors/LEDs by duty cycle modulation."
    },
    {
      "question": "EEPROM is best for:",
      "options": [
        "High‑speed buffering",
        "Storing configuration that survives reset",
        "Executing code",
        "Streaming video"
      ],
      "answer": 1,
      "hint": "EEPROM/NVM retains small config/calibration data across resets."
    },
    {
      "question": "Which statement about DHT22 is TRUE?",
      "options": [
        "It outputs analog voltage",
        "It communicates via 1‑wire‑like protocol",
        "It measures CO₂",
        "It requires SPI"
      ],
      "answer": 1,
      "hint": "DHT22 uses a single‑wire digital protocol (timing‑sensitive) for temp/humidity."
    },
    {
      "question": "An interrupt is preferred over polling when:",
      "options": [
        "Events are rare and timing matters",
        "Events are frequent and predictable",
        "CPU is always busy",
        "Power is unlimited"
      ],
      "answer": 0,
      "hint": "Interrupts wake MCU only on events, reducing latency and power."
    },
    {
      "question": "Which accelerometer axis convention is MOST common on boards?",
      "options": [
        "Random per vendor",
        "Right‑handed coordinate frame marked on silk",
        "Left‑handed always",
        "No axes provided"
      ],
      "answer": 1,
      "hint": "Most MEMS IMUs mark axes; right‑hand rule is common."
    },
    {
      "question": "What does sensor calibration primarily correct?",
      "options": [
        "Firmware bugs",
        "Offset/scale errors",
        "Network latency",
        "RAM size"
      ],
      "answer": 1,
      "hint": "Calibration maps raw readings to physical units with corrected offset/gain."
    },
    {
      "question": "Thermistor readings vs. temperature are:",
      "options": [
        "Linear",
        "Exponential/Nonlinear",
        "Random",
        "Binary"
      ],
      "answer": 1,
      "hint": "NTC thermistors have nonlinear resistance‑temperature curves."
    },
    {
      "question": "Which voltage level is common for MCU GPIO logic?",
      "options": [
        "48V",
        "12V",
        "5V or 3.3V",
        "120V"
      ],
      "answer": 2,
      "hint": "Most MCUs use 3.3V or 5V logic levels."
    },
    {
      "question": "MQTT QoS 0 means:",
      "options": [
        "At most once delivery",
        "At least once delivery",
        "Exactly once delivery",
        "Encrypted delivery"
      ],
      "answer": 0,
      "hint": "QoS 0 is 'fire‑and‑forget' (no ack). QoS 1 is at least once; QoS 2 is exactly once."
    },
    {
      "question": "In MQTT, the server component is called:",
      "options": [
        "Router",
        "Broker",
        "Controller",
        "Registry"
      ],
      "answer": 1,
      "hint": "The broker mediates messages between publishers and subscribers."
    },
    {
      "question": "Which is a typical device provisioning step?",
      "options": [
        "Sharing Wi‑Fi password on social media",
        "Generating per‑device credentials",
        "Disabling TLS",
        "Using default passwords forever"
      ],
      "answer": 1,
      "hint": "Per‑device keys/certs are issued during provisioning to uniquely identify devices."
    },
    {
      "question": "Which storage fits high‑write append‑only telemetry?",
      "options": [
        "Relational OLTP with heavy joins",
        "Time‑series DB",
        "Image store only",
        "Spreadsheets"
      ],
      "answer": 1,
      "hint": "Time‑series DBs are optimized for time‑indexed writes/queries."
    },
    {
      "question": "Device shadow/state twin primarily enables:",
      "options": [
        "OTA storage",
        "Offline/online state sync",
        "UI theming",
        "Sensor calibration"
      ],
      "answer": 1,
      "hint": "Shadows synchronize desired/reported states across connectivity gaps."
    },
    {
      "question": "Which REST constraint most directly improves scalability?",
      "options": [
        "Stateful server",
        "Stateless server",
        "Hidden endpoints",
        "Binary responses only"
      ],
      "answer": 1,
      "hint": "Statelessness reduces server memory of client context and eases horizontal scaling."
    },
    {
      "question": "CoAP uses which message pattern by default?",
      "options": [
        "RPC over TCP",
        "Request/response over UDP with confirmable messages",
        "Pub/sub only",
        "FTP transfers"
      ],
      "answer": 1,
      "hint": "CoAP mirrors REST over UDP; confirmable messages can be acknowledged/retransmitted."
    },
    {
      "question": "LoRaWAN network servers primarily handle:",
      "options": [
        "Adaptive data rate & deduplication",
        "Video transcoding",
        "HTML rendering",
        "DNS caching"
      ],
      "answer": 0,
      "hint": "Network servers manage ADR, MIC checks, deduplication, and routing to app servers."
    },
    {
      "question": "NB‑IoT devices attach to:",
      "options": [
        "Satellite LEO constellations",
        "Licensed LTE carriers' networks",
        "Unlicensed ISM gateways only",
        "Wired DOCSIS"
      ],
      "answer": 1,
      "hint": "NB‑IoT is an LTE‑based LPWAN operated by mobile carriers in licensed spectrum."
    },
    {
      "question": "Edge gateways often perform protocol translation from:",
      "options": [
        "HTTP to CSS",
        "Modbus/OPC‑UA to MQTT",
        "SMTP to POP3",
        "TLS to SSH"
      ],
      "answer": 1,
      "hint": "Industrial protocols can be bridged to cloud‑friendly messaging like MQTT."
    },
    {
      "question": "Which best fits streaming ingestion at scale?",
      "options": [
        "Message broker + consumer group",
        "Individual TCP sockets per device",
        "Manual polling of devices",
        "Email ingestion"
      ],
      "answer": 0,
      "hint": "Brokers and consumer groups scale horizontally for ingestion/processing."
    },
    {
      "question": "Backpressure in streaming systems means:",
      "options": [
        "Dropping all messages",
        "Regulating producers when consumers lag",
        "Encrypting messages",
        "Using UDP only"
      ],
      "answer": 1,
      "hint": "Backpressure signals producers to slow down to avoid overload."
    },
    {
      "question": "A typical field‑to‑cloud path is:",
      "options": [
        "Sensor → HDMI → Cloud",
        "Sensor → Gateway → Broker → Storage/Apps",
        "Sensor → Keyboard → Browser",
        "Sensor → CPU → Printer"
      ],
      "answer": 1,
      "hint": "Gateways aggregate to brokers, then storage/analytics applications."
    },
    {
      "question": "Open API design in IoT platforms helps with:",
      "options": [
        "Vendor lock‑in",
        "Interoperability and extensibility",
        "More proprietary silos",
        "Higher latency by default"
      ],
      "answer": 1,
      "hint": "Open APIs promote interoperability across devices/services."
    },
    {
      "question": "Digital certificate CN/SANs are used to:",
      "options": [
        "Select baud rate",
        "Identify devices/services during TLS",
        "Choose Wi‑Fi channel",
        "Compute PWM frequency"
      ],
      "answer": 1,
      "hint": "Certificates bind identities/public keys for mutual TLS authentication."
    },
    {
      "question": "A device registry stores:",
      "options": [
        "Historical sensor values only",
        "Device metadata and credentials",
        "DNS records",
        "UI themes"
      ],
      "answer": 1,
      "hint": "Registries hold identity, ownership, status, and security material."
    },
    {
      "question": "Why use a rules engine on IoT platforms?",
      "options": [
        "To style dashboards",
        "To define reactive flows/alerts without redeploying code",
        "To compress images",
        "To format CSS"
      ],
      "answer": 1,
      "hint": "Rule engines route/transform/alert based on conditions on incoming events."
    },
    {
      "question": "In CoAP, DTLS provides:",
      "options": [
        "Transport reliability",
        "Security (encryption/authentication)",
        "Compression",
        "Routing"
      ],
      "answer": 1,
      "hint": "DTLS secures CoAP similar to TLS for TCP‑based protocols."
    },
    {
      "question": "Which approach reduces egress cost from cloud analytics?",
      "options": [
        "Move more compute to the edge",
        "Store everything in block storage",
        "Avoid compression",
        "Increase sampling rates"
      ],
      "answer": 0,
      "hint": "Edge filtering/aggregation lowers data volume sent to cloud."
    },
    {
      "question": "MQTT QoS 0 means: (variant 1)",
      "options": [
        "At most once delivery",
        "At least once delivery",
        "Exactly once delivery",
        "Encrypted delivery"
      ],
      "answer": 0,
      "hint": "QoS 0 is 'fire‑and‑forget' (no ack). QoS 1 is at least once; QoS 2 is exactly once."
    },
    {
      "question": "The CIA triad in security stands for:",
      "options": [
        "Confidentiality, Integrity, Availability",
        "Control, Isolation, Audit",
        "Confidentiality, Identity, Access",
        "Certificate, IV, AES"
      ],
      "answer": 0,
      "hint": "CIA: protect data from disclosure, tampering, and ensure service uptime."
    },
    {
      "question": "Which algorithm is symmetric encryption?",
      "options": [
        "RSA",
        "ECDSA",
        "AES‑GCM",
        "Diffie‑Hellman"
      ],
      "answer": 2,
      "hint": "AES‑GCM is a symmetric authenticated encryption mode."
    },
    {
      "question": "Which protects integrity of a message?",
      "options": [
        "Plaintext",
        "Hash (e.g., SHA‑256) or MAC",
        "Compression",
        "Base64"
      ],
      "answer": 1,
      "hint": "Hashes/MACs detect modification; MACs also use a secret for authenticity."
    },
    {
      "question": "Mutual TLS provides:",
      "options": [
        "Server authentication only",
        "Client and server authentication",
        "No encryption",
        "Key escrow"
      ],
      "answer": 1,
      "hint": "mTLS validates both sides via certificates."
    },
    {
      "question": "Which is LEAST secure for device identity at scale?",
      "options": [
        "Per‑device unique keys",
        "Default shared passwords",
        "Per‑device X.509 certs",
        "Hardware root of trust"
      ],
      "answer": 1,
      "hint": "Shared defaults are widely exploited; use unique secrets or certificates."
    },
    {
      "question": "Secure boot prevents:",
      "options": [
        "Battery drain",
        "Unsigned/modified firmware from running",
        "Wi‑Fi congestion",
        "ADC noise"
      ],
      "answer": 1,
      "hint": "Boot ROM verifies signatures to ensure only trusted firmware executes."
    },
    {
      "question": "A common IoT botnet vector is:",
      "options": [
        "Strong unique creds",
        "Outdated firmware with exposed services",
        "Air‑gapped devices",
        "mTLS everywhere"
      ],
      "answer": 1,
      "hint": "Weak creds and unpatched services enabled Mirai‑like botnets."
    },
    {
      "question": "Key rotation means:",
      "options": [
        "Changing keys periodically",
        "Reusing the same key",
        "Publishing keys publicly",
        "Storing keys in plaintext"
      ],
      "answer": 0,
      "hint": "Periodic rotation limits blast radius of compromise."
    },
    {
      "question": "Which storage is BEST for private keys on devices?",
      "options": [
        "Plaintext in flash",
        "Secure element/TPM",
        "Environment variables",
        "Source code comments"
      ],
      "answer": 1,
      "hint": "Hardware secure elements protect keys against extraction."
    },
    {
      "question": "Least privilege on cloud roles means:",
      "options": [
        "Deny all access",
        "Grant only required permissions",
        "Grant admin for convenience",
        "Rotate secrets yearly only"
      ],
      "answer": 1,
      "hint": "Give the minimum permissions necessary to perform tasks."
    },
    {
      "question": "Which is a best practice for OTA updates?",
      "options": [
        "Unsigned binaries",
        "Code signing + version/rollback checks",
        "FTP anonymous upload",
        "Disable update logs"
      ],
      "answer": 1,
      "hint": "Sign firmware, verify before install, and prevent rollback to vulnerable versions."
    },
    {
      "question": "Threat modeling (e.g., STRIDE) helps to:",
      "options": [
        "Choose antenna type",
        "Systematically identify risks",
        "Allocate IP addresses",
        "Format JSON"
      ],
      "answer": 1,
      "hint": "Threat models surface spoofing, tampering, info disclosure, etc."
    },
    {
      "question": "Which protocol secures MQTT over TLS?",
      "options": [
        "mqtts (MQTT over TLS)",
        "ftp‑tls",
        "telnet‑ssl",
        "http2‑dtls"
      ],
      "answer": 0,
      "hint": "MQTT can be run over TLS (often called mqtts)."
    },
    {
      "question": "Side‑channel attacks mainly target:",
      "options": [
        "Timing/power/leakage to infer secrets",
        "Ethernet cables only",
        "Only web UIs",
        "DNS caches"
      ],
      "answer": 0,
      "hint": "They exploit timing/power/EM emissions to recover secrets."
    },
    {
      "question": "Device hardening includes:",
      "options": [
        "Disable unused services",
        "Enable default admin",
        "Open all ports",
        "Store secrets in plaintext"
      ],
      "answer": 0,
      "hint": "Reduce attack surface; secure storage; monitor and patch."
    },
    {
      "question": "HC‑SR04 distance is computed from:",
      "options": [
        "Echo pulse width and sound speed",
        "ADC sampling of analog pin",
        "I²C register value",
        "Temperature only"
      ],
      "answer": 0,
      "hint": "Distance = (pulse_time × speed_of_sound)/2 due to out‑and‑back travel."
    },
    {
      "question": "Speed of sound increases with:",
      "options": [
        "Lower temperature",
        "Higher temperature",
        "Vacuum conditions",
        "Zero humidity"
      ],
      "answer": 1,
      "hint": "Higher air temperature and humidity slightly increase speed of sound."
    },
    {
      "question": "To improve ultrasonic accuracy outdoors:",
      "options": [
        "Ignore temperature",
        "Average multiple readings and filter outliers",
        "Use higher drive voltage only",
        "Disable timing"
      ],
      "answer": 1,
      "hint": "Averaging and filtering reduce noise; temp compensation helps."
    },
    {
      "question": "Ultrasonic sensors struggle with:",
      "options": [
        "Perpendicular flat surfaces",
        "Soft/absorbent surfaces and oblique angles",
        "Short distances < 2 cm",
        "Any indoor use"
      ],
      "answer": 1,
      "hint": "Soft or angled targets reflect poorly; spec ranges apply."
    },
    {
      "question": "Which pin wiring is typical for HC‑SR04?",
      "options": [
        "Trig to output, Echo to input via timing",
        "SDA/SCL lines",
        "MOSI/MISO lines",
        "Only power pins"
      ],
      "answer": 0,
      "hint": "Trigger initiates pulse; Echo returns width proportional to distance."
    },
    {
      "question": "If the maximum measurable range is needed, you should:",
      "options": [
        "Increase sampling rate arbitrarily",
        "Ensure no echo timeout cutoff and proper gain",
        "Disable averaging",
        "Lower voltage"
      ],
      "answer": 1,
      "hint": "Set adequate timeout and ensure sufficient drive/gain for long echoes."
    },
    {
      "question": "Which environment most degrades ultrasonic sensing?",
      "options": [
        "Still air",
        "High wind and rain",
        "Controlled lab",
        "Closed room"
      ],
      "answer": 1,
      "hint": "Wind, rain, and turbulence scatter/attenuate ultrasound."
    },
    {
      "question": "An alternative non‑contact distance sensor for shiny metals is:",
      "options": [
        "Capacitive only",
        "Infrared time‑of‑flight (ToF) or lidar",
        "Barometer",
        "DHT22"
      ],
      "answer": 1,
      "hint": "Optical ToF/lidar can outperform ultrasound on certain targets."
    },
    {
      "question": "Temperature compensation for ultrasound can be done by:",
      "options": [
        "Hardcoding 343 m/s",
        "Measuring ambient temperature and correcting speed",
        "Ignoring physics",
        "Using PWM only"
      ],
      "answer": 1,
      "hint": "Speed of sound ≈ 331 + 0.6·T(°C) m/s; compensate accordingly."
    },
    {
      "question": "Which timing unit is typically used to measure Echo pulse?",
      "options": [
        "Milliseconds only",
        "Microseconds",
        "Hours",
        "Frames per second"
      ],
      "answer": 1,
      "hint": "Microsecond resolution is common for accurate distance calculations."
    },
    {
      "question": "HC‑SR04 distance is computed from: (variant 1)",
      "options": [
        "Echo pulse width and sound speed",
        "ADC sampling of analog pin",
        "I²C register value",
        "Temperature only"
      ],
      "answer": 0,
      "hint": "Distance = (pulse_time × speed_of_sound)/2 due to out‑and‑back travel."
    },
    {
      "question": "Speed of sound increases with: (variant 2)",
      "options": [
        "Lower temperature",
        "Higher temperature",
        "Vacuum conditions",
        "Zero humidity"
      ],
      "answer": 1,
      "hint": "Higher air temperature and humidity slightly increase speed of sound."
    },
    {
      "question": "To improve ultrasonic accuracy outdoors: (variant 3)",
      "options": [
        "Ignore temperature",
        "Average multiple readings and filter outliers",
        "Use higher drive voltage only",
        "Disable timing"
      ],
      "answer": 1,
      "hint": "Averaging and filtering reduce noise; temp compensation helps."
    },
    {
      "question": "Ultrasonic sensors struggle with: (variant 4)",
      "options": [
        "Perpendicular flat surfaces",
        "Soft/absorbent surfaces and oblique angles",
        "Short distances < 2 cm",
        "Any indoor use"
      ],
      "answer": 1,
      "hint": "Soft or angled targets reflect poorly; spec ranges apply."
    },
    {
      "question": "Which pin wiring is typical for HC‑SR04? (variant 5)",
      "options": [
        "Trig to output, Echo to input via timing",
        "SDA/SCL lines",
        "MOSI/MISO lines",
        "Only power pins"
      ],
      "answer": 0,
      "hint": "Trigger initiates pulse; Echo returns width proportional to distance."
    },
    {
      "question": "A smart‑city lighting system wants <100 ms actuation latency. Best design?",
      "options": [
        "Cloud‑only control loops",
        "Edge gateway control with local failover",
        "Hourly batch control",
        "Email triggers"
      ],
      "answer": 1,
      "hint": "Local control loops at the edge meet strict latency and resilience requirements."
    },
    {
      "question": "Predictive maintenance on motors often uses:",
      "options": [
        "Vibration/accelerometer features",
        "Screen brightness",
        "Keyboard input",
        "Ambient light only"
      ],
      "answer": 0,
      "hint": "Frequency‑domain vibration features (RMS, kurtosis) detect faults early."
    },
    {
      "question": "A BLE tag + LoRaWAN gateway architecture is chosen because:",
      "options": [
        "Tags send video frames",
        "BLE for short‑range tag→gateway, LoRaWAN for long‑range backhaul",
        "LoRaWAN for indoor centimeter‑precision",
        "BLE for kilometers of range"
      ],
      "answer": 1,
      "hint": "Use BLE locally and LoRaWAN for low‑power long‑range uplink to cloud."
    },
    {
      "question": "In TinyML workflows, quantization primarily:",
      "options": [
        "Increases model size",
        "Reduces model size & compute by using int8",
        "Turns models into images",
        "Removes need for training"
      ],
      "answer": 1,
      "hint": "Post‑training quantization maps FP weights/activations to int8 for MCU deployment."
    },
    {
      "question": "Which feature BEST indicates sensor drift over months?",
      "options": [
        "Instantaneous value",
        "Slow trend relative to reference",
        "Packet loss",
        "Battery voltage ripple only"
      ],
      "answer": 1,
      "hint": "Drift appears as long‑term bias relative to a calibrated reference."
    },
    {
      "question": "Event‑driven architectures are preferred because they:",
      "options": [
        "Eliminate testing",
        "Scale with decoupled producers/consumers",
        "Force polling loops",
        "Block backpressure"
      ],
      "answer": 1,
      "hint": "Event streams with consumers scale and reduce tight coupling."
    },
    {
      "question": "Shadow/twin conflict resolution typically:",
      "options": [
        "Ignores device reports",
        "Merges desired/reported with versioning",
        "Deletes all desired state",
        "Disables updates"
      ],
      "answer": 1,
      "hint": "Use versioning and conflict rules to reconcile reported/desired states."
    },
    {
      "question": "For battery health in cold climates, select cells with:",
      "options": [
        "High internal resistance",
        "Chemistry tolerant to low temps (e.g., Li‑SOCl2)",
        "NiCd only",
        "Lead‑acid only"
      ],
      "answer": 1,
      "hint": "Choose chemistries validated for the environmental temperature range."
    },
    {
      "question": "A gateway runs containers for protocol adapters. Key requirement is:",
      "options": [
        "Root‑only execution",
        "Resource limits and watchdogs",
        "Disabling logs",
        "Single container allowed"
      ],
      "answer": 1,
      "hint": "Constrain CPU/RAM with cgroups and use watchdogs for reliability."
    },
    {
      "question": "Data retention policy for a city‑wide deployment should:",
      "options": [
        "Keep everything forever",
        "Define per‑stream retention and downsampling",
        "Delete all after 24h",
        "Only CSV files"
      ],
      "answer": 1,
      "hint": "Tiered retention with downsampling controls cost while keeping trends."
    },
    {
      "question": "You need to geofence assets over cellular. Best approach:",
      "options": [
        "Hardcode GPS in firmware",
        "Use GNSS + low‑power duty cycle + server‑side zones",
        "Poll location every second always",
        "Rely on Wi‑Fi SSIDs only"
      ],
      "answer": 1,
      "hint": "Combine GNSS duty cycling with server geofences to limit power and data."
    },
    {
      "question": "Anomaly detection for a fleet with concept drift should use:",
      "options": [
        "Static thresholds only",
        "Models retrained/updated based on recent data",
        "No monitoring",
        "Random alerts"
      ],
      "answer": 1,
      "hint": "Concept drift requires adaptive thresholds or periodic retraining."
    },
    {
      "question": "Power budget for a sensor assumes 20 µA sleep, 12 mA active for 200 ms each minute. Average current ≈ ?",
      "options": [
        "~40 mA",
        "~0.04 mA",
        "~0.84 mA",
        "~1.2 mA"
      ],
      "answer": 2,
      "hint": "I_avg ≈ (20e-6*58s + 12e-3*0.2s)/60s ≈ 0.84 mA."
    },
    {
      "question": "With duty cycling, increasing transmit data rate may:",
      "options": [
        "Increase on‑air time",
        "Reduce on‑air time and energy per message",
        "Have no effect",
        "Break Nyquist"
      ],
      "answer": 1,
      "hint": "Higher data rate shortens airtime (tradeoff with coverage/robustness)."
    },
    {
      "question": "An IIoT system needs deterministic fieldbus. Best choice?",
      "options": [
        "CANopen/PROFINET",
        "SMTP",
        "POP3",
        "IMAP"
      ],
      "answer": 0,
      "hint": "Industrial busses (e.g., CANopen, PROFINET, EtherCAT) provide deterministic timing."
    },
    {
      "question": "Edge model explainability on MCU is achieved by:",
      "options": [
        "LIME/SHAP approximations with simplified features",
        "Only server logs",
        "Pixel saliency maps only",
        "No possibility"
      ],
      "answer": 0,
      "hint": "Lightweight methods or feature importances can explain MCU models."
    },
    {
      "question": "Best way to secure debug ports on production devices:",
      "options": [
        "Leave JTAG open",
        "Blow debug fuses/lock with authentication",
        "Print keys on console",
        "Expose UART on header"
      ],
      "answer": 1,
      "hint": "Disable or lock debug to prevent extraction and tampering."
    },
    {
      "question": "Cloud cost spikes due to high cardinality labels in time‑series. Mitigation?",
      "options": [
        "Add more labels",
        "Remove high‑cardinality tags and pre‑aggregate",
        "Use CSV",
        "Increase sampling rate"
      ],
      "answer": 1,
      "hint": "High cardinality explodes index size; reduce labels and aggregate."
    },
    {
      "question": "Choosing between LoRaWAN and NB‑IoT should consider:",
      "options": [
        "Licensed vs unlicensed spectrum and coverage needs",
        "UI theme",
        "Spreadsheet color",
        "Keyboard layout"
      ],
      "answer": 0,
      "hint": "NB‑IoT uses licensed carrier networks; LoRaWAN uses unlicensed ISM with private gateways."
    },
    {
      "question": "A smart‑city lighting system wants <100 ms actuation latency. Best design? (variant 1)",
      "options": [
        "Cloud‑only control loops",
        "Edge gateway control with local failover",
        "Hourly batch control",
        "Email triggers"
      ],
      "answer": 1,
      "hint": "Local control loops at the edge meet strict latency and resilience requirements."
    },
    {
      "question": "Predictive maintenance on motors often uses: (variant 2)",
      "options": [
        "Vibration/accelerometer features",
        "Screen brightness",
        "Keyboard input",
        "Ambient light only"
      ],
      "answer": 0,
      "hint": "Frequency‑domain vibration features (RMS, kurtosis) detect faults early."
    },
    {
      "question": "A BLE tag + LoRaWAN gateway architecture is chosen because: (variant 3)",
      "options": [
        "Tags send video frames",
        "BLE for short‑range tag→gateway, LoRaWAN for long‑range backhaul",
        "LoRaWAN for indoor centimeter‑precision",
        "BLE for kilometers of range"
      ],
      "answer": 1,
      "hint": "Use BLE locally and LoRaWAN for low‑power long‑range uplink to cloud."
    },
    {
      "question": "In TinyML workflows, quantization primarily: (variant 4)",
      "options": [
        "Increases model size",
        "Reduces model size & compute by using int8",
        "Turns models into images",
        "Removes need for training"
      ],
      "answer": 1,
      "hint": "Post‑training quantization maps FP weights/activations to int8 for MCU deployment."
    },
    {
      "question": "Which feature BEST indicates sensor drift over months? (variant 5)",
      "options": [
        "Instantaneous value",
        "Slow trend relative to reference",
        "Packet loss",
        "Battery voltage ripple only"
      ],
      "answer": 1,
      "hint": "Drift appears as long‑term bias relative to a calibrated reference."
    },
    {
      "question": "Event‑driven architectures are preferred because they: (variant 6)",
      "options": [
        "Eliminate testing",
        "Scale with decoupled producers/consumers",
        "Force polling loops",
        "Block backpressure"
      ],
      "answer": 1,
      "hint": "Event streams with consumers scale and reduce tight coupling."
    }
  ];
  })();
  