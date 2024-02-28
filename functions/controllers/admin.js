const db = require('firebase-admin').firestore();

// 매칭 알고리즘 부분  //

// 페이지 //
exports.adminmatching = async (req,res) => {
    try{
        return res.render('adminmatching',{ csrfToken: req.csrfToken()})   
    }catch(err){
        console.log(err);
        return res.redirect("/error")
    }
}
// 알고리즘 //
exports.algorithm = async(req,res) => {
    try{
        const {manUid,womanUid} = req.body;
        // 남자 데이터 불러오기 
        const manData = (await db.collection('matching_submit').doc(manUid).get()).data()
        const womanData = (await db.collection('matching_submit').doc(womanUid).get()).data()
        await db.collection("matching_result").doc(manUid).set({
            data:womanData,
            status:"매칭중",
            otherUid:womanUid,
        });
        await db.collection("matching_result").doc(womanUid).set({
            data:manData,
            status:"매칭중",
            otherUid:manUid,
        });
        return res.redirect("/gongting-v3/us-central1/api/admin/matching");
    }catch(err){
        console.log(err);
        return res.redirect("/error")
    }
}

// 학생증 인증 부분 //

// 페이지 //
exports.checkverify = async(req,res) => {
    try{
        const verifyData =  (await db.collection('users').get())
        return res.render('adminverifycheck',{verifyData,csrfToken: req.csrfToken()})  
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}

// 학생증 인증 성공시 //
exports.verifyallow = async (req,res) => {
    try{
        const uid = req.params.uid;
        await db.collection("users").doc(uid).update({
            verify:"인증완료",
        })
        return res.redirect("/gongting-v3/us-central1/api/admin/verify");
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}
// 학생증 인증 실패시 //
exports.verifyreject = async (req,res) => {
    try{
        const uid = req.params.uid;
        const {verifymessage} = req.body;
        await db.collection("users").doc(uid).update({
            verify:"반려됨",
            verifymessage,
        })
        return res.redirect("/gongting-v3/us-central1/api/admin/kverify");
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}

// 페이지 //
exports.checkkverify = async(req,res) => {
    try{
        const verifyData =  (await db.collection('users').get())
        return res.render('adminkverifycheck',{verifyData,csrfToken: req.csrfToken()})
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}

// 학생증 인증 성공시 //
exports.kverifyallow = async (req,res) => {
    try{
        const uid = req.params.uid;
        await db.collection("users").doc(uid).update({
            kverify:"인증완료",
        })
        return res.redirect("/gongting-v3/us-central1/api/admin/kverify");
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}
// 학생증 인증 실패시 //
exports.kverifyreject = async (req,res) => {
    try{
        const uid = req.params.uid;
        const {kverifymessage} = req.body;
        await db.collection("users").doc(uid).update({
            kverify:"반려됨",
            kverifymessage,
        })
        return res.redirect("/gongting-v3/us-central1/api/admin/kverify");
    }catch(err){
        console.log(err)
        return res.redirect("/error")
    }
}