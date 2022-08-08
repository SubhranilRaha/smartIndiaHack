const express = require("express");
const expressSession = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const { connectDB } = require("./config/db-config");
const cors = require("cors");
const { PORT, DATABASE_URL, SESSION_SECRET } = require('./config/keys');
require('./config/passport-config');
const { authApi } = require('./api/authApi');
require('./model/User');
require('./model/School');
require('./model/Student');
require('./model/Teacher');

const app = express();
const connection = connectDB();

app.use(cors({
    origin: "*"
}));
app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const sessionStore = MongoStore.create({ 
    mongoUrl: DATABASE_URL,
    dbName: "sihEncoded",
    collectionName: 'sessions',
    autoRemove: 'interval',
    autoRemoveInterval: 2 // 1 hour
});
app.use(expressSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 // 1 minute
    }
}));
// After this, request has a req.session property added by express session

app.use(passport.initialize());
app.use(passport.session()); // passport will target the req.session property

app.use('/auth', authApi);

app.get('/', (req,res) => {
    console.log(req.session);
    // user will be defined until session is defined, after that user becomes undefined
    // use it to check authentication status
    console.log(req.user); 
    res.json({ message: 'Server is running :)' });
})
 
app.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`));