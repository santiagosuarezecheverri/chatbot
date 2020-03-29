const fs = require('fs');
const JsonFind = require('json-find');

const contents = fs.readFileSync('./servicio/servicio.json'); 
var jsonContent  = JSON.parse(contents); 
const doc = JsonFind(jsonContent);

function extraerJsonActividad(palabra){
    console.log("recibido extraerJsonActividad: " + palabra);
    var chat = JSON.stringify(doc.checkKey(palabra));
    var obj = JSON.parse(chat);
    const jsondoc = JsonFind(obj);
    return jsondoc;
  }

  module.exports.extraerJsonActividad = extraerJsonActividad;

  function buscarAtributoActividad(JsonDoc, palabras){  
      var respuesta;
      var respuestaPromesa;
      console.log("palabras buscarAtributoActividad: "+ palabras); 
      for(var i = 0; i<palabras.length; i++){            
            console.log("buscarJson: " + JsonDoc.checkKey(palabras[i])); 
            var palabra = JsonDoc.checkKey(palabras[i]);
            if(palabra != false){
                  if(palabra.includes("SELECT")){
                        console.log("entra a consulta sql");
                        mysql.mensaje();
                        respuestaPromesa = mysql.consultaSQL("SELECT maxbytes FROM mdl_forum").then(function(results){
                              console.log("resultados sql nuevos: " + results);
                              respuesta = results;
                        }).catch((err) => setImmediate(() => { throw err; }));
                                                      
                  }else{
                        respuesta =  palabra;
                  }
                  
            }
      }  
      console.log("respuesta buscarAtributoActividad: "+respuesta); 
      return respuesta;
  }
  module.exports.buscarAtributoActividad = buscarAtributoActividad;