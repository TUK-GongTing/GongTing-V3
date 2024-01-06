const pageService = require('../services/page');

exports.home = (req,res) =>{
    return res.render("home")
}
exports.welcome = async (req,res) =>{
    return res.render("welcome", { name: await pageService.username(req.cookies.uid) });
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
exports.matching= (req,res) =>{
    return res.render("matching")
}
exports.matchingInfo = (req,res) =>{
    return res.render("matchingInfo")
}
exports.matchingresultlove = (req,res) =>{
    return res.render("matchingresultlove")
}
exports.matchingresultfriend = (req,res) =>{
    return res.render("matchingresultfriend")
}
exports.matchingresultgroup = (req,res) =>{
    return res.render("matchingresultgroup")
}
exports.myprofile = async (req,res) =>{
    return res.render("myprofile",{name:await pageService.username(req.cookies.uid),chars:await pageService.userchar(req.cookies.uid),verify:await pageService.userverify(req.cookies.uid)})
}
exports.viewprofilepage = async (req,res) =>{
    const userP = await pageService.alluserprofile(req.cookies.uid);
    return res.render("viewprofile",{
        chars: userP.chars, name: await pageService.username(req.cookies.uid), age: userP.age, gender: userP.gender,
         smoke: userP.smoke, major: userP.major, mbti: userP.mbti, idtype: userP.socialmediaidtype, id: userP.socialmediaid,
         introduction: userP.introduction, hobby: userP.hobby, features:userP.features, })
}
exports.verify = (req,res) =>{
    return res.render("verify",{uid:req.cookies.uid})
}
exports.mypset = (req,res) =>{ // 내프로필 설정
    return res.render("myprofileset",{ csrfToken: req.csrfToken()})
}
exports.lpset = (req,res) =>{ // 연인매칭 프로필 설정
    return res.render("lovematching")
}
exports.fpset = (req,res) =>{ // 친구매칭 프로필 설정
    return res.render("friendmatching")
}
exports.gpset = (req,res) =>{ // 그룹매칭 프로필 설정
    return res.render("groupmatching")
}
