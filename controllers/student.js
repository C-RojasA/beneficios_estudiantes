'use strict'

const Student = require('./model/student')

app.get('/api/student', (req, res) =>  {
	res.send(200, {student})
})

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

