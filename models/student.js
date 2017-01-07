'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = Schema({
	rut: String,
	name: String,
	lastname: String,
	maternaLastname: String,
	birth: Date,
})

mongoose.model('student', StudentSchema)