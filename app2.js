//importar express
const express= require('express');

//generar una instancia 
const app =express();

//generar el puerto 
const port = 3009;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el puerto 3009')
});

app.listen(port);