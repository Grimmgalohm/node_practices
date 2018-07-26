
//npm install --save expres para instalar la librería y npm install -g now para...
const express = require('express');
//file sistem module
const fs = require('fs');

//para iniciar la librería
const app = express()

//Const para el puerto de apertura y el host
// PROCESS para que trabaje en dos entronos el de desarrollo y el live  
const PORT = process.env.NODE_ENV || 3000
const HOST = '0.0.0.0'

//para hacer referencia a archivos estaticos, enviar como respuesta carpeta /public
app.use( express.static( __dirname + '/public'))

//app use para dar una respuesta a las peticiones
//dirname hace referencia ala ruta donde se encuentra la carpeta contenedora :v
//para enviar el html de error 404 en caso de que no se encuentre la direccion de archivo que se busca
app.use( (request, response)=>{
  fs.readFile( __dirname + '/public/404.html', 'utf-8', (err, htmlData)=>{
    response.send(htmlData)
  })
})

//un listener para que la app escuche las peticiones desde el puerto 3000
app.listen(PORT, HOST, ()=>{
  console.log('App Listening on PORT: ' + PORT);
})


// for it npm install save y now