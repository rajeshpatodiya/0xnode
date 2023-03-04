// what if u want to create you own bind function 
//1.u need to make sure ur custom bind method is accesable bu other objects when called
//2. u can do the above by by storing it in Function.prototype.{custom_name}

let obj1 = {
    name:"sudarshan",
    age:24,
    print:function(){
        console.log(this.name,this.age)
    }
}
let obj2 = {
    name:"nayan",
    age:28,
    height:164
    
}
// let a  = obj1.print.bind(obj2,"manor",89)
//the below implementation is without arguments
//..args takes all the arguments that u pass as an array to a function
Function.prototype.mybind = function(...args){
    let obj =  this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
        
        

    }
}
let a  = obj1.print.mybind(obj2,"manor",89)
a("dsad")