//shallow copy does not create a copy  of the nested object 
//deep copy creates a new object with th nested object as well
sourceObject = {name:"sudarshan",age:4,isDegen:{real:"yes"}}
shallowCopy = Object.assign({},sourceObject)
sourceObject.isDegen.real = "no"
sourceObject.name = "dude"
console.log(shallowCopy)

let deepCopy = JSON.parse(JSON.stringify(sourceObject))
sourceObject.isDegen.real = "nos"
console.log(deepCopy)