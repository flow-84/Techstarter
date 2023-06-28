const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpunkte
app.get('/uuid', (req, res) => {
  const uuid = uuidv4();
  res.send(uuid);
});

app.get('/user-agent', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(userAgent);
});

app.get('/headers', (req, res) => {
  res.json(req.headers);
});

app.get('/url', (req, res) => {
  res.send(req.url);
});

app.get('/json', (req, res) => {
  const data = {
    person: {
      name: 'John',
      age: 30
    }
  };
  res.json(data);
});

app.get('/xml', (req, res) => {
  const xml = '<person><name>John</name><age>30</age></person>';
  res.type('application/xml').send(xml);
});

app.post('/formdata', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    console.log(`Name: ${name}, Age: ${age}`);
    res.send('Form data received');
  });  

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Express-Server läuft auf Port ${PORT}`);
});
