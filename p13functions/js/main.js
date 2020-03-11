var mentorsName = [
    "Brenda Gonzalez",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"
]

//iterar dentro del array
//por cada item, obtener el nombre del mentor
//extraer la primer letra de cada nombre
//concatenar el contenido de cada item con las iniciales, separadas por un punto
//mostrar en consola el resultado


/*
mentorsName.forEach(name => {
    var separatedName = name.split(" ");
    console.log(separatedName);
});
*/



//crear una funcion o funciones que permitan al usuario elegir
//una operación básica, indicar 2 valores, y ejecutar la operación
//seleccionada. Imprimir resultado

//output: "La ${operacion} de los dos números que indicaste es ${resultado}"


//Algoritmo


var arithmetic = " ";
var num1 = 0;
var num2 = 0;

const arithmeticOp2Nums = (arithmetic, num1, num2) => {
    let op = 0;
    if (arithmetic === "suma"){
        op = num1 + num2;
    }else if (arithmetic === "resta"){
        op = num1 - num2;
    }else if (arithmetic === "division"){
        op = num1 / num2;
    }else if (arithmetic === "multiplicacion"){
        op = num1 * num2;
    } else {
        console.log("error, ingresaste algo mal");
    }
    console.log(`La ${arithmetic} de ${num1} y ${num2} es igual a ${op}`)
}



