
const router = require('express').Router(); //Importar la función Router de express
const { readFileSync ,escribirArchivo} = require('../src/files') //Importar la función readFileSync del archivo files.js 
const Joi = require('joi');
router.get('/saludar', (req, res) => {
    res.send('Hola mundo desde router ')
})



router.get('/', (req, res) => {
    const todos = readFileSync('./dB.json')
  

res.send(todos)
})



router.post('/', (req, res) => {
    const todo = req.body
    const todos = readFileSync('./dB.json') 
    todo.id = todos.length + 1    
    todos.push(todo)
    //escribir arcihvo  
    escribirArchivo('./dB.json', todos)
    res.status(201).send(todo)


})





router.get( '/:id' ,(req, res) => {
const id = req.params.id
const todos = readFileSync('./dB.json')
const todo = todos.find(todo => todo.id === parseInt (id))

//no existe
if (!todo){
    res.status(404).send('El todo no existe')
    return
}
//existe
res.send(todo)

})



    

router.put('/:id', (req,res)=> {
    const id = req.params.id;
    const todos = readFileSync('./db.json');
    const todo = todos.find((todo)=> todo.id === parseInt(id))
    //no  existe
    if(! todo ){
    res.status(404).send( "No existe")
            return 
    }
    //existe
    //actualizar tarea
    const newTodo = {...todo, ...req.body} //spread operator
    const index = todos.indexOf(todo)
    todos[index] = newTodo
    //escribir archivo
    escribirarchivo('./db.json', todos)
    res.send(newTodo);  
})


router.delete('/:id', (req, res) => {
    // bucar tarea con el id recibido
const id = req.params.id
const todos = readFileSync('./db.json')
const todo = todos.find(todo => todo.id === parseInt(id))

//no existe
if (!todo){
    res.status(404).send('El todo no existe')
    return
}
//existe
const index = todos.indexOf(todo)
todos.splice(index, 1)
//escribir archivo
escribirArchivo('./db.json', todos)
res.send(todo)
})








module.exports = router; //Exportar la función router   