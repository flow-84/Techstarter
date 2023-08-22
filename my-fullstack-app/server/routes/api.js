const express = require('express');
const cors = require('cors');
const router = express.Router();
const nachricht = require('./api/nachricht');

// CORS für alle Origins erlauben (nur für Testzwecke)
router.use(cors({ origin: '*' }));

router.use('/nachricht', nachricht);

module.exports = router;
