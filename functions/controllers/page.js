const pageService = require('../services/page');
const db = require('firebase-admin').firestore();

exports.home = async(req,res) =>{
    const {verify,kverify} = (await db.collection('users').doc(req.cookies.uid).get()).data();
    return res.render("home",{verify,kverify})
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
    return res.render("matchingresultgroup");
}


exports.myprofile = async (req,res) =>{
    const userdata = await pageService.userdata(req.cookies.uid);
    return res.render("myprofile",{name:await pageService.username(req.cookies.uid),chars:await pageService.userchar(req.cookies.uid),userdata})
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
exports.gpset = (req,res) =>{ // 그룹매칭 프로필 설정
    return res.render("groupmatching",{ csrfToken: req.csrfToken()})
}