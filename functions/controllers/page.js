const pageService = require('../services/page');
const db = require('firebase-admin').firestore();

exports.home = async(req,res) =>{
    const {verify,kverify} = (await db.collection('users').doc(req.cookies.uid).get()).data();
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    const isResult = (await db.collection('matching_result').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("home",{verify,kverify,isResult,isSubmit})
}
exports.welcome = async (req,res) =>{
    return res.render("welcome");
}
exports.login = (req,res) =>{
    return res.render("login")
}
exports.signup = (req,res) =>{
    return res.render("signup")
}
exports.intro = (req,res) =>{
    return res.render("intro")
}
exports.matchingresultgroup = async(req,res) =>{
    const resultdata = (await db.collection('matching_result').doc(req.cookies.uid).get()).data() ?? undefined ;
    const {status} = (await db.collection('matching_result').doc(resultdata.otherUid).get()).data() ?? undefined ; // otherUid 는 상대방 uid
    let matchingResult ='';
    if(resultdata.status == '수락' && status == '수락') matchingResult = '성공';
    if(resultdata.status == '거절' || status == '거절') matchingResult = '실패';
    return res.render("matchingresultgroup",{resultdata,status,matchingResult});
}
exports.myprofile = async (req,res) =>{
    const userdata = await pageService.userdata(req.cookies.uid);
    return res.render("myprofile",{userdata})
}

exports.viewprofilepage = async (req,res) =>{
    const userdata = await pageService.alluserprofile(req.cookies.uid);
    return res.render("viewprofile",{name:await pageService.username(req.cookies.uid),userdata});
}

exports.verify = async (req,res) =>{
    const {verify,verifymessage}=(await db.collection('users').doc(req.cookies.uid).get()).data()
    return res.render("verify",{uid:req.cookies.uid,verify,verifymessage})
}
exports.kverify = async(req,res) =>{
    const {kverify,kverifymessage}=(await db.collection('users').doc(req.cookies.uid).get()).data()
    return res.render("kverify",{uid:req.cookies.uid,kverify,kverifymessage})
}
exports.verifypage = async (req,res) => {
    const {verify,kverify} = (await db.collection('users').doc(req.cookies.uid).get()).data();
    return res.render('verifypage',{verify,kverify})
}

exports.mypset = (req,res) =>{ // 내프로필 설정
    return res.render("myprofileset",{ csrfToken: req.csrfToken()})
}
exports.gpset = async (req,res) =>{ // 그룹매칭 프로필 설정
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("groupmatching",{ isSubmit,csrfToken: req.csrfToken()})
}