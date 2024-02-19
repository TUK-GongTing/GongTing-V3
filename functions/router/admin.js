const express = require('express');
const { isadmin } = require('../middlewares');
const { checkverify } = require('../controllers/admin');

const router = express.Router();


router.get('/checkverify',isadmin,checkverify)
module.exports = router;