const express = require('express');
const alumnoRoutes = require('../routes/alumno.routes');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// endpoints
app.use('/alumno', alumnoRoutes);

module.exports = app;