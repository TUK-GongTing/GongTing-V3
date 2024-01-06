const express = require('express');
const { isloggedIn } = require('../middlewares');
const { myprofileset } = require('../controllers/setting');
const router = express.Router();

router.post('/myprofileset',isloggedIn,myprofileset)

module.exports = router;