const admin = require('firebase-admin');
const db = admin.firestore();

exports.myprofileset = async (req,res) =>{
    const { gender, age, height, smoke,chars,studentnum,major,kakaoid,grade,mbti,hobby,appearance} = req.body;
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
        major,
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
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[0],
            age1:age1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[0],
            age1:age1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else if(wishcount == '3'){
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[1],
            age1:age1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            height2:height2[0],
            age2:age2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[1],
            age1:age1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            height2:height2[0],
            age2:age2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else{
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[2],
            age1:age1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            height2:height2[1],
            age2:age2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            height3:height3[0],
            age3:age3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,kakaoid,
            height1:height1[2],
            age1:age1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            height2:height2[1],
            age2:age2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            height3:height3[0],
            age3:age3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    return res.redirect("/gongting-v3/us-central1/api/")
}

