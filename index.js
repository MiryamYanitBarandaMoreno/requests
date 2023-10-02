//creacion de modulos
const express = require('express')
//se crea instancia para usarla
const app= express()

//permite express poder leer formato json
app.use(express.json())

//los callback pueden recibir tres parametros= req(recibe parametros de la URL) y res(funcion que permite dar respuesta)
//Se pueden colocar varios segmentos separados con /, los : es para hacer dinamico 
//params, query y body

//-------------------------------------------------------------------------------------------------------------------
//METODO PARAMS: se usa cuando se envia poca informacion (menos de dos) e informacion no tan importante o no sensible
app.get('/:user/:password',(req, res)=>{ //esto es un Endpoint el conjunto del metodo http , la ruta y la funcionalidad
    //http://localhost:3000/id el id es el segmento adicional que se puede recibir en el backend se puede tener varios
    //imprime lo que recibe
    //const params=req.params
    const {user, password}=req.params//desestructuracion
    //response.send("Hello GET, i'm Miryam")
    //respuesta en formato JSON
    //muestra lo recibido
    if (user==="miryam" && password==="123"){
        res.json({msg: "Sign in succesfully"})
        return
    }res.json({msg: "Wrong user or password"})
})

//-------------------------------------------------------------------------------------------------------------------
//METODO QUERY params: si se envia màs informaciòn pero no informacion sensible
//query  http://localhost:3000/login?fullname=Miryam%20Baranda%Moreno %20 espacios
//http://localhost:3000/login?user=miryam&password=123    &separa 
//podemos pasar los datos sin importar el orden
app.get('/:login',(req, res)=>{ //Endpoint el conjunto del metodo http , la ruta y la funcionalidad
    const {user, password}=req.query
    if(!user || !password){
        res.json(400).json({msg:"You need to provide <user> and <password> params"})
    }
    if (user==="miryam" && password==="123"){
        res.json({msg: "Sign in succesfully"})
        return
    }res.status(404).json({msg: "Wrong user or password"})
})

//-------------------------------------------------------------------------------------------------------------------
//METODO body params: cuando se encia info extensa y sensible (se utiliza en Post y los demas metodos)
app.post('/login', (req, res) => {
    const {user, password}= req.body
    if(!user || !password){
        res.json(400).json({msg:"You need to provide <user> and <password> params"})
    }
    if (user==="Miryam" && password==="123"){
        res.json({msg: "Sign in succesfully"})
        return
    }res.status(404).json({msg: "Wrong user or password"})
    res.json(body)
})


//-------------------------------------------------------------------------------------------------------------------

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

/**-------------------------------------------------------------------------------------------------------------------
 * FUNCIONALIDAD 
 * 
 */
//se coloca un callback aunque no es necesario 
//http://localhost:3000

app.listen(3000,() => {
    console.log('Listening on port 3000')
})