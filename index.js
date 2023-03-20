require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handelbars
hbs.registerPartials(__dirname + "/views/partials", (err) => {
  console.log(err);
});

// TODO: require(hbs);
app.set("view engine", "hbs");

// Servir Contenido
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  res.render("home", { name: "Pablo Rincones", title: "Curso Node.js" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { name: "Pablo Rincones", title: "Curso Node.js" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { name: "Pablo Rincones", title: "Curso Node.js" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
