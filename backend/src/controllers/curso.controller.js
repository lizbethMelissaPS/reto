///crud

const database = require('../config/database');
const mysql = require('mysql');
//get
const readCurso = (req, res) => {
    //const { id } = req.params;

    //const readQuery = `SELECT * FROM tb_alumno WHERE nidAlumno=?`;
    const readQuery = `SELECT sDesCurso FROM tb_cursos `;


    //const query = mysql.format(readQuery, [id]);//dar formato a la query
    const query = mysql.format(readQuery);//dar formato a la query
    

    database.query(query, (err, result) => {
        if (err) throw err;
        if (result[0] !== undefined) {
            res.json(result);
        } else {
            res.json({ message: 'Usuario no encontrado' });
        }
    });
};

//post
const createCurso = (req, res) => {
    const { nidAlumno, nombre } = req.body;

    const createQuery = `INSERT INTO tb_alumno (nidAlumno, nombre) VALUES (?, ?);`;

    const query = mysql.format(createQuery, [nidAlumno, nombre]);

    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send({ message: 'Usuario creado' });
    });
};

const updateCurso = (req, res) => {
    const { id } = req.params;
    const {  nombre} = req.body;

    const updateQuery = `UPDATE tb_alumno SET nombre=? WHERE nidAlumno=?`;

    const query = mysql.format(updateQuery, [ nombre, id]);

    database.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ message: 'Usuario actualizado' });
    });
};

const deleteCurso = (req, res) => {
    const { id } = req.params;

    const deleteQuery = `DELETE FROM tb_alumno WHERE nidAlumno=?`;

    const query = mysql.format(deleteQuery, [id]);

    database.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.json({ message: 'Usuario eliminado' });
    });
};

module.exports = {
    createCurso,
    readCurso,
    updateCurso,
    deleteCurso,
};