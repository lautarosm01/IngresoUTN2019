/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()

/*    var num1  
    var num2
    var resultado

    num1 = document.getElementById ("numeroUno").value
    num1 = parseInt(num1)
    
    num2 = document.getElementById ("numeroDos").value
    num2 = parseInt(num2)
    
    resultado = num1+num2   
    
    alert("la suma es "+resultado)*/


{
    var num1   
    var num2

    num1 = parseInt(document.getElementById("numeroUno").value) /* es la mejor forma de escribirlo */
    
    num2 = parseInt(document.getElementById("numeroDos").value)

    alert ("La suma es "+ (num1+num2))
}