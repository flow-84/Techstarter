const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpunkte
app.get('/status/:code', (req, res) => {
  const { code } = req.params;
  res.sendStatus(code);
});

app.get('/method', (req, res) => {
  res.send(req.method);
});

app.get('/robots', (req, res) => {
  const robotsTxt = `
    User-agent: Bing
    User-agent: Yandex
    Disallow: /

    User-agent: Google
    Disallow: /nogooglebot

    Disallow: /*.jpg
  `;
  res.type('text/plain').send(robotsTxt);
});

app.get('/random', (req, res) => {
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  res.send(randomText);
});

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Express-Server läuft auf Port ${PORT}`);
});
