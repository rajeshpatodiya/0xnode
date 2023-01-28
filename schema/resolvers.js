const {UserList,MovieList} = require('../dbData')
const _ = require('lodash')
const resolvers = {
    Query:{
        users(){
            console.log(UserList)
            return UserList
        },
        user(parent,args){
            const id = args.id
            const user = _.find(UserList,{id:Number(id)})
            return user
        },
        movies(){
            return MovieList
        },
        movie(parent,args){
            console.log("args",args,parent)
            const name  = args.name
            const movie  = _.find(MovieList,{name})
            return movie
            
        }

        
    },
    Mutation:{
        addUser(parent,args){
            let prevId  = UserList.length
            args.input.id = prevId+1
            UserList.push(args.input)
            console.log("added user",args.input)
            return args.input
        },
        updateUser(parent,args){
            console.log(args)
            let updatedUSer;
            UserList.forEach((user)=>{
                if(args.input.id ==user.id){
                    user.username = args.input.newUsername
                    updatedUSer = user
                }
                console.log(user.username)
            })
            return updatedUSer

        }
    }
    
    
}
module.exports  =  {resolvers}