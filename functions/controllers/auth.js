const admin = require('firebase-admin');

exports.authlogin = async(req,res) => {
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
}

exports.authlogout = async(req,res) => {
    res.clearCookie("session");
    res.clearCookie("uid");
    return res.redirect("/gongting-v3/us-central1/api/login");
}