const db = require('firebase-admin').firestore();
exports.checkverify = async(req,res) => {
    return res.render('admincheckverify')
}
exports.algorithm = async(req,res) => {
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
    return res.redirect('/gongting-v3/us-central1/api/')
}
exports.adminmatching = async (req,res) => {
    return res.render('adminmatching',{ csrfToken: req.csrfToken()})
}