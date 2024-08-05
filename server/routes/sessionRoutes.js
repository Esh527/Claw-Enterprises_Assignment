const express = require('express');
const { createSession, getSessions } = require('../controllers/sessionController');
const router = express.Router();

router.post('/sessions', createSession);
router.get('/sessions', getSessions);

module.exports = router;
