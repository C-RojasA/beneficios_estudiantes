'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = Schema({
	rut: String,
	name: String,
	lastname: String,
	maternalName: String,
	birth: Date
})

module.exports = mongoose.model('student', StudentSchema)