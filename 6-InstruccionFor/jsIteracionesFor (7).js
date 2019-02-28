function Mostrar()
{

var numero;
var contadorPares = 0;

    numero = parseInt(prompt("ingrese un numero"));

    while (isNaN(numero)) {
    numero = parseInt(prompt("Eso no es un numero. Ingerese un numero"));
}

    for ( var i=1; i <= numero; i++){
    
    if (numero % i == 0){
        contadorPares++;
        console.log(i);
    }

    }

    alert(("numeros pares encontrado: ")+ contadorPares);


}//FIN DE LA FUNCIÓN