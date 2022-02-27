import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '162.241.61.79',
    user: 'campoesp_root_prueba',
    database: 'campoesp_db_prueba',
    password: '12345'
})


const db = pool.promise()

export default db