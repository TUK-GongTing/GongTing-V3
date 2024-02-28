const express = require('express');
const { myprofileset, groupmatchingset, allow, reject, groupmatchingset1, groupmatchingset3, groupmatchingset2} = require('../controllers/setting');
const router = express.Router();

router.post('/myprofileset',myprofileset)
router.post('/groupmatching',groupmatchingset)
// 과팅 신청 수정 // 
router.post('/groupmatching1',groupmatchingset1)
router.post('/groupmatching2',groupmatchingset2)
router.post('/groupmatching3',groupmatchingset3)

router.get('/allow',allow)
router.get('/reject',reject)
module.exports = router;