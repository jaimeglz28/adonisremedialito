'use strict'
const pregunta= use ('App/Models/Pregunta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with preguntas
 */

 
class PreguntaController {  
    async preguntas({response}){
    var pregunta=[];
    var randomNumber;
    var repetido=false;
    var cont=0;
    while(cont<5){
     repetido=false
      randomNumber = Math.floor(Math.random() * 7) + 1
      if(cont==0){
        pregunta.push(randomNumber)
        cont++;
      }else{
        
        for (let index = 0; index <= cont; index++) {
          if(pregunta[index]==randomNumber){
              repetido=true
          }
          
          
        }
        if(!repetido){
          pregunta.push(randomNumber)
          cont++;
        }
      }
    
    }
    return await response.status(200).json(pregunta)
   }


   async deuna({params,response}){
    return response.status(200).json(await pregunta.find(params.id))

   }
}

module.exports = PreguntaController
