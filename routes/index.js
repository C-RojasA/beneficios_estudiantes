'use strict'

const express = require('express')
const studentCtrl = require('../controllers/student')
const api = express.Router()

api.get('/student', studentCtrl.getStudents)
api.post('/student', studentCtrl.saveStudent)

module.exports = api