
var d=1*prompt("increse un numero");
function decToHex(d) { 
    return ((Number(d).toString(16))).slice(-2).toUpperCase() 
} 

alert(decToHex(d));