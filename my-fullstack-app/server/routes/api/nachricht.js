const express = require('express');
const cors = require('cors');
const router = express.Router();

// CORS für alle Origins erlauben (nur für Testzwecke)
router.use(cors({ origin: '*' }));

router.get('/', (req, res) => {
  console.log('GET /api/nachricht ', req.ip);
  res.json({ nachricht: 'Hallo von der API!' });
});

module.exports = router;
