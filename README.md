# Voice Schedule Frontend 🎤💻

The frontend interface for the **Voice Scheduling Agent**, built with **React 19** and **Vite**. This application provides a high-fidelity voice interface where users can talk to an AI assistant ("Elliot") to schedule meetings directly into their Google Calendar.

The application is deployed on **Vercel** and connects to a backend hosted on Render.

---

## ✨ Features

* **Voice-First UI**: A seamless microphone-based interface for hands-free scheduling.
* **Live Transcripts**: Real-time visual feedback of the conversation between the user and the AI bot.
* **State-Driven Flow**: Smooth transitions between the Landing Page, Active Voice Call, and Success Screen.
* **Modern Design**: Styled with **Tailwind CSS 4** featuring custom animations, gradients, and a responsive layout.
* **Vapi Integration**: Powered by the `@vapi-ai/web` SDK for low-latency voice communication.

---

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| **React 19** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS 4** | Utility-first CSS with modern `@theme` support |
| **Vapi Web SDK** | Voice AI Orchestration |
| **Lucide React** | Iconography |

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── LandingPage.jsx      # Hero section & "How it works"
│   ├── VoiceInterface.jsx   # Active call UI & Mic controls
│   ├── TranscriptMessage.jsx# Individual chat bubbles
│   └── SuccessScreen.jsx    # Post-scheduling confirmation
├── hooks/
│   └── useVapi.js           # Custom hook for Vapi SDK logic
├── App.jsx                  # Main screen router
└── main.jsx                 # Entry point

```

---

## ⚙️ Environment Setup

To run this project locally, you must create a `.env` file in the root directory with your Vapi and Backend credentials.

```env
# Vapi Configuration
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key
VITE_VAPI_ASSISTANT_ID=your_assistant_id

# Backend Configuration
VITE_BACKEND_URL=https://your-backend-url.onrender.com

```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install

```

### 2. Run Locally

```bash
npm run dev

```

### 3. Build for Production

```bash
npm run build

```

---

## 🧠 Key Logic: `useVapi` Hook

The heart of the voice interaction lies in the `useVapi.js` hook. It manages:

* **Call Lifecycle**: Handles `connecting`, `active`, and `ended` statuses.
* **Event Listeners**: Listens for `speech-start`, `speech-end`, and `transcript` messages to update the UI in real-time.
* **Function Tracking**: Monitors when the AI triggers the `Calendar` tool call.

---

## 🌐 Deployment

* **Frontend**: Deployed on **Vercel** (Automated CI/CD via GitHub).
* **Backend**: Connects to the Node.js API endpoint `/webhook/create-event` (Generic endpoint).

Backend Deployed on Render [Github](https://github.com/Pavan-Kumar-Z/voice-scheduling-agent/blob/main/README.md)
