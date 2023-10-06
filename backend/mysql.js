const express = require('express');
const mysql = require('mysql');
//const mysql2 = require('mysql2');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

///db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdadex'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Base de datos conectadaaaaaaaaaa');
});

//
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

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
