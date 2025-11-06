// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
    console.log('Ocurrió un error:')
    console.log(err)

    // Si la respuesta no fue enviada todavía:
    if (!res.headersSent) {
        res.status(500).json({ error: 'Error interno del servidor' })
    }
}

module.exports = errorHandler
