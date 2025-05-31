const express = require('express');
const WebSocket = require('ws');
const app = express();
app.use(express.json());
const orders = [];

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    wss.clients.forEach(client => client.send(JSON.stringify(order)));
    res.json({ success: true });
});

const server = app.listen(3000);
const wss = new WebSocket.Server({ server });