'use strict'

const express = require('express')
const studentCrl = require('../controllers/student')
const api = express.Router()

api.get('student', studentCtrl.getStudents)
api.post('student', studentCtrl.saveStudents)
