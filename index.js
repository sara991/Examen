const express = require ("express");
const exphbs = require ("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP


const app= express();

// Indicar a express utilizar handlebars como template engine


app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });