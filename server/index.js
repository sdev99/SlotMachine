const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001
const mongoose = require('mongoose')
const MODELS = require('./api/models/apiModel')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/api');
// mongoose.connect("mongodb+srv://sukhdevpatidar:sukhdevpatidar@cluster0-4ojpw.mongodb.net/skillstoreapi?retryWrites=true&w=majority");
mongoose.connect("mongodb://heroku_w72khd5w:heroku_w72khd5w@ds123181.mlab.com:23181/heroku_w72khd5w");


app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('./'));

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
