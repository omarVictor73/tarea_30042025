//importar express
const express= require('express');

//generar una instancia 
const app =express();

//generar el puerto 
const port = 5023;

app.get('/',(req,res)=>{
    res.send('Hola mundo')
});

app.listen(port);