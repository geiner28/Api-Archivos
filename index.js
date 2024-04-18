const routerTodos = require('./routes')

//Crear el servidor
const express = require('express')



const app = express()
app.use(express.json())


routerTodos(app)



//Levantando el servidor para escuchar por el puerto 3000
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
})