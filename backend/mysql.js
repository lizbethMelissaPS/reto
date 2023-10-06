const express = require('express');
const mysql = require('mysql');
//const mysql2 = require('mysql2');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdadex'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida.');
});

/* const insertQuery = `INSERT INTO tb_alumno(nidAlumno) VALUES (22) `
db.query(insertQuery,(err, res)=>{
    if (err) throw err
    console.log('respuesta insert : ', res);
}) */

const getQuery = `SELECT * FROM tb_cursos `
db.query(getQuery,(err, res)=>{
    if (err) throw err
    console.log('respuesta GET : ', res);
})

//PETICIONES HTTP
app.get('/:id', (req, res)=>{
const{id} = req.params;

    res.send( `${id} `);
});
/* app.get('/', (req, res)=>{
    res.send('peticion get');
}); */

app.post('/', (req, res)=>{
    res.send('peticion post');
});
app.put('/', (req, res)=>{
    res.send('peticion PUT');
});

app.delete('/', (req, res)=>{
    res.send('peticion DELETE');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
