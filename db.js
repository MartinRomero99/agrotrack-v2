// db.js (SIN dotenv, siguiendo Unidad 4)
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // si tu XAMPP no usa password, dejá string vacío: ''
    password: '',
    database: 'agrotrack'
})

db.connect(error => {
    if (error) {
        console.log('Problemas de conexión con MySQL')
        console.log(error)
        return
    }
    console.log('Se inició conexión con MySQL')
})

module.exports = db
