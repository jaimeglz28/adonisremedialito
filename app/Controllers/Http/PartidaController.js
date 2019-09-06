'use strict'


const bd= use('Database')
const partida = use('App/Models/Partida')

class PartidaController {
  async partidas({request,response}){
    const {nombre_partida,activa } = request.only([
        'nombre_partida',
        'activa'
        
    ])
    const juego= new partida()
    juego.nombre_partida = nombre_partida
    juego.activa = activa
    await juego.save ()
        

        
    
        return response.send({message: 'La partida ha sido Creada'})
}

async mostrar({response}){
  var activas = await bd.select('nombre_partida').from('partidas').where('activa','1').orderBy('partida_id','desc').limit(1)
 
  return await response.status(200).json(activas)
  
  
}

}
module.exports = PartidaController
