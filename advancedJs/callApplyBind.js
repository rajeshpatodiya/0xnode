//call apply , bind
//function borrowing
obj1 = {
    name:"sudarshan",
    age:28,
    isDegen:true,
    print:function (dumb,rem){
        console.log(`${this.name}, of ${this.age} is a degen ${dumb},${rem} `)
    }
    
}
obj2 ={
    name:"jzzzz",
    age:89
}
obj1.print.call(obj2,45,45) //call
obj1.print.apply(obj2,[100,100]) //apply -->pass in an array
let a  = obj1.print.bind(obj2,"bind","bind")  
a() // bind ---> store it in a variable and invoke it later



module.exports = {FullName}