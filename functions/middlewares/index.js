const admin = require('firebase-admin');
const db = admin.firestore();

exports.isloggedIn = async(req,res,next) => { // 로그인 여부 확인 
    const sessionCookie = req.cookies.session || ""; // 쿠키 session 값으로 유효한 세션인지 확인  
    admin
        .auth()
        .verifySessionCookie(sessionCookie, true )
        .then((userData) => {
            next() // 유효시 next() , 홈페이지로 이동
        })
        .catch((error) => {
            return res.redirect("/api/login"); // 실패시 로그인창으로 이동
        });
}

exports.isSetpf = async(req,res,next) => { // 프로필 설정 여부 확인 
    const uid = req.cookies.uid || "";
    const user = (await db.collection('users').doc(uid).get()).data() // 유저 데이터 가져오기
    if(!user.mypset){ // 내 프로필 설정하지 않을 시 내프로필 설정 페이지로 redirect
        return res.redirect("/api/welcome")
    }else{
        next() // 설정 됐으면 next()
    }
}