/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar() 
{
   var numero;
   var contadorPares = 0;
   var contadorImpares = 0;
   var promedioNumeros;
   var acumuladorNumeros = 0;
   var numeroMax;
   var numeroMin;
   var flag = 0;
   var contador = 5;
   var respuesta;
   


    do{
         numero = parseInt(prompt("Ingrese un numero."));
        while(numero < 0 || isNaN(numero)){
            numero = parseInt("Eso no es un numero. Ingrese un numero.");
        }

        if (numero % 2 == 1){
            contadorImpares++;
        }
        else{
            contadorPares++;
        }

        acumuladorNumeros = acumuladorNumeros + numero;

        if ( numero > numeroMax || flag == 0){
           numeroMax = numero;
        }

        if (numero < numeroMin || flag == 0){
            numeroMin = numero
        }
        contador ++;

        respuesta = confirm("Desea ingresar mas numeros?");
} while(respuesta); 

promedioNumeros = acumuladorNumeros / contador;

document.write("a) la cantidad de numeros pares: " + contadorPares + "<br>");
document.write("b) la cantidad de numeros impares: " + contadorImpares + "<br>");
document.write("c) Promedio de numeros ingresados: " + promedioNumeros.toFixed(2) + "<br>");
document.write("d) la suma de todos los numeros es: " + acumuladorNumeros + "<br>");
document.write("e) numero maximo: " + numeroMax + "<br>");
document.write("f) numero minimo: " + numeroMin + "<br>");

}

