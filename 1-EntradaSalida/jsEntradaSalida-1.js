//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var nota;
var sexo;
var promedio;
var notaBaja;
var sexoNotaBaja;
var contadorVaronesMas5 = 0;
var acumulador = 0;
var flag = 0;
var cantidad = 5;

for (var i = 0; i < cantidad ; i++) {
    nota = parseInt(prompt("Ingrese nota: "));
    while ( nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseInt(prompt("Error. Ingrese nota: "));
}

    sexo = prompt("Ingrese sexo: ");
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Error. Reingrese sexo: ");
}

acumulador = acumulador + nota;

if ( sexo == "m" && nota >= 6){
    contadorVaronesMas5++;
}

if ( nota < notaBaja || flag == 0){
    notaBaja = nota;
    sexoNotaBaja = sexo;
    flag = 1;
}
}

 promedio = acumulador / cantidad;

alert ("promedio de las notas: "+ promedio + "\nVarones con notas mayor: " + contadorVaronesMas5 + "\nNota mas baja : "+ notaBaja+ "\nSexo nota baja: "+ sexoNotaBaja); 


}

