const mysql = require('mysql');

//Create connection
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

//connect
db.connect((err)=>{
    let sqlDatabase = 'CREATE DATABASE IF NOT EXISTS travelRegister';
    let sqlTableTravels = 'CREATE TABLE IF NOT EXISTS travels(NroViaje INT AUTO_INCREMENT, nombreTrabajadores VARCHAR(255), numeroTrabajadores SMALLINT,fecha DATE, DireccionPartida VARCHAR(255), DireccionLlegada VARCHAR(255) , cantidadKilometros MEDIUMINT,medioTransporte VARCHAR(50),idaVuelta BOOLEAN,kgCO2Viaje DOUBLE,PRIMARY KEY(NroViaje))';

    // CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT,user_name VARCHAR(50) UNIQUE, password VARCHAR(50),first_name VARCHAR(50),last_name VARCHAR(50),email VARCHAR(50) UNIQUE,developer BOOLEAN,PRIMARY KEY(id))'
    if (err) throw err;
    console.log('MySql Connected...');
    
    //If not exists travelRegister, create database travelRegister!!
    db.query(sqlDatabase, (err,result) => {
        if (err) throw err;
        console.log('If not exists travelRegister, Database created...');
    });
    db.changeUser({
        database: 'travelRegister'},(err)=>{
        if(err) throw err;
    });
    //If not exist tableUser, create.
    db.query(sqlTableTravels, (err,result) => {
        if(err) throw err;
        console.log('If not exists table, table created');
    });
    db.query('ALTER TABLE travels COLLATE="utf8_spanish_ci"', (err,result) => {
        if(err) throw err;
        console.log('COLLATE="utf8_spanish_ci"');
    });
});

module.exports = db;