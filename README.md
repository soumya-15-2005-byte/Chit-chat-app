# Chit-Chat

A real-time group chat web app built with **Node.js**, **Express**, and **Socket.io**. Join with a name, send messages, and see when others join or leave—all in real time.

![Node](https://img.shields.io/badge/Node.js-18+-green) ![Socket.io](https://img.shields.io/badge/Socket.io-4.x-blue) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

## Features

- **Real-time messaging** – Messages appear instantly for everyone in the room.
- **Join / leave notifications** – See when someone joins or leaves the chat.
- **Simple UI** – Clean, responsive layout with a gradient theme.
- **Same-room chat** – One shared room; no sign-up required.

## Tech Stack

- **Backend:** Node.js, Express, Socket.io  
- **Frontend:** HTML, CSS, JavaScript (vanilla)  
- **Deployment-ready:** Single port, `process.env.PORT` support for Railway and similar platforms.

## Quick Start (Local)

### Prerequisites

- Node.js 18 or later  
- npm (comes with Node)

### Run locally

```bash
# Clone the repo
git clone https://github.com/user-name/chit-chat.git
cd chit-chat

# Install dependencies
npm install

# Start the server (default port 8000)
npm start
```

Open **http://localhost:8000** in your browser. Enter a name when prompted and start chatting. Use another tab or device (same URL) to simulate multiple users.

### Optional: logo and sound

- Add **`chat.png`** in the **`public/`** folder for the nav bar logo.  
- Add **`ting.mp3`** in **`public/`** for the message notification sound.  

If these are missing, the app still works; the logo is hidden and the sound is skipped.

### Development (auto-restart)

```bash
npm run dev
```

Uses `nodemon` to restart the server when you change code.

---

## Deploy on Railway

This app is set up for **Railway**: one port, HTTP + WebSockets on the same server.

### Steps

1. **Sign in**  
   Go to [railway.app](https://railway.app) and sign in (e.g. with GitHub).

2. **New project from GitHub**  
   - Click **New Project**.  
   - Choose **Deploy from GitHub repo**.  
   - Select **optimus-prime-01/chit-chat** (or your fork).  
   - Railway will detect Node.js and use `npm install` and `npm start`.

3. **Generate a public URL**  
   - Open your service → **Settings** → **Networking**.  
   - Click **Generate Domain**.  
   - Copy the URL (e.g. `https://your-app.up.railway.app`).

4. **Wait and test**  
   - Wait 2–5 minutes for the first deploy and domain to be ready.  
   - Open the generated URL, enter a name, and chat.  
   - Open the same URL in another tab or browser to test multiple users.

### Notes

- **Port:** The app uses `process.env.PORT`; Railway sets this automatically.  
- **No env vars required** for basic chat.  
- **Auto-deploys:** Pushing to the connected branch will trigger a new deploy.

---

## Project Structure

```
chit-chat/
├── index.js          # Express + Socket.io server
├── index.html        # Main page
├── css/
│   └── style.css    # Styles
├── js/
│   └── client.js    # Socket.io client & UI logic
├── public/          # Optional: chat.png, ting.mp3
├── package.json
└── README.md
```


