const person = {
    name :"sudarshan",
    sayMyName : function (){
        console.log(`dude sup${this.name}` )
    }
}
const video   = (title)=>{
    this.title = title
    console.log("this",this)
}
//if the function is method in an object "this" references the object that is excuting the current function
//if the function is a normal function global window

module.exports = {person,video}