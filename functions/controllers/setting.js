const admin = require('firebase-admin');
const db = admin.firestore();

exports.myprofileset = async (req,res) =>{
    const { name,gender, age, height, smoke, kakaoid,personality,appearance} = req.body;
    let chars = '';
    if(appearance=='강아지상') chars = 'avatar-img/13.png'
    if(appearance=='고양이상') chars = 'avatar-img/12.png'
    if(appearance=='토끼상') chars = 'avatar-img/3.png'
    if(appearance=='여우상') chars = 'avatar-img/5.png'
    if(appearance=='곰상') chars = 'avatar-img/2.png'
    if(appearance=='햄스터') chars = 'avatar-img/1.png'

    const uid = req.cookies.uid;
    const date = new Date(Date.now());
    await db.collection('userprofile').doc(uid).set({
        name,
        gender,
        age,
        height,
        smoke,
        chars,
        kakaoid,
        personality,
        appearance,
        date,
    })
    return res.redirect("/gongting-v3/us-central1/api/")
}

exports.groupmatchingset = async (req,res) =>{
    const uid = req.cookies.uid;
    // form 데이터들 // 
    const { wishcount,height1,age1,personality1,appearance1,smoke1,major1,grade1,height2,age2,personality2,appearance2,smoke2,major2,grade2,height3,age3,personality3,appearance3,smoke3,major3,grade3,
    wishage,wishmood,wishgame,wishsay } = req.body;
    // 내 정보 가져오기 //
    const {height,age,appearance,kakaoid,personality,smoke,chars} = (await db.collection('userprofile').doc(uid).get()).data(); 
    const {major,grade} = (await db.collection('users').doc(uid).get()).data();
    // 시간 //
    const date = new Date(Date.now());
    let chars1= '';
    let chars2= '';
    let chars3= '';
    if(wishcount == '2'){
        // 친구 1 케릭터 //
        if(appearance1[0]=='강아지상') chars1 = 'avatar-img/13.png'
        if(appearance1[0]=='고양이상') chars1 = 'avatar-img/12.png'
        if(appearance1[0]=='토끼상') chars1 = 'avatar-img/3.png'
        if(appearance1[0]=='여우상') chars1 = 'avatar-img/5.png'
        if(appearance1[0]=='곰상') chars1 = 'avatar-img/2.png'
        if(appearance1[0]=='햄스터') chars1 = 'avatar-img/1.png'

        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[0],
            age1:age1[0],
            personality1:personality1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            chars1,
            height2:"",
            age2:"",
            personality2:"",
            appearance2:"",
            smoke2:"",
            major2:"",
            grade2:"",
            chars2,
            height3:"",
            age3:"",
            personality3:"",
            appearance3:"",
            smoke3:"",
            major3:"",
            grade3:"",
            chars3,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else if(wishcount == '3'){
        // 친구 1 케릭터 //
        if(appearance1[1]=='강아지상') chars1 = 'avatar-img/13.png'
        if(appearance1[1]=='고양이상') chars1 = 'avatar-img/12.png'
        if(appearance1[1]=='토끼상') chars1 = 'avatar-img/3.png'
        if(appearance1[1]=='여우상') chars1 = 'avatar-img/5.png'
        if(appearance1[1]=='곰상') chars1 = 'avatar-img/2.png'
        if(appearance1[1]=='햄스터') chars1 = 'avatar-img/1.png'
        // 친구 2 케릭터 //
        if(appearance2[0]=='강아지상') chars2 = 'avatar-img/13.png'
        if(appearance2[0]=='고양이상') chars2 = 'avatar-img/12.png'
        if(appearance2[0]=='토끼상') chars2 = 'avatar-img/3.png'
        if(appearance2[0]=='여우상') chars2 = 'avatar-img/5.png'
        if(appearance2[0]=='곰상') chars2 = 'avatar-img/2.png'
        if(appearance2[0]=='햄스터') chars2 = 'avatar-img/1.png'
        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[1],
            age1:age1[1],
            personality1:personality1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            chars1,
            height2:height2[0],
            age2:age2[0],
            personality2:personality2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            chars2,
            height3:"",
            age3:"",
            personality3:"",
            appearance3:"",
            smoke3:"",
            major3:"",
            grade3:"",
            chars3,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    else{
         // 친구 1 케릭터 //
         if(appearance1[2]=='강아지상') chars1 = 'avatar-img/13.png'
         if(appearance1[2]=='고양이상') chars1 = 'avatar-img/12.png'
         if(appearance1[2]=='토끼상') chars1 = 'avatar-img/3.png'
         if(appearance1[2]=='여우상') chars1 = 'avatar-img/5.png'
         if(appearance1[2]=='곰상') chars1 = 'avatar-img/2.png'
         if(appearance1[2]=='햄스터') chars1 = 'avatar-img/1.png'
         // 친구 2 케릭터 //
         if(appearance2[1]=='강아지상') chars2 = 'avatar-img/13.png'
         if(appearance2[1]=='고양이상') chars2 = 'avatar-img/12.png'
         if(appearance2[1]=='토끼상') chars2 = 'avatar-img/3.png'
         if(appearance2[1]=='여우상') chars2 = 'avatar-img/5.png'
         if(appearance2[1]=='곰상') chars2 = 'avatar-img/2.png'
         if(appearance2[1]=='햄스터') chars2 = 'avatar-img/1.png'
         // 친구 3 케릭터 //
        if(appearance3[0]=='강아지상') chars3 = 'avatar-img/13.png'
        if(appearance3[0]=='고양이상') chars3 = 'avatar-img/12.png'
        if(appearance3[0]=='토끼상') chars3 = 'avatar-img/3.png'
        if(appearance3[0]=='여우상') chars3 = 'avatar-img/5.png'
        if(appearance3[0]=='곰상') chars3 = 'avatar-img/2.png'
        if(appearance3[0]=='햄스터') chars3 = 'avatar-img/1.png'

        await db.collection('matching_submit').doc(uid).set({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[2],
            age1:age1[2],
            personality1:personality1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            chars1,
            height2:height2[1],
            age2:age2[1],
            personality2:personality2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            chars2,
            height3:height3[0],
            age3:age3[0],
            personality3:personality3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            chars3,
            wishage,wishmood,wishgame,wishsay,date,
        });
    }
    return res.redirect("/gongting-v3/us-central1/api/")
}

exports.allow = async(req,res) => {
    (await db.collection('matching_result').doc(req.cookies.uid).update({
        status:"수락",
    }))
    return res.redirect('/gongting-v3/us-central1/api/matchingresult')
}
exports.reject = async(req,res) => {
    (await db.collection('matching_result').doc(req.cookies.uid).update({
        status:"거절",
    }))
    return res.redirect('/gongting-v3/us-central1/api/matchingresult')
}

exports.groupmatchingset1 = async (req,res) =>{
    const uid = req.cookies.uid;
    // form 데이터들 // 
    const { wishcount,height1,age1,personality1,appearance1,smoke1,major1,grade1,height2,age2,personality2,appearance2,smoke2,major2,grade2,height3,age3,personality3,appearance3,smoke3,major3,grade3} = req.body;
    // 내 정보 가져오기 //
    const {height,age,appearance,personality,kakaoid,smoke,chars} = (await db.collection('userprofile').doc(uid).get()).data(); 
    const {major,grade} = (await db.collection('users').doc(uid).get()).data();
    // 시간 //
    const date = new Date(Date.now());
    let chars1= '';
    let chars2= '';
    let chars3= '';
    if(wishcount == '2'){
        // 친구 1 케릭터 //
        if(appearance1[0]=='강아지상') chars1 = 'avatar-img/13.png'
        if(appearance1[0]=='고양이상') chars1 = 'avatar-img/12.png'
        if(appearance1[0]=='토끼상') chars1 = 'avatar-img/3.png'
        if(appearance1[0]=='여우상') chars1 = 'avatar-img/5.png'
        if(appearance1[0]=='곰상') chars1 = 'avatar-img/2.png'
        if(appearance1[0]=='햄스터') chars1 = 'avatar-img/1.png'

        await db.collection('matching_submit').doc(uid).update({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[0],
            age1:age1[0],
            personality1:personality1[0],
            appearance1:appearance1[0],
            smoke1:smoke1[0],
            major1:major1[0],
            grade1:grade1[0],
            chars1,
            height2:"",
            age2:"",
            personality2:"",
            appearance2:"",
            smoke2:"",
            major2:"",
            grade2:"",
            chars2,
            height3:"",
            age3:"",
            personality3:"",
            appearance3:"",
            smoke3:"",
            major3:"",
            grade3:"",
            chars3,
            date,
        });
    }
    else if(wishcount == '3'){
        // 친구 1 케릭터 //
        if(appearance1[1]=='강아지상') chars1 = 'avatar-img/13.png'
        if(appearance1[1]=='고양이상') chars1 = 'avatar-img/12.png'
        if(appearance1[1]=='토끼상') chars1 = 'avatar-img/3.png'
        if(appearance1[1]=='여우상') chars1 = 'avatar-img/5.png'
        if(appearance1[1]=='곰상') chars1 = 'avatar-img/2.png'
        if(appearance1[1]=='햄스터') chars1 = 'avatar-img/1.png'
        // 친구 2 케릭터 //
        if(appearance2[0]=='강아지상') chars2 = 'avatar-img/13.png'
        if(appearance2[0]=='고양이상') chars2 = 'avatar-img/12.png'
        if(appearance2[0]=='토끼상') chars2 = 'avatar-img/3.png'
        if(appearance2[0]=='여우상') chars2 = 'avatar-img/5.png'
        if(appearance2[0]=='곰상') chars2 = 'avatar-img/2.png'
        if(appearance2[0]=='햄스터') chars2 = 'avatar-img/1.png'
        
        await db.collection('matching_submit').doc(uid).update({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[1],
            age1:age1[1],
            personality1:personality1[1],
            appearance1:appearance1[1],
            smoke1:smoke1[1],
            major1:major1[1],
            grade1:grade1[1],
            chars1,
            height2:height2[0],
            age2:age2[0],
            personality2:personality2[0],
            appearance2:appearance2[0],
            smoke2:smoke2[0],
            major2:major2[0],
            grade2:grade2[0],
            chars2,
            height3:"",
            age3:"",
            personality3:"",
            appearance3:"",
            smoke3:"",
            major3:"",
            grade3:"",
            chars3,
            date,
        });
    }
    else{
         // 친구 1 케릭터 //
         if(appearance1[2]=='강아지상') chars1 = 'avatar-img/13.png'
         if(appearance1[2]=='고양이상') chars1 = 'avatar-img/12.png'
         if(appearance1[2]=='토끼상') chars1 = 'avatar-img/3.png'
         if(appearance1[2]=='여우상') chars1 = 'avatar-img/5.png'
         if(appearance1[2]=='곰상') chars1 = 'avatar-img/2.png'
         if(appearance1[2]=='햄스터') chars1 = 'avatar-img/1.png'
         // 친구 2 케릭터 //
         if(appearance2[1]=='강아지상') chars2 = 'avatar-img/13.png'
         if(appearance2[1]=='고양이상') chars2 = 'avatar-img/12.png'
         if(appearance2[1]=='토끼상') chars2 = 'avatar-img/3.png'
         if(appearance2[1]=='여우상') chars2 = 'avatar-img/5.png'
         if(appearance2[1]=='곰상') chars2 = 'avatar-img/2.png'
         if(appearance2[1]=='햄스터') chars2 = 'avatar-img/1.png'
         // 친구 3 케릭터 //
        if(appearance3[0]=='강아지상') chars3 = 'avatar-img/13.png'
        if(appearance3[0]=='고양이상') chars3 = 'avatar-img/12.png'
        if(appearance3[0]=='토끼상') chars3 = 'avatar-img/3.png'
        if(appearance3[0]=='여우상') chars3 = 'avatar-img/5.png'
        if(appearance3[0]=='곰상') chars3 = 'avatar-img/2.png'
        if(appearance3[0]=='햄스터') chars3 = 'avatar-img/1.png'
        await db.collection('matching_submit').doc(uid).update({
            wishcount,height,age,appearance,personality,major,grade,smoke,kakaoid,chars,
            height1:height1[2],
            age1:age1[2],
            personality1:personality1[2],
            appearance1:appearance1[2],
            smoke1:smoke1[2],
            major1:major1[2],
            grade1:grade1[2],
            chars1,
            height2:height2[1],
            age2:age2[1],
            personality2:personality2[1],
            appearance2:appearance2[1],
            smoke2:smoke2[1],
            major2:major2[1],
            grade2:grade2[1],
            chars2,
            height3:height3[0],
            age3:age3[0],
            personality3:personality3[0],
            appearance3:appearance3[0],
            smoke3:smoke3[0],
            major3:major3[0],
            grade3:grade3[0],
            chars3,
            date,
        });
    }
    return res.redirect("/gongting-v3/us-central1/api/")
}


exports.groupmatchingset2 = async(req,res) => {
    const uid = req.cookies.uid;
    const{wishage,wishgame,wishmood} = req.body;
    const date = new Date(Date.now());
    await db.collection('matching_submit').doc(uid).update({
        wishage,wishgame,wishmood,date
    });
    return res.redirect("/gongting-v3/us-central1/api/")
}
exports.groupmatchingset3 = async(req,res) => {
    const uid = req.cookies.uid;
    const{wishsay} = req.body;
    const date = new Date(Date.now());
    await db.collection('matching_submit').doc(uid).update({
        wishsay,date
    });
    return res.redirect("/gongting-v3/us-central1/api/")
    
}