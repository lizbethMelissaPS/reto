const express = require('express');
const cors = require ('cors');
const alumnoRoutes = require('../routes/alumno.routes');
const cursoRoutes = require('../routes/curso.routes');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// endpoints
app.use('/alumno', alumnoRoutes);
app.use('/curso', cursoRoutes);
module.exports = app;