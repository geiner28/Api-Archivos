const express = require('express')

const todosFilesRouter = require('./todos.api.files.router')    //Importar la función todosFilesRouter del archivo todos.files.router.js
const todosApiRouter = require('./todo.api.router')  //Importar la función todosApiRouter del archivo todos.api.router.js

function routerTodos(app){
const router = express.Router()

app.use('/api/v1', router) //Usar la función router en la ruta /prueba

router.use('/files', todosFilesRouter) //Usar la función todosFilesRouter en la ruta /todos

router.use('/todos',todosApiRouter)
}




module.exports = routerTodos //Exportar la función routerTodos