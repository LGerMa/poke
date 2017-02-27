'use strict'

var express = require('express')

var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req,res){
	console.log('prueba')
	res.render('index', {title: 'lol'})
})

app.listen(3000, (err) =>{
	if(err)
		return console.log("hubo un error :c");
	console.log("escuchando en el puerto 3000");
})
