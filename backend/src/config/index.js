const app = require('./app');
const database = require('./database');
const port = 3000; 

const main = () => {
    database.connect((err) => {
        if (err) throw err;
        console.log('Base de datos conectada');
    });
    
    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor en ejecución en http://localhost:${port}`);
    });
};

main();