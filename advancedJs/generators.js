//generators are functions that can be paused and resumed
function* cards(a,b,c){
    const add = yield a+b+c
    const multiply  = yield a*b*c*100
}
module.exports = {cards}