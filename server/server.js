const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const app = express();

app.use(cors());
app.use(bodyParser.json());

//connection and callbacks
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("mongodb connected");
    // we're connected!
});

//schema for kitty
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//create model(a class based on the kittySchema)
const User = mongoose.model('User', userSchema);

app.post('/register', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    const userName = req.body.userName;
    const passWord = req.body.passWord;

    const ek_user = new User({username: userName, password: passWord});


    ek_user.save(function (err, ek_user) {
        if (err) return console.error(err);
        console.log("User is registered!");
        res.send("Registered!");
    });
})

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html", function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Lets login")
            }
        }
    )
})

app.post('/login', function (req, res) {
    const userName = req.body.userName;
    const passWord = req.body.password;

    User.findOne({username: userName}, function (err, user) {
        if (err) {
            return console.error(err);
            res.send("database error");

        }
        console.log(user);
        if (user) {
            if (user.password === passWord) {
                res.status(200).send("welcome back");
            } else {
                res.status(401).send("Invalid password");
            }
        } else{
            res.send("User does not exist");
        }
    })
})

const port = 8081;

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log(`Server listening on ${port}` );
})
