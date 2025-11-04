function verificar() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var n3 = parseFloat(document.getElementById("num3").value);
    
    if(n1 > n2 && n1 > n3){
        alert("El primer numero es mayor");
    }else if(n2 > n1 && n2 > n3){
        alert("El segundo numero es mayor ");
    }else if (n3 > n1 && n3 > n2){
        alert("El tercer numero es mayor")
    }else if (n3===n1 && n3===n2){
        alert("Todos los numeros son iguales")
    }else {
        alert("No hay numeros")
    }

    
}
