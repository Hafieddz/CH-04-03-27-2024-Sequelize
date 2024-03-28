require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const router = require('./routes')
const PORT = process.env.PORT || 8000 ;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

app.use(session({
    secret : 'apaaja',
    saveUninitialized : true,
    resave : true
}))

app.use(flash());


app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})