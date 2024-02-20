const db = require('firebase-admin').firestore();
exports.checkverify = async(req,res) => {
    return res.render('admincheckverify')
}
exports.algorithm = async(req,res) => {
    const {manUid,womanUid} = req.body;
    // 남자 데이터 불러오기 
    const manData = (await db.collection('matching_submit').doc(manUid).get()).data()
    console.log(manData);
    const womanData = (await db.collection('matching_submit').doc(womanUid).get()).data()
    console.log(womanData);
    return res.redirect('/gongting-v3/us-central1/api/')
}
exports.adminmatching = async (req,res) => {
    return res.render('adminmatching',{ csrfToken: req.csrfToken()})
}