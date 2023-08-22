const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Globale Variable für die Nachricht
let nachricht = 'Hallo von der API!';

// CORS für alle Origins erlauben (nur für Testzwecke)
app.use(cors({ origin: '*' }));

app.use(express.json()); // Body-Parser für JSON

app.get('/', (req, res) => {
  res.send('Hallo von Express!');
});

app.get('/api/nachricht', (req, res) => {
  res.json({ nachricht: nachricht });
});

app.post('/api/nachricht/update', (req, res) => {
  nachricht = req.body.nachricht;
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
