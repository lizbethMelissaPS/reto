const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'bdadex'
})
conection.connect((err)=>{
    if(err) throw err
    console.log('la coneccion funciona');
})