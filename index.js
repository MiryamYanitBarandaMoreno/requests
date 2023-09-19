//creacion de modulos
const express = require('express')
//se crea instancia para usarla
const app= express()

//los callback pueden recibir tres parametros= req(recibe parametros de la URL) y res(funcion que permite dar respuesta)
//Se pueden colocar varios segmentos separados con /, los : es para hacer dinamico 
app.get('/:user/:password',(req, res)=>{
    //http://localhost:3000/id el id es el segmento adicional que se puede recibir en el backend se puede tener varios
    //imprime lo que recibe
    //const params=req.params
    const {user, password}=req.params//desestructuracion
    //response.send("Hello GET, i'm Miryam")
    //respuesta en formato JSON
    //muestra lo recibido
    if (user==="miryam" && password==="123"){
        res.json({msg: "Inicio de sesion exitoso"})
        return
    }res.json({msg: "Fallo en el usuario o contraseña"})
})
//los navegadores solo soportan GET para utilizar estos metodos se necesita un emulador
app.post('/',(req, res)=>{
    res.json({msg: "Hello POST, I'm Miryam"})
})

app.put('/',(req, res)=>{
    res.json({msg: "Hello PUT, I'm Miryam"})
})

app.patch('/',(req, res)=>{
    res.json({msg: "Hello PATCH, I'm Miryam"})
})

app.delete('/',(req, res)=>{
    res.json({msg: "Hello DELETE, I'm Miryam"})
})

/**
 * FUNCIONALIDAD 
 * 
 */
//se coloca un callback aunque no es necesario 
//http://localhost:3000

app.listen(3000,() => {
    console.log('Listening on port 3000')
})