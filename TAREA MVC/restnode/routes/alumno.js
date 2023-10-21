const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// Conexión con la base de datos
const { connection } = require("../config.db");

const getAlumno = (request, response) => {
  connection.query("SELECT * FROM alumno", (error, results) => {
    if (error) throw error;
    response.status(200).json(results);
  });
};

// Ruta para obtener alumnos
app.route("/alumno").get(getAlumno);

const postAlumno = (request, response) => {
  const { nombre, edad } = request.body;
  connection.query(
    "INSERT INTO alumno(nombre, carne) VALUES (?, ?)",
    [nombre, carne],
    (error, results) => {
      if (error) throw error;
      response.status(201).json({
        "alumno añadido correctamente": results.affectedRows
      });
    }
  );
};

// Ruta para agregar un alumno
app.route("/alumno").post(postAlumno);

module.exports = app;