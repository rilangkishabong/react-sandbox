const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded());

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

app.get('/register', function (req, res) {
    res.sendFile(__dirname + "/index.html", function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Lets register")
            }
        }
    )
})
app.post('/register', function (req, res) {
    const userName = req.body.userName;
    const passWord = req.body.password;

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

    // res.send(User.findOne({username: userName}));

})

app.listen(3000, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 3000");
})
