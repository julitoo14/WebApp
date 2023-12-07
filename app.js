
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
//convertir datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;