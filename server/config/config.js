// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno

process.env.NODE_EV = process.env.NODE_EV || 'dev';

// Conexion a la base de datos
let urlDB;

if (urlDB === 'dev') {
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB = `mongodb+srv://geralt:impro123@cluster0.22tg2.mongodb.net/cafe`;
}


process.env.URLDB = urlDB;