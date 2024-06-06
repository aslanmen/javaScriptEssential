let length;
let width;

function calculateArea(){
    length=document.getElementById("length").value
    width=document.getElementById("width").value
    
    let area=length*width
    document.getElementById("result").innerText=`The area of the rectangle is: ${area}`
    
}

let grocery1;
let grocery2;
let grocery3;

function groceryTracker(){
    g1=(document.getElementById("grocery1").value)
    g2=(document.getElementById("grocery2").value)
    g3=(document.getElementById("grocery3").value)
    
    grocery1 = g1 ? parseFloat(g1) : 0;
    grocery2 = g2 ? parseFloat(g2) : 0;
    grocery3 = g3 ? parseFloat(g3) : 0;

    let total=grocery1+grocery2+grocery3
    
    document.getElementById("total").innerText=`The total amount is:$ ${total}`
    
}