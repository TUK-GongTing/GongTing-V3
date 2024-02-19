const admin = require('firebase-admin');
const db = admin.firestore();

const pageService = {
    username: async (uid) =>{
        const user = await db.collection("users").doc(uid).get();
        const { name } = user.data();
        return name;
    },
    userverify: async(uid)=>{
        const user = await db.collection("users").doc(uid).get();
        const { verify} = user.data();
        return verify;
    },
    userdata: async(uid) => {
        const user = await db.collection("users").doc(uid).get();
        const userdata = user.data();
        return userdata;
    },
    userchar: async(uid)=>{
        const userprofile = await db.collection("userprofile").doc(uid).get();
        const {chars} = userprofile.data();
        return chars;
    },
    alluserprofile: async(uid)=>{
        const userprofile = await db.collection("userprofile").doc(uid).get();
        const userprofiledata = userprofile.data();
        return userprofiledata;
    }
}

module.exports = pageService;