// search function that calls the api 
// delay 
//DEBOUNCE
function debounce (func,delay){
    let timer;
    return function(){
        const context =this
        const args = arguments
        timer = setTimeout(()=>{
            func.apply(context,args)
            
            
        },delay)
        
        
        
    }
}
// THROTLLING
function throttling(func,delay){
    let isExuctable = true;
    return function(){
        let args = arguments;
        let context  = this;
        if(isExuctable){ 
            func.apply(context,args)
            isExuctable = false
            setTimeout(()=>{
                isExuctable = true
            },delay)
        }

    }
    


}
//dobounce ---> differnece between one key press event and the other key press event is greater than a specified time then 
// we do a fucntion call
//throttling ---> if the differnece between to function call is greater than a specified time then we do  api call