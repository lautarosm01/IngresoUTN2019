function Mostrar()
{
//tomo la edad  

    var edad;

    edad = parseInt( document.getElementById("edad").value);

    if (edad >= 18) {

        alert("Es mayor")
    } 
    else if (edad >= 13 && edad <= 17) {
        alert("Es adolescente")
    }
    else {
        alert("Es Niño")
    }




}//FIN DE LA FUNCIÓN
