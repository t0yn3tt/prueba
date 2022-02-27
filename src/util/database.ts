import mysql from 'mysql2' 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_persons',
    password: ''
})

const db = pool.promise()

export default db