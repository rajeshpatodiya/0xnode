
Function.prototype.mybind = function(...args){
    object = this
    params = args.slice(1)
    console.log(params)
    
    return function(){
        object.apply(args[0],params)
    }
}
let a  = obj1.print.mybind(obj2,100,200)
a()
//akshay sani 
