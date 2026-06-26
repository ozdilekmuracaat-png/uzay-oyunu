const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

app.get('/', (req, res) => {
    res.send('Coolify Uzay Oyunu Sunucusu Aktif!');
});

io.on('connection', (socket) => {
    console.log('Bir oyuncu bağlandı:', socket.id);
});

http.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor.');
});
