
/// so when u  use a return a function from another function it returns a combination of the the function as well as its scope 
// here scope is counter . so js allocates persistent memory and next time u call it it does updates the scope or makes does the operation using prev scope
const clousres = ()=>{
    count = 0
    return function inner(){
        count = count+1
        console.log(count)
    }
} 
module.exports = {clousres}