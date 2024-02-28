const express = require('express');
const { checkverify, adminmatching,algorithm, verifyallow, verifyreject, kverifyreject, kverifyallow, checkkverify} = require('../controllers/admin');

const router = express.Router();


// 학생증 인증 //
router.get('/verify',checkverify)
router.post("/verify/allow/:uid",verifyallow);
router.post("/verify/reject/:uid",verifyreject)

// 카카오톡 채널 인증 //
router.get('/kverify',checkkverify)
router.post("/kverify/allow/:uid",kverifyallow);
router.post("/kverify/reject/:uid",kverifyreject)

// 매칭 //
router.get('/matching',adminmatching)
router.post('/matching',algorithm) 

module.exports = router;