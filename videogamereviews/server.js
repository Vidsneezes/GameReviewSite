'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var creds = require('./creds.js');
var Game = require('./models/game');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://'+creds.user+':'+creds.pass+'@ds151973.mlab.com:51973/games');  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req,res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/',function(req,res) {
    res.json({
        message: 'API Initialized'
    });
});

router.route('/games').get(function(req,res){
    Game.find(function(err, games){
        if(err)
            res.send(err);

        res.json(games)
    });
}).post(function(req, res){
    var game = new Game();
    game.name = req.body.name;
    game.description = req.body.description;

    game.save(function(err){
        if(err)
            res.send(err);
        
        res.json({message: 'Game Successfully added!'});
    });
}); 


app.use('/api', router);

app.listen(port, function() {
    console.log('api is running');
});