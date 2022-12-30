const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const especies = require("./especies");
const generos = require("./generos");

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  especies.find({}, { _id: 0 }, (err, especies) => {
    if (err)
      return res
        .status(500)
        .send({ error: "Problemas buscando todos los especies" });
    res.status(200).send(especies);
  });
});

app.get("/generos", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  generos.find({}, { _id: 0 }, (err, generos) => {
    if (err)
      return res
        .status(500)
        .send({ error: "Problemas buscando todos los generos" });
    res.status(200).send(generos);
  });
});

app.get("/especie/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  especies.findOne({ id: parseInt(req.params.id) }, { _id: 0, __v: 0 }, (err, especie) => {
    if (err)
      return res.status(500).send({ error: "Problemas buscando el especie" });
    if (!especie) 
      return res.status(404).send({ error: "Especie no encontrada con el id: " + req.params.id });
    res.status(200).send(especie);
  });
});

app.get("/especies/genero/:genero", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  especies.find({ genero: req.params.genero }, (err, especie) => {
    if (err) return res.status(500).send("Problemas buscando");
    if (!especie)
      return res
        .status(404)
        .send("especie no encontrado con la genero: " + req.params.genero);
    res.status(200).send(especie);
  });
});

app.get("/genero/:nombre", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  generos.find({ nombreGenero: req.params.nombre }, { _id: 0 }, (err, genero) => {
    if (err) return res.status(500).send("Problemas buscando");
    if (!genero)
      return res
        .status(404)
        .send("Genero no encontrado con el nombre: " + req.params.nombre);
    res.status(200).send(genero);
  });
});

module.exports = app;
