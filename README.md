# 🌾 AgroTrack AO2 – API con Express y MySQL

### Materia:
**Programación de Aplicaciones Web II**

### Autor:
**Martín Romero**  
DNI: 41815210
IUA - Año 2025

---

## Descripción
Esta versión continúa el desarrollo de la Actividad Obligatoria 1.  
Se reemplaza el servidor HTTP manual por **Express** y se incorpora **persistencia** mediante **MySQL**.  
Además, se implementa una **API REST** para registrar y listar consultas del formulario de contacto.
También se agrega **login de demostración** y **middleware de registro de solicitudes**.

---

## Tecnologías utilizadas
- Node.js  
- Express.js  
- MySQL (con librería `mysql`)  
- HTML y CSS (front-end en carpeta `public/`)
- Postman (para pruebas de API)

> No se utiliza `dotenv` ya que no está incluido en los materiales de la cátedra.

---

## 🗂️ Estructura del proyecto


agrotrackAO2/ 
agrotrack-v2/
├─ app.js # Servidor principal Express


├─ config/db.js # Conexión a MySQL


├─ routes/

│ └─ contactos.js # Endpoints /api/contactos

├─ middleware/

│ ├─ logger.js # Middleware de registro de solicitudes HTTP

│ └─ errorHandler.js # Manejo centralizado de errores


├─ public/ # Archivos estáticos (HTML, CSS, imágenes)

│ ├─ index.html
│ ├─ contacto.html
│ ├─ productos.html
│ ├─ login.html
│ └─ style.css


├─ sql/

│ └─ schema.sql # Script para crear la BD y tabla de contactos


├─ .env.example # Solo referencia de configuración


├─ package.json


├─ package-lock.json


└─ README.md


Instalación y ejecución

npm install
node app.js

El servidor se ejecutará en:
http://localhost:8888

Ejemplos para Postman
✅ POST válido
POST http://localhost:8888/api/contactos


Body → raw → JSON:

{
  "nombre": "Martín",
  "email": "martin@example.com",
  "mensaje": "Consulta correcta"
}


Respuesta:

{ "mensaje": "Contacto guardado correctamente" }

POST inválido (400 Bad Request)
{
  "nombre": "Martín"
}


Respuesta:

{ "error": "Faltan datos" }

Listar contactos
GET http://localhost:8888/api/contactos

Login simulado
POST http://localhost:8888/login


Body:

{
  "usuario": "admin",
  "clave": "1234"
}



