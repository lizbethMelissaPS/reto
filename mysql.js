const mysql = require('mysql')

const conection = mysql.createConnection({
    hostname: 'localhost',
	username: 'melissa',
	password: '123456',
	database: 'bdadex'
})
conection.connect((err)=>{
    if(err) throw err
    console.log('la coneccion funciona');
})