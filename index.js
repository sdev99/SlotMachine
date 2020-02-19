const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const MODELS = require('./api/models/apiModel')
const path = require('path');
const apiPort = process.env.PORT || 5000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/api');
// mongoose.connect("mongodb+srv://sukhdevpatidar:sukhdevpatidar@cluster0-4ojpw.mongodb.net/skillstoreapi?retryWrites=true&w=majority");
mongoose.connect("mongodb://heroku_w72khd5w:heroku_w72khd5w@ds123181.mlab.com:23181/heroku_w72khd5w");

app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use(express.static('./'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    console.log("PRODUCTION");
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
} else {
    console.log("DEVELOPMENT");
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/public/index.html'));
    })
}


app.get('/', (req, res) => {
    res.send('Hello World!')
});

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

console.log('todo list RESTful API server started on: ' + apiPort);
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
