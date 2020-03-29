var servicioJson = require('./servicioJson.js');

var resp = "respuesta servidor";
module.exports.resp = resp;

function generarRespuesta(msg){
    console.log("generarRespuesta");
    var palabras = convertirArray(msg);
    var respuestaPalabrasJson = buscarJson(palabras);
    
    return respuestaPalabrasJson;
 }

 module.exports.generarRespuesta = generarRespuesta;

 function convertirArray (msg){
    var palabras = msg.split(' ');
    console.log("convertirArray: " + palabras);  
    return palabras;
  }

  function buscarJson(palabras){    
    var respuestaPalabraJson = buscarActividadAtributo(palabras);   
    console.log("respuestaPalabraJson: " + respuestaPalabraJson);
    return respuestaPalabraJson;
  }

  function buscarActividadAtributo(palabras){
    var respuestaPalabraJson = [];
    console.log("palabras buscarActividadAtributo: " + palabras);
    for(var i = 0; i< palabras.length; i++){
      switch(palabras[i]){
        case "chat":
          console.log("llegaste al chat"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "foro":
          console.log("llegaste al foro"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "glosario":
          console.log("llegaste al glosario"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "cuestionario":
          console.log("llegaste al cuestionario"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "wiki":
          console.log("llegaste al wiki"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "taller":
          console.log("llegaste al taller"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;

        case "tarea":
          console.log("llegaste al tarea"); 
          var JsonDoc = servicioJson.extraerJsonActividad(palabras[i]);
          var respuestaPalabraJson = servicioJson.buscarAtributoActividad(JsonDoc, palabras); 
        break;
      }          
    }
    return respuestaPalabraJson;  
  }