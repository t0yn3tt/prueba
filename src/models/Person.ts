import db from "../util/database"
import { nanoid } from "nanoid"
export default class Person {
    id: string
    name: string
    last_name: string
    age: number
    phone: string
    gender: string

    //Person constructor 
    constructor(name: string, last_name: string, age: number, phone: string, gender: string) {
        this.id = nanoid()
        this.name = name
        this.last_name = last_name
        this.age = age
        this.phone = phone
        this.gender = gender
    }

    setId(id: string){
        this.id = id;
    }
    
    //save the person on the database
    create() {
        const date = new Date()
        return db.execute(
            'INSERT INTO persons (id, name, last_name, age, phone, gender, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [this.id, this.name, this.last_name, this.age, this.phone, this.gender, date, date])
    }

    static findById(id: string) {
        return db.execute('SELECT * FROM persons WHERE id = ?', [id])
    }

    static fetchAll() {
        return db.execute('SELECT * FROM persons')
    }

    static deletePerson(id: string) {
        return db.execute('DELETE FROM persons WHERE id = ?', [id])
    }

    edit() {
        return db.execute('UPDATE persons SET name = ?, last_name = ?, age = ?, phone = ?, gender = ? WHERE id = ?',
            [this.name, this.last_name, this.age, this.phone, this.gender, this.id])
    }

    static async saveMultiplesPerson(data: any){
        
        const { persons } = JSON.parse(data)

        persons.map((e: any) => {
            const p = new Person(e.name, e.last_name, e.age, e.phone, e.gender)
             p.create()
        })
    }
}