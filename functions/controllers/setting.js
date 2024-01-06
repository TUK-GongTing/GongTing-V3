// const settingService = require('../services/setting');
const admin = require('firebase-admin');
const db = admin.firestore();

exports.myprofileset = async (req,res) =>{
    const { gender, age, major, smoke,chars ,socialmediaid,socialmediaidtype,mbti,hobby,features,introduction} = req.body;
    const uid = req.cookies.uid;
    const date = new Date(Date.now());
    await db.collection('userprofile').doc(uid).set({
        gender,
        age,
        major,
        smoke,
        chars,
        socialmediaid,
        socialmediaidtype,
        mbti,
        hobby,
        features,
        introduction,
        date,
    })
    await db.collection('users').doc(uid).update({
        mypset:true,
    }) 
    return res.redirect("/api/")
}