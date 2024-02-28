const functions = require('firebase-functions');
const admin = require('firebase-admin')
const serviceAccount = require("./accountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const csrfMiddleware = csrf({ cookie: true });
const path = require('path');

const pageRouter = require('./router/page');
const authRouter = require('./router/auth');
const settingRouter = require('./router/setting');
const adminRouter = require('./router/admin');

app.set('view engine', 'ejs');
app.set('html',require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.use(cors({ origin:true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});

app.use('/',pageRouter);
app.use('/auth',authRouter);
app.use('/setting',settingRouter);
app.use('/admin',adminRouter);

exports.api = functions.https.onRequest(app);
