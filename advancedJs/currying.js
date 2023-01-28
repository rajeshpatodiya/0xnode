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