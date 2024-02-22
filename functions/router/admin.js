const express = require('express');
const { checkverify, adminmatching,algorithm} = require('../controllers/admin');

const router = express.Router();


router.get('/checkverify',checkverify)
router.get('/matching',adminmatching)
router.post('/matching',algorithm) 

module.exports = router;