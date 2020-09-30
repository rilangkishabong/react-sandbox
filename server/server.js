//require mongoose & connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//connection and callbacks
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connected");
    // we're connected!
});

//schema for kitty
const kittySchema = new mongoose.Schema({
    name: String
});

//create model(a class based on the kittySchema)
const Kitten = mongoose.model('Kitten', kittySchema);

//bind functions to schema before using
kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

// Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// })

Kitten.find({name: /^fluff/},
    function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });