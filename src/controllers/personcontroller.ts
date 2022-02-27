import { Handler } from 'express'
import Person from '../models/Person'

export const getPersons: Handler = (req, res) => {
    Person.fetchAll()
        .then((result) => {
            res.send(result[0])
        })
        .catch(err => console.log(err))
}

export const getPerson: Handler = (req, res) => {
    Person.findById(req.params.id)
        .then(([person]) => {

            if (Object.keys(person).length <= 0) {
                //person was not found
                res.status(404).send({ msg: 'The Person was not found' })
            }
            else
                res.send(Object.values(person)[0])
        })
        .catch(err => console.log(err))
}

export const deletePerson: Handler = (req, res) => {
    Person.deletePerson(req.params.id)
        .then(([result]: any) => {
            if (result.affectedRows != 0) {
                res.status(200).send({ msg: 'The Person has been deleted' })
            }
            else {
                res.status(404).send({ msg: 'The Person was not found' })
            }
        })
        .catch(err => console.log(err))
}

export const createPerson: Handler = (req, res) => {
    const { name, last_name, age, phone, gender } = req.body
    const person = new Person(name, last_name, age, phone, gender)

    person
        .create()
        .then((result) => {
            res.send(JSON.stringify(person))
        })
        .catch(err => res.status(400).send({ msg: 'The Person was not created' }))

}

export const editPerson: Handler = (req, res) => {
    const { name, last_name, age, phone, gender } = req.body
    const person = new Person(name, last_name, age, phone, gender)
    person.setId(req.params.id)

    person
        .edit()
        .then(([result]: any) => {
            if (result.affectedRows != 0) {
                res.send(JSON.stringify(person))
            }
            else {
                res.status(404).send({ msg: 'The Person was not found' })
            }
        })
        .catch(err => res.status(400).send({ msg: 'The Person was not edited' }))
}

export const uploadController: Handler = async (req: any, res) => {

    if (req.files.file.mimetype !== "application/json") {
        return res.status(400).send({ msg: "Please upload an json file!" })
    }

    const { persons } = JSON.parse(req.files.file.data.toString('utf8'))

    if (persons) {
        await Person.saveMultiplesPerson(persons)
        res.send({ msg: 'Upload Succesffully' })
    }
}