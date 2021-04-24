const mongoose = require('mongoose');
const app = require('./app');
var express = require('express');
const User = require('./models/userModel');
var bodyParser = require('body-parser')

const DB = "mongodb+srv://Jakub:Jakub@cluster0.bwbd3.mongodb.net/User?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Jakub:Jakub@cluster0.bwbd3.mongodb.net/User?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB CONNECTION OK");
});

app.use(express.static('public'))

app.get('/', function (req, res) {


    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api', function (req, res) {

    res.json({ Data })
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/post-feedback', urlencodedParser, function (req, res) {

    User.create(
        req.body
    );
    res.redirect("/")
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {

    console.log(`App running on port ${port}...`);
});

ConnectionMongo();

function ConnectionMongo() {
    setInterval(function () {
        User.find({}, function (err, docs) {
            Data = docs
        });
    }, 5000);
}
