const express = require('express')
const path = require('path')

// Middlewares
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

// Router de contactos
const contactosRouter = require('./routes/contactos')

const app = express()
const PORT = 8888

// Middlewares básicos
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger) // Registramos cada request

// Servir archivos estáticos (Unidad 5)
app.use(express.static(path.join(__dirname, 'public')))

// GET / (Página principal)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// GET /health
app.get('/health', function (req, res) {
    res.json({ status: 'ok' })
})

// POST /login (sin base de datos)
app.post('/login', function (req, res) {
    const usuario = req.body.usuario
    const clave = req.body.clave

    if (!usuario || !clave) {
        return res.status(400).send('Faltan credenciales')
    }

    // Inicio de sesión simulado
    if (usuario.toLowerCase() === 'admin' && clave === '1234') {
        return res.status(200).send('Bienvenido Admin!')
    } else {
        return res.status(401).send('Usuario o clave incorrectos')
    }
})

// Mantener compatibilidad con formulario que use recuperar contraseña
app.post('/recuperardatos', function (req, res) {
    res.redirect(307, '/login')
})

// Rutas API (Unidad 4 - uso de Router)
app.use('/api/contactos', contactosRouter)

// Middleware de manejo de errores (debe ir último)
app.use(errorHandler)

// Levantar servidor
app.listen(PORT, function () {
    console.log('Servidor escuchando en http://localhost:' + PORT)
})

