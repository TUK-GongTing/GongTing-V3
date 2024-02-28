const db = require('firebase-admin').firestore();

// 홈 // 
exports.home = async(req,res) =>{
    const {verify,kverify} = (await db.collection('users').doc(req.cookies.uid).get()).data();
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    const isResult = (await db.collection('matching_result').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("home",{verify,kverify,isResult,isSubmit})
}
// 그냥 페이지들 //
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

// 내 프로필 // 
exports.myprofile = async (req,res) =>{
    const userdata = (await db.collection('userprofile').doc(req.cookies.uid).get()).data()
    return res.render("myprofile",{userdata})
}

// 인증 페이지 및 인증 // 
exports.verifypage = async (req,res) => {
    const {verify,kverify} = (await db.collection('users').doc(req.cookies.uid).get()).data();
    return res.render('verifypage',{verify,kverify})
}
exports.verify = async (req,res) =>{
    const {verify,verifymessage}=(await db.collection('users').doc(req.cookies.uid).get()).data()
    return res.render("verify",{uid:req.cookies.uid,verify,verifymessage})
}
exports.kverify = async(req,res) =>{
    const {kverify,kverifymessage}=(await db.collection('users').doc(req.cookies.uid).get()).data()
    return res.render("kverify",{uid:req.cookies.uid,kverify,kverifymessage})
}

// 프로필 설정 // 
exports.mypset = (req,res) =>{ // 내프로필 설정
    return res.render("myprofileset",{ csrfToken: req.csrfToken()})
}
exports.gpset = async (req,res) =>{ // 그룹매칭 프로필 설정
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("groupmatching",{ isSubmit,csrfToken: req.csrfToken()})
}

// 과팅 신청 재설정 // 
exports.gpset1 = async (req,res) =>{ // 그룹매칭 프로필 설정
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    let groupmatching_count =isSubmit?.wishcount
    return res.render("groupmatching1",{ isSubmit,groupmatching_count,csrfToken: req.csrfToken()})
}
exports.gpset2 = async (req,res) =>{ // 그룹매칭 프로필 설정
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("groupmatching2",{ isSubmit,csrfToken: req.csrfToken()})
}
exports.gpset3 = async (req,res) =>{ // 그룹매칭 프로필 설정
    const isSubmit = (await db.collection('matching_submit').doc(req.cookies.uid).get()).data() ?? undefined;
    return res.render("groupmatching3",{ isSubmit,csrfToken: req.csrfToken()})
}

// 매칭 결과 //
exports.matchingresultgroup = async(req,res) =>{
    const resultdata = (await db.collection('matching_result').doc(req.cookies.uid).get()).data() ?? undefined ;
    const {status} = (await db.collection('matching_result').doc(resultdata.otherUid).get()).data() ?? undefined ; // otherUid 는 상대방 uid
    let matchingResult ='';
    if(resultdata.status == '수락' && status == '수락') matchingResult = '성공';
    if(resultdata.status == '거절' || status == '거절') matchingResult = '실패';

    return res.render("matchingresultgroup",{resultdata,status,matchingResult});
}