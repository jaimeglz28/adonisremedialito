'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/



const Ws = use('Ws')
let connectCounter=0
let partida = ''
let score= []
//Ws.channel('juego:espera', ({ socket }) => {
   
Ws.channel('juego', ({ socket }) => {
    connectCounter++
    socket.on('close', () =>{
         connectCounter--
         })
    console.log(connectCounter)
    if(connectCounter === 3){
        socket.broadcastToAll('iniciarpartida',partida)
    }


    
  console.log('user joined with %s socket id', socket.id)

  socket.on('nuevapartida', (nombre) =>{
      partida = nombre
  })
        socket.on('enviarpreguntas',(preguntas)=>{
            socket.broadcast('recibipreguntas',preguntas)
        })
        socket.on('cambiarpregunta',()=>{
            socket.broadcastToAll('next')
        })
        socket.on('verificarganador',(datos)=>{
            score.push(datos)
            console.log(score)
            if(score.length==2){
                if(score[0].puntos> score[1].puntos){
                    console.log(score[0])
                    socket.broadcastToAll('ganador',score[0].username)
                    
                   
                    
                } else {
                    console.log(score[1])
                    socket.broadcastToAll('ganador',score[1].username)

                }
                score=[]
            }
        })
})

