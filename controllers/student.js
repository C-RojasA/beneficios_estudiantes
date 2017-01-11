'use strict'

const Student = require('../models/student')

function getStudents(req, res) {
	Student.find({}, (err, students) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		if (!students) return res.status(404).send({message: `No existen datos almacenados` })

		res.status(200).send({ students })		
	})
}

function saveStudent(req, res) {
	console.log('POST /apu/student')
	console.log(req.body)

	let student = new Student()
	student.rut = req.body.rut
	student.name = req.body.name
	student.lastname = req.body.lastname
	student.maternalName = req.body.maternalName
	student.birth =  req.body.birth

	student.save((err, studentStored) => {
		if(err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `})

		res.status(200).send({student: studentStored})
	})

}


module.exports = {
	getStudents,
	saveStudent
}


