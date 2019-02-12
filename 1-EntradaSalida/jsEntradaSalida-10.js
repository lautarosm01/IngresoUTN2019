/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var precio;
    var descuento;
    var resultado; 

    precio = parseFloat (document.getElementById("importe").value);

    descuento = precio * 25 / 100;

    resultado = precio - descuento;

    alert("El descuento es de $"+ resultado);
 
    document.getElementById("resultado").value = resultado;
}