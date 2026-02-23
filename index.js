// Node server: Express serves static files, Socket.io attaches to same HTTP server (Railway-friendly)
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files: CSS, JS, and root assets (avoid serving package.json / node_modules)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
// Root-level assets (e.g. chat.png, ting.mp3) – add files here or in a dedicated folder
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback: serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // Allow same-origin and Railway domain; tighten in production if needed
    methods: ['GET', 'POST'],
  },
});

const users = {};

io.on('connection', (socket) => {
  socket.on('new-user-joined', (name) => {
    console.log('New user:', name);
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  socket.on('send', (message) => {
    socket.broadcast.emit('receive', {
      message,
      name: users[socket.id],
    });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Chit-Chat server running on port ${PORT}`);
});
