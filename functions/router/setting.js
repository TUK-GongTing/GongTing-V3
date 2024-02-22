const express = require('express');
const { myprofileset, groupmatchingset, allow, reject} = require('../controllers/setting');
const router = express.Router();

router.post('/myprofileset',myprofileset)
router.post('/groupmatching',groupmatchingset)
router.get('/allow',allow)
router.get('/reject',reject)
module.exports = router;