/*
//Práctica 1
//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre

//Algoritmo
//Declarar la variable name, para el nombre del usuario por medio de un prompt con el mensaje "Introduce tu nombre"
//Declarar la variable charName y asignar el valor de contar los caracteres con el método length
//Mostrar el valor de charName con el mensaje "Tu nombre tiene N caracteres"

var name = prompt("Introduce tu nombre completo");
var charName = name.length;
console.log(`Tu nombre tiene ${charName} caracteres`);



//Práctica 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

//Algoritmo
//Declarar la variable name, para el nombre del usuario por medio de un prompt con el mensaje "Introduce tu nombre"
//Declarar la variable charName y asignar el valor de contar los caracteres con el método length
//Mostrar el valor de charName con el mensaje "Tu nombre tiene N caracteres"
//Si la variable charName es menor a 15, mostrar el mensaje "Tu nombre es muy corto"
//De lo contrario, mostrar el mensaje "Tu nombre es muy largo"

if(charName < 15){
    console.log(`Tu nombre es muy corto`);
}else{
    console.log(`Tu nombre es muy largo`);
}


//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

//Algoritmo
//Declarar la variable name, para el nombre del usuario por medio de un prompt con el mensaje "Introduce tu nombre"
//Declarar la variable aLetter y usar el método includes() para buscar las letras a en la variable charName.
//Declarar la variable eLetter y usar el método includes() para buscar las letras e en la variable charName.
//Declarar la variable iLetter y usar el método includes() para buscar las letras i en la variable charName.
//Declarar la variable oLetter y usar el método includes() para buscar las letras o en la variable charName.
//Declarar la variable uLetter y usar el método includes() para buscar las letras u en la variable charName.
//Declarar la variable aFinal e inicializala en 0
//Declarar la variable eFinal e inicializala en 0
//Declarar la variable iFinal e inicializala en 0
//Declarar la variable oFinal e inicializala en 0
//Declarar la variable uFinal e inicializala en 0
// Si la variable aLetter es igual a true, entonces asignar el valor 1 a aFinal
// Si la variable eLetter es igual a true, entonces asignar el valor 1 a eFinal
// Si la variable iLetter es igual a true, entonces asignar el valor 1 a iFinal
// Si la variable oLetter es igual a true, entonces asignar el valor 1 a oFinal
// Si la variable uLetter es igual a true, entonces asignar el valor 1 a uFinal
//Declarar la variable vocals
//Sumar las variables aFinal, eFinal, iFinal, oFinal, uFinal en la variable vocals
//Mostrar el mensaje del valor de vocals "Tu nombre tiene N vocales"

var vocal = name.match(/[aeiou]/gi);
console.log(vocal.length);

*/


//--------->MÁS EJERCICIOS

/* Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo

pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"

Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario */


//Algoritmo
//Declarar la variable word, y asignar un prompt para que el usuario visualice una pantalla con el siguiente mensaje "Introduce una palabra"
//Si el largo de la palabra es menor a 5, mostrar el mensaje "Error - Palabra muy corta"
//Si no, declarar la variable twoFirstWords y utilizar el método substr en la variable word, para extraer las dos primeras letras
//Declarar la variable lastWord, cuyo valor sea el largo de la variable word
//Declarar la variable penWord, cuyo valor sea el largo de la variable word menos dos
//Declarar la variable twoFinalWords cuyo valor sea el método que extrae las dos ultimas letras, con base en las variables penWord y lastWord
//Declarar la variable newWord cuyo valor sea la concatenación de las variables twoFirstWords y twoFinalWords
//Mostrar el mensaje "La nueva palabra es {newWord}"

var word = prompt("Introduce una palabra");
if (word.length <= 5){
    console.error("Error - Palabra muy corta")
}else {
    var twoFirstWords = word.substr(0, 2);
    var lastWord = word.length;
    var penWord = word.length - 2;
    var twoFinalWords = word.substr(penWord,lastWord);
    var newWord = twoFirstWords.concat(twoFinalWords);
    console.log(`La nueva palabra es ${newWord}`)
}


//Algoritmo
//Declarar la variable userName y asignar un prompt para que el usuario visualice una pantalla con el siguiente mensaje "Introduce tu nombre"
//Declarar la variable userName y asignar un prompt para que el usuario visualice una pantalla con el siguiente mensaje "Introduce tu edad"
//Muestra en pantalla, el siguiente mensaje "Hola, soy {userName} y tengo {userAge} años"
var userName = prompt("Introduce tu nombre");
var userAge = prompt("Introduce tu edad");
console.log (`Hola, soy ${userName} y tengo ${userAge} años`)


//Algoritmo
//Declara la variable text y asignar un prompt para que el usuario visualice una pantalla con el siguiente mensaje en dentro de caja de texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
//Declarar la variable countText, cuyo valor sea la extracción de la palabra "estudiante" dentro de la variable text, con ayuda del método match.
//Muestra en un mensaje el siguiente texto "La palabra estudiante se repite {countText.length} veces", mostrando el largo de la variable countText
//Declarar la variable replacedText, cuyo valor sea la variable text, y reemplazando las palabras "estudiante" por "Koder", con ayuda del método replace.
//Mostrar el mensaje de la variable replacedText para mostrar el texto con los reemplazos

var text = prompt("Texto", "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado")
var countText = text.match(/estudiante/gi);
console.log (`La palabra estudiante se repite ${countText.length} veces`);
var replacedText = text.replace("estudiante", "Koder");
console.log (replacedText);
