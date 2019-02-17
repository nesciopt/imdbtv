const mysql = require('mysql');
const express = require('express');

const con = mysql.createConnection( {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cinemanatv'
});


con.connect(function(err) {
    if (err) throw err;
    console.log('ligado');
});

con.query("SELECT * FROM biblioteca, horario WHERE horario.data='2018-12-09'", function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);

});

