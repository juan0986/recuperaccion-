var numeros = [1,2,3,4,5,6,7,8,9,10];

var min = numeros[0]; 
 
function minmax(){
for(i=1;i<numeros.length;i++){  
    if(numeros[i]<min){   
       (min=numeros[i])   
    }
}
alert(min);



var mayor = 0;
 
for(i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor)
    {
        mayor = numeros[i];
    }
}
 
alert(mayor);

};
alert(minmax( min));
alert(minmax( mayor));




