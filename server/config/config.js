// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno

process.env.NODE_EV = process.env.NODE_EV || 'dev';

// Conexion a la base de datos
let urlDB;

if (process.env.NODE_EV === 'dev') {
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB = `mongodb+srv://strider:dh55pj@cluster0.ojupz.mongodb.net/cafe`;
}

process.env.URLDB = urlDB;