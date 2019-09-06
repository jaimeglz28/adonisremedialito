'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with respuestasses
 */
const BD=use('Database')
class RespuestassController {

 async respuestas({params, response}){
    let respuestas_ = await BD.select().from('respuestasses').where('categoria',params.cat)  
    return response.status(200).json(respuestas_) 
 }
 
}

module.exports = RespuestassController
