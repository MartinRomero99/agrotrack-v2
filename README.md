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

## Estructura del proyecto

```
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
```

---
Variables de entorno
Archivo **.env** en la raíz del proyecto basado en el `.env.example`:

```bash
PORT=8888
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=agrotrack
```
---

Base de datos
Ejecutar el siguiente script para crear la base y la tabla necesarias:

**Archivo:** `sql/schema.sql`
```sql
CREATE DATABASE IF NOT EXISTS agrotrack;
USE agrotrack;

CREATE TABLE IF NOT EXISTS contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre  VARCHAR(100) NOT NULL,
  email   VARCHAR(150) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Instalación y ejecución
```bash
# Instalar dependencias
npm install

# Ejecutar el servidor
npm start

# También funciona con node app.js

# Confirmar de que aparezca el mensaje:
Se inició conexión con MySQL
El servidor se ejecutará en: http://localhost:8888
```
---
## Endpoints disponibles

| Método | Ruta | Descripción |
|---------|------|-------------|
| GET | `/health` | Verifica el estado del servidor |
| GET | `/api/contactos` | Devuelve todas las consultas registradas |
| POST | `/api/contactos` | Registra una nueva consulta (nombre, email, mensaje) siempre y cuando esté bien escrita |

---

## Ejemplo de uso (POST /api/contactos)

**Request:**
```json
{
  "nombre": "Martín",
  "email": "martin.rome99@gmail.com",
  "mensaje": "Hola Agro!"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "nombre": "Martín",
  "email": "martin.rome99@gmail.com",
  "mensaje": "Hola Agro!"
}
```

**Error (400):**
```json
{ "error": "Todos los campos son obligatorios" }
```

---


### Ejemplos para Postman
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

---

## 🔐 Login de demostración

El sistema incluye una página de **login básico** (demo) accesible desde:

```
http://localhost:8888/login.html
```

### Descripción
El login no valida contra una base de datos: es solo una **prueba funcional** para evaluar el flujo de envío y respuesta.  
Las credenciales válidas se definen manualmente en el archivo **`app.js`**.

### Cómo usarlo

1. Ingresar a `http://localhost:3000/login.html`  
2. Escribir las credenciales predefinidas:

| Usuario | Contraseña |
|----------|-------------|
| `admin`  | `1234` |

3. Presionar **Enviar**.  
   - Si los datos son correctos, aparecerá un mensaje de éxito y el sistema redirigirá automáticamente mostrará un mensaje de Bienvenida.
  
  

