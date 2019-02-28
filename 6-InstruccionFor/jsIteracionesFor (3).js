function Mostrar()
{

var repetciones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repetciones)) {
repeticiones = parseInt(prompt("Eso no es un numero. Ingerese el numero de repeticiones"));
}


for (var i = 0 ; i < repetciones; i++){
    console.log("Hola UTNFRA");
}



}//FIN DE LA FUNCIÓN