const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;
const uri = 'mongodb+srv://flow:t9ZYFHk0mVqxEq1p@ppdb.aykcyfc.mongodb.net/?retryWrites=true&w=majority'; // Beispiel-Verbindungs-URL
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Verbindung zur MongoDB hergestellt');
  } catch (error) {
    console.error('Fehler bei der Verbindung zur MongoDB:', error);
  }
}

connectToMongoDB();

// Middleware zum Parsen von JSON-Daten
app.use(express.json());

// GET-Endpunkt für die Liste aller Restaurants
app.get('/restaurants', (req, res) => {
  const collection = client.db().collection('restaurants');

  collection.find({}).toArray((error, restaurants) => {
    if (error) {
      console.error('Fehler beim Abrufen der Restaurants:', error);
      res.sendStatus(500);
    } else {
      res.json(restaurants);
    }
  });
});

// POST-Endpunkt zum Speichern eines neuen Restaurants
app.post('/restaurant', (req, res) => {
  const { name, address, category } = req.body;

  if (!name || !address || !category) {
    return res.status(400).json({ error: 'Name, address, and category are required fields' });
  }

  const collection = client.db().collection('restaurants');

  const existingRestaurant = collection.findOne({ name });

  if (existingRestaurant) {
    return res.status(409).json({ error: 'Restaurant already exists' });
  }

  const newRestaurant = { name, address, category };

  collection.insertOne(newRestaurant, (error, result) => {
    if (error) {
      console.error('Fehler beim Einfügen des Restaurants:', error);
      res.sendStatus(500);
    } else {
      res.status(201).json(newRestaurant);
    }
  });
});

// GET-Endpunkt für ein einzelnes Restaurant
app.get('/restaurant/:name', (req, res) => {
  const { name } = req.params;
  const collection = client.db().collection('restaurants');

  collection.findOne({ name }, (error, restaurant) => {
    if (error) {
      console.error('Fehler beim Abrufen des Restaurants:', error);
      res.sendStatus(500);
    } else if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  });
});

// PUT-Endpunkt zum Aktualisieren eines Restaurants
app.put('/restaurant/:name', (req, res) => {
  const { name } = req.params;
  const { address, category } = req.body;
  const collection = client.db().collection('restaurants');

  collection.updateOne({ name }, { $set: { address, category } }, (error, result) => {
    if (error) {
      console.error('Fehler beim Aktualisieren des Restaurants:', error);
      res.sendStatus(500);
    } else if (result.modifiedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  });
});

// DELETE-Endpunkt zum Löschen eines Restaurants
app.delete('/restaurant/:name', (req, res) => {
  const { name } = req.params;
  const collection = client.db().collection('restaurants');

  collection.deleteOne({ name }, (error, result) => {
    if (error) {
      console.error('Fehler beim Löschen des Restaurants:', error);
      res.sendStatus(500);
    } else if (result.deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
