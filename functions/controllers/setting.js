const admin = require('firebase-admin');
const db = admin.firestore();

exports.myprofileset = async (req,res) =>{
    const { name,gender, age, height, smoke, kakaoid,personality,appearance} = req.body;
    const uid = req.cookies.uid;
    const date = new Date(Date.now());
    await db.collection('userprofile').doc(uid).set({
        name,
        gender,
        age,
        height,
        smoke,
        kakaoid,
        personality,
        appearance,
        date,
    })
    return res.redirect("/gongting-v3/us-central1/api/")
}

exports.groupmatchingset = async (req,res) =>{
    const uid = req.cookies.uid;
    const { wishcount,height1,age1,personality1,appearance1,smoke1,major1,grade1,height2,age2,personality2,appearance2,smoke2,major2,grade2,height3,age3,personality3,appearance3,smoke3,major3,grade3,
    wishage,wishmood,wishgame,wishsay } = req.body;
    const {height,age,appearance,kakaoid,gender,smoke} = (await db.collection('userprofile').doc(uid).get()).data();
    const {major,grade} = (await db.collection('users').doc(uid).get()).data();
    const date = new Date(Date.now());
    if(wishcount == '2'){
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[0],
            age1:age1[0],
            personality1:personality1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[0],
            age1:age1[0],
            personality1:personality1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else if(wishcount == '3'){
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[1],
            age1:age1[1],
            personality1:personality1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            height2:height2[0],
            age2:age2[0],
            personality2:personality2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[1],
            age1:age1[1],
            personality1:personality1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            height2:height2[0],
            age2:age2[0],
            personality2:personality2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else{
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[2],
            age1:age1[2],
            personality1:personality1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            height2:height2[1],
            age2:age2[1],
            personality2:personality2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            height3:height3[0],
            age3:age3[0],
            personality3:personality3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
        await db.collection('algorithm').doc(wishcount).collection(gender).doc(uid).set({
            wishcount,height,age,appearance,major,grade,smoke,kakaoid,
            height1:height1[2],
            age1:age1[2],
            personality1:personality1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            height2:height2[1],
            age2:age2[1],
            personality2:personality2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            height3:height3[0],
            age3:age3[0],
            personality3:personality3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    return res.redirect("/gongting-v3/us-central1/api/")
}

