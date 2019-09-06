'use strict'
const User = use ('App/Models/user')

class UsuarioController {
    async login ({request, response, auth}){

        const {email,password} = request.only(['email','password'])
        
        const token = await auth.attempt(email,password)
        console.log(token)
        return response.json(token)
        
    }
   
        async registro({request,response}){
            const {username,email,password,rol } = request.only([
                'username',
                'email',
                'password',
                'rol'
            ])
            await User.create({
                username,
                email,
                password,
                rol
                
            })
                return response.send({message: 'El usuario ha sido creado'})
        }
        async show ({ params, response}) {
            
            const user = await User.find(params.id)
            const res= {
                username:user.username,
                email:user.email,
                rol:user.rol

               
            }
            return response.json(res)
        }

    }

   
    


module.exports = UsuarioController
