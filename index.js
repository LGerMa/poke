'use strict'

var express = require('express')
var config = require('./config')
var app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'))

app.get('/', function (req,res){
	console.log('prueba')
	res.render('index', {title: 'Inicio'})
})

/*app.get('/pokemon/:id', function(req,res){
	res.render('pokemon', {title: 'Pokemon', id: req.params.id})
})*/

app.get('/pokemon', function(req,res){
	res.render('pokemon', {title: 'Pokemon'})
})

app.listen(config.port, (err) =>{
	if(err)
		return console.log("hubo un error :c");
	console.log(`escuchando en el puerto ${config.port}`);
})
