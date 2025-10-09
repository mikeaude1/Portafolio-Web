const express = require('express');
const router = express.Router();
const seedCtrl = require('../controllers/seedController');

// POST /api/seed?count=50&reset=true
router.post('/', seedCtrl.seed);

module.exports = router;