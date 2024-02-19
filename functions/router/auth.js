const express = require('express')
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();
const { auth } = require('firebase-admin');

router.post('/login',async(req,res)=>{
    const idToken = req.body.idToken.toString();
    const uid = req.body.uid;
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
            async (sessionCookie) => {
                const options = { maxAge: expiresIn, httpOnly: true };
                res.cookie("session", sessionCookie, options);
                res.cookie("uid", uid, options);
                res.end(JSON.stringify({ status: "success" }));
            },
            (error) => {
                res.status(401).send("UNAUTHORIZED REQUEST!");
            }
        );
})
router.get("/logout", async (req, res) => {
    res.clearCookie("session");
    res.clearCookie("uid");
    res.redirect("/api/login");
});

router.get("/delete", async(req,res)=>{
    await auth().deleteUser(req.cookies.uid);
    await db.collection('users').doc(req.cookies.uid).delete();
    await db.collection('userprofile').doc(req.cookies.uid).delete();
    return res.redirect("/api/auth/logout");
})
module.exports = router;