const express = require('express');
const { myprofileset, groupmatchingset} = require('../controllers/setting');
const router = express.Router();

router.post('/myprofileset',myprofileset)
router.post('/groupmatching',groupmatchingset)
module.exports = router;