const express = require ("express");
const exphbs = require ("express-handlebars");
const bodyParser = require("body-parser");



const { calcularinterescompuesto } = require("./calculointerescompuesto");
const app= express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
  res.render("formulario");
});




app.post("/interes", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { capital, años, tasaInteres } = req.body;

  const interesses = calcularinterescompuesto(capital, años, tasaInteres);

  res.render("formularioresultado", { interesses });
});



// Indicar a express utilizar handlebars como template engine


app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });