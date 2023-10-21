function main(){

     document.body.style.backgroundColor=rgb()
}

// const ty=document.getElementById('id');
// ty.addEventListener('click',function(){
    // const tt= document.getElementById('div');
    // tt.style.backgroundColor=rgb()

// })

function rgb(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const yellow=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${yellow})`
}