'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() =>{
  Route.post('login','UserController.login')
  Route.post('registro','UserController.registro')
  Route.get('getuser/:id','UserController.show')
}).prefix('users')



//partidas
Route.group(() =>{
Route.get('mostrar', 'PartidaController.mostrar')
Route.post('partidas','PartidaController.partidas')
}).prefix('partida')

//preguntas
Route.get('/pregunta','PreguntaController.preguntas')
Route.get('/deuna/:id','PreguntaController.deuna')

//respuestas
Route.get('respuestas/:cat','RespuestassController.respuestas')