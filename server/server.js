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

//bind functions to schema before using
kittySchema.methods.speak = function () {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

//create model(a class based on the kittySchema)
const Kitten = mongoose.model('Kitten', kittySchema);

//create an object based on the model.
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});