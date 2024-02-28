const express = require('express');
const router = express.Router();

const { isloggedIn, isSetpf, isverify} = require('../middlewares');
const { verifypage,kverify,intro, login, signup, myprofile,matchingresultgroup, verify, gpset, welcome, home, mypset, gpset3, gpset2, gpset1 } = require('../controllers/page');


router.get('/',isloggedIn,isSetpf,home)
router.get('/intro',intro)  
router.get('/login',login)  
router.get('/signup',signup)  
router.get('/welcome',isloggedIn,welcome)

router.get('/myprofileset',isloggedIn,mypset)

router.get('/myprofile',isloggedIn,myprofile)
router.get('/matchingresult',isloggedIn,matchingresultgroup)

router.get('/verify',isloggedIn,verify);
router.get('/kverify',isloggedIn,kverify)
router.get('/verifypage',isloggedIn,verifypage)

router.get('/groupmatching', isloggedIn,isSetpf,isverify,gpset);
router.get('/groupmatching1',isloggedIn,isSetpf,isverify,gpset1);
router.get('/groupmatching2',isloggedIn,isSetpf,isverify,gpset2);
router.get('/groupmatching3',isloggedIn,isSetpf,isverify,gpset3);


module.exports = router;