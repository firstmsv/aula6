const express = require("express");
const app = express();
const porta = 443;
app.get("/", (req, res) => {
  res.send("Bem Vndo ao Servidor Web Utilizando Express!");
});
app.listen(porta, () => {
  console.log("Servidor Rodando !");
});
