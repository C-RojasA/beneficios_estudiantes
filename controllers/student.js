'use strict'

const Student = require('./model/student')

function getStudents(req,res) {
	Student.find({}, (err, students) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		if (!students) return res.status(500).send({message: `No existen datos almacenados` })

		res.status(200).send({ students })		
	})
}

function saveStudent6() {
	let studentId = req.paramas.studentId

	Student.findById(studentId, (err, student) => {
		if(err) return status(500).send({message: `Error al realizar la peticion ${err}`})
		if(!student) return status(500).send({message: `El Estudiante no Existe`})

		res.status(200).send({student})
	})
}
app.post('/api/student', (req, res) => {
	console.log('POST /api/student')
	console.log(req.body)

	let student = new Student()
	student.rut = req.body.rut
	student.name = req.body.name
	student.lastname = req.body.lastname
	student.maternalName = req.body.maternalName
	student.birth =  req.body.birth
})

student.save((err, studentStored) => {
	if(err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `})

	res.status(200).send({student: studentStored})
})

