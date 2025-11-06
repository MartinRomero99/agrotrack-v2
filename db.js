const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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
