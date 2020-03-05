//EJERCICIO 1
// tener los valores de x y de y, y compararlos
// si x es mayor que y, mostrar mensaje que lo indique
// si x es menor que y, mostrar mensaje que lo indique

//Algoritmo
//obtener los valores de x y y
//preguntar si x es mayor que y
//obtener respuesta de la comparación
//si x es mayor que y, mostrar mensaje "x es mayor que y"
//si x no es mayor que y, mostrar mensaje "x es menor que y"


var x = 9;
var y = 9;

if (x > y){
    console.log (`${x} es mayor que ${y}`);
} else if (x < y){
    console.log (`${x} es menor que ${y}`);
}else {
    console.log (`${x} es igual que ${y}`)
}

//EJERCICIO 2
//Multiplicar 2 valores, y verificar si el resultado de la multiplicación es par o non
//si es par, indicarlo con un mensaje
//si es nonm inidcarlo con un mensaje

//Algoritmo
//obtener los dos valores
//multiplicar los dos valores
//obtener resultado de multiplicación
//preguntar si el resultado es par
// si es par mostrar el mensaje "es par"
// si no es par, mostrar el mensaje "es non"

var num1 = 3;
var num2 = 2;

prodNum = num1 * num2;

if (prodNum % 2 === 0){
    console.log (`${prodNum} es par`);
} else{
    console.log (`${prodNum} es impar`);
}

//EJERCICIO 3
//Recibir un número del usuario y calcular el área de un circulo cuyo radio sea igual al número proporcionado

//Algoritmo
//Declarar la variable radius, con el prompt obtener el valor, a través del mensaje para el usuario "Para obtener el área de un círculo, introduce el radio"
//Se obtiene el valor de radius
//Declarar la variable radius2
//Declarar la variable area
//Asignar la constante pi, con el valor de 3.1416
//Obtener el valor de radius2, por medio de la operacion de multiplicar la variable radius x la misma variable radius
//Obtener el valor de area, multiplicando la constante pi x la variable radius2
//Mostrar el mensaje "el área del circulo es" con el valor de la variable area

var radius = prompt("Para obtener el área de un círculo, introduce el radio", "Escribe el radio aquí");
var radius2;
var area;
var pi = 3.1416;

radius2 = radius * radius;
area = radius2 * pi;

console.log(`El área del círculo es ${area}`);



//EJERCICIO 4
//recibir del usuario los datos de 3 lados de un triangulo
//con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje
//en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno

//Algoritmo
//Declarar la variable side1, para el lado 1 del triángulo, y asignarle un valor numérico por medio de un prompt con el mensaje para el usuario "Introduce el lado 1 del triángulo"
//Declarar la variable side2, para el lado 2 del triángulo, y asignarle un valor numérico por medio de un prompt con el mensaje para el usuario "Introduce el lado 2 del triángulo"
//Declarar la variable side3, para el lado 3 del triángulo, y asignarle un valor numérico por medio de un prompt con el mensaje para el usuario "Introduce el lado 3 del triángulo"
//Declarar la variable side1n, donde se convertira a numero la variable side1
//Declarar la variable side2n, donde se convertira a numero la variable side2
//Declarar la variable side3n, donde se convertira a numero la variable side3
//Declarar la variable s, para el semiperímetro.
//Declarar la variable areaT.
//Declarar la variable s1, para el semiperímetro 1.
//Declarar la variable s2, para el semiperímetro 2.
//Declarar la variable s3, para el semiperímetro 3.
//Declarar la variable finalArea
//Calcular el semiperímetro en la variable s = (side1 + side2 + side3) / 2
//Calcular la siguiente operación en la variable s1 = s - side1
//Calcular la siguiente operación en la variable s2 = s - side2
//Calcular la siguiente operación en la variable s3 = s - side3
//Calcular la siguiente operación en la variable areaT = s * s1 * s2 * s3
//Calcular la raiz cuadrada con la siguiente función Math.sqrt(areaT) dentro de la variable finalArea
//Mostrar el mensaje de la variable finalArea: "El área del triangulo es"
//Comparar los lados del triangulo
//Si side1, side2 y side3 son iguales, mostrar el mensaje "Este triángulo Equilátero"
//Si side1 y side 2, o side 1 y side3, o side2 y side3, mostrar "Este triángulo Isoceles"
//Si side1, side2 y side3 son diferentes, mostrar "Este triángulo Escaleno"



var side1 = prompt("Introduce el lado 1 del triángulo");
var side2 = prompt("Introduce el lado 2 del triángulo");
var side3 = prompt("Introduce el lado 3 del triángulo");
var side1n = parseInt(side1);
var side2n = parseInt(side2);
var side3n = parseInt(side3);
var s;
var areaT;
var s1;
var s2;
var s3;
var finalArea;

s = (side1n + side2n + side3n) / 2;
s1 = s - side1n;
s2 = s - side2n;
s3 = s - side3n;
areaT = s * s1 * s2 * s3;
finalArea = Math.sqrt(areaT);

console.log(s);
console.log(`El área del triángulo es ${finalArea}`);

if (side1 === side2 && side1 === side3 && side2 === side3){
    console.log("Este triángulo es equilátero");
}else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log("Este triángulo es isósceles");
}else if (side1 !== side2 && side1 !== side3 && side2 !== side3)
    console.log("Este triángulo es escaleno"); 
 

