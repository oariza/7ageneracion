//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

/* --------> INTENTO 1
var nameArray = [];
array = 0;
var numKoders = prompt("¿Cuántos koders vas a registrar?", "Ingresar número de Koders");
for (i = 0; i< numKoders; i++){
    var nameKoders = prompt("Ingresa nombre completo del Koder");
    nameArray.push(nameKoders);
    var space = nameArray[i].search(/ /gi);
    var firstName = nameArray[i].substr(0,space);
    console.log(firstName);
    
}*/

var nameArray = [];
var numKoders = prompt("¿Cuántos koders vas a registrar?", "Ingresar número de Koders");
for (var i = 0; i< numKoders; i++){
    var nameKoders = prompt("Ingresa nombre completo del Koder");
    nameArray.push(nameKoders);
    var space = nameArray[i].search(/ /gi);
 
}
nameArray.forEach(item => {console.log(item.split(" "))});
console.log(nameArray[1]);