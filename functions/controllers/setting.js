const admin = require('firebase-admin');
const db = admin.firestore();

exports.myprofileset = async (req,res) =>{
    const { gender, age, height, smoke,chars,studentnum,kakaoid,grade,mbti,hobby,appearance} = req.body;
    const uid = req.cookies.uid;
    const date = new Date(Date.now());
    await db.collection('userprofile').doc(uid).set({
        gender,
        age,
        height,
        smoke,
        chars,
        grade,
        studentnum,
        kakaoid,
        mbti,
        hobby,
        appearance,
        date,
    })
    return res.redirect("/gongting-v3/us-central1/api/")
}
exports.groupmatchingset = async (req,res) =>{
    const uid = req.cookies.uid;
    const { wishcount,height1,age1,appearance1,smoke1,major1,grade1,height2,age2,appearance2,smoke2,major2,grade2,height3,age3,appearance3,smoke3,major3,grade3,
    wishage,wishmood,wishgame,wishsay } = req.body;
    const {height,age,appearance,major,grade,kakaoid,gender} = (await db.collection('userprofile').doc(uid).get()).data();
    const date = new Date(Date.now());
    if(wishcount == '2'){
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else if(wishcount == '3'){
        await db.collection('matching_submit').doc(uid).set({
            wishcount,wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,height2,age2,appearance2,smoke2,major2,grade2,
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,height2,age2,appearance2,smoke2,major2,grade2,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else{
        await db.collection('matching_submit').doc(uid).set({
            wishcount,wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,height2,age2,appearance2,smoke2,major2,grade2,height3,age3,appearance3,smoke3,major3,grade3,
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,wishcount,height,age,appearance,major,grade,kakaoid,height1,age1,appearance1,smoke1,major1,grade1,height2,age2,appearance2,smoke2,major2,grade2,height3,age3,appearance3,smoke3,major3,grade3,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    return res.redirect("/gongting-v3/us-central1/api/")
}

