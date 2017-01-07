'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app =  express()
const port = process.env.port || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/jorgeAlessandri', (err,res) => {
	if(err) {
		return console.log(`Error al conectar la base de datos: ${err}`)
	}
	console.log('conexion a la base de datos establecida')

	app.listen(port, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
	})
})