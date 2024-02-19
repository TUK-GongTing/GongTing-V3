const express = require('express');
const router = express.Router();

const { isloggedIn, isSetpf, isverify} = require('../middlewares');
const { verifypage,kverify,viewprofilepage,intro, login, signup, myprofile,matchingresultgroup, verify, gpset, welcome, home, mypset } = require('../controllers/page');


router.get('/',isloggedIn,isSetpf,home)
router.get('/intro',intro)  
router.get('/login',login)  
router.get('/signup',signup)  
router.get('/welcome',isloggedIn,welcome)

router.get('/myprofileset',isloggedIn,mypset)

router.get('/myprofile',isloggedIn,myprofile)
router.get('/viewprofile',isloggedIn,viewprofilepage)
router.get('/matchingresult',isloggedIn,matchingresultgroup)

router.get('/verify',isloggedIn,verify);
router.get('/kverify',isloggedIn,kverify)
router.get('/verifypage',isloggedIn,verifypage)

router.get('/groupmatching', isloggedIn,isSetpf,isverify,gpset);

module.exports = router;