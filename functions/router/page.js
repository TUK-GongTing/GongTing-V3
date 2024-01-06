const express = require('express');
const router = express.Router();

const { isloggedIn, isSetpf } = require('../middlewares');
const { viewprofilepage,intro, login, signup, matching, matchingInfo, myprofile, matchingresultlove, matchingresultfriend, matchingresultgroup, verify, lpset, fpset, gpset, welcome, home, mypset } = require('../controllers/page');


router.get('/',isloggedIn,isSetpf,home)
router.get('/intro',intro)  
router.get('/login',login)  
router.get('/signup',signup)  
router.get('/welcome',isloggedIn,welcome)
router.get('/matching',isloggedIn,matching)  
router.get('/matchingInfo',isloggedIn,matchingInfo)  
router.get('/myprofile',isloggedIn,myprofile)  
router.get('/matchingresult-love',isloggedIn,matchingresultlove)
router.get('/matchingresult-friend',isloggedIn,matchingresultfriend)
router.get('/matchingresult-group',isloggedIn,matchingresultgroup)
router.get('/viewprofile',isloggedIn,viewprofilepage)
router.get('/verify',isloggedIn,verify);

router.get('/myprofileset',isloggedIn,mypset)
router.get('/lovematching', isloggedIn,lpset);
router.get('/friendmatching', isloggedIn,fpset);
router.get('/gruopmatchingInfo',isloggedIn,)
router.get('/groupmatching', isloggedIn,gpset);

module.exports = router;