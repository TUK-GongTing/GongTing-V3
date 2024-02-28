const express = require('express')
const router = express.Router();
const {authlogin, authlogout } = require('../controllers/auth');

router.post('/login',authlogin)
router.get("/logout",authlogout);

module.exports = router;