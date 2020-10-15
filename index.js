const express = require ("express");
const exphbs = require ("express-handlebars");
const bodyParser = require("body-parser");

const app= express();

const { calcular } = require("./calculo");


app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
  res.render("formulario");
});


 app.post("/palabra", (req, res, next) => {
 const { numero, numero2} = req.body;

 calcular(numero, numero2 );

 res.send("Petición aceptada");
});  

//app.post("/prestamo", (req, res, next) => {

  // const { palabra } = req.body;

 // const cuotas = calcularMetodoFrances(monto, tasaInteres, periodo);

 // res.render("resultado_prestamo", { cuotas });
//});



// Indicar a express utilizar handlebars como template engine


app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });