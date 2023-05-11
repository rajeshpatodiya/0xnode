const add = (a,b,c)=>{
    return a+b+b

}
const adds   = (a)=>{
    return function(b){
        return function (c){
            return a+b+c
        }
    }
}

const information = (obj)=>{
    return function(userinfo){
        return obj[userinfo]
    }
}
module.exports = {add,adds,information}
//just makes it more readable and expressive It can also make your code more modular, 
//by allowing you to reuse common patterns of function composition