const FullName  =  (firstName,lastName)=>{
    this.firstName = firstName
    this.lastName = lastName
    console.log(`name is ${this.firstName} ${this.lastName}`)
}
//function borrowing
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
//function borrowing
obj1.print()
obj1.print.call(obj2)
let obj3 = {
    name:"sudarshan",
    age:24,
    print:function(house,street){
        console.log(this.name,this.age,house,street)
    }
}
let obj4 = {
    name:"nayan",
    age:28,
    height:164
    
}
//function borrowing
obj3.print("ceebros",5)
obj3.print.apply(obj4,["manor",89])
//in apply u pass i an array
//in bind u can return it in an array and invoke it later
let a  = obj3.print.bind(obj4,"manor",89)



module.exports = {FullName}