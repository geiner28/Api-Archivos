const e = require('express');
const fs=require('fs');

function readFileSync(path){    
    const data=fs.readFileSync(path);
    const todos=JSON.parse(data).todos;
    return todos;   }



function escribirArchivo(path, info){ 
    const data=JSON.stringify({'todos':info});
    fs.writeFileSync(path, data);

}
   
    //console.log('arguments',arguments)
    //console.log('exports',exports)   
    //console.log('module',module)
   // console.log('require',require)
   // console.log('__filename',__filename) 
   // console.log('__dirname',__dirname)  
   module.exports = {readFileSync, escribirArchivo}



