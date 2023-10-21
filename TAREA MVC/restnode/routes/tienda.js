const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const getTienda = (request, response) => {
    connection.query("SELECT * FROM tienda", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta
app.route("/tienda")
.get(getTienda);

///
const postTienda = (request, response) => {
    const {descripcion,cantidad} = request.body;
    connection.query("INSERT INTO tienda(descripcion,cantidad) VALUES (?,?) ", 
    [descripcion,cantidad],
    (error, results) => {
        if(error)
            throw error;
        response.status(201).json({"tienda añadido correctamente": results.affectedRows});
    });
};

//ruta
app.route("/tienda")
.post(postTienda);


module.exports = app;