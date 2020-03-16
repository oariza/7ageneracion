/*var mentorsName = [
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



mentorsName.forEach(name => {
    var separatedName = name.split(" ");
    console.log(separatedName);
});




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
*/
var bmentorsNames = [    
    "Brenda González",    
    "Shalem Solis",    
    "Jorge Ochoa",    
    "Rurick Maqueo",    
    "Alex Cruz",    
    "Daniel Ortega"
    ]
  
  var amentorsNames = [    
    "Verónica Nemecio",    
    "Carolina Gayoso",    
    "David Moranchel",    
    "Carlos Silva",    
    "Michael Villalba",    
    "Israel Salinas",    
    "Carlos Ramos"]
  
    
  //función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"
  const arrayCount = (array) => {
    if (array.length >= 0 ){
            console.log(`El array tiene ${array.length} items`)
    }else if (typeof array != "number"){
      console.log("tu array no existe");
    }
  }
  
  arrayCount(amentorsNames);
  
  
  //función que reciba un array, e imprima los elementos de ese array en orden alfábetico y con la primer palabra en uppercase
  
  const orderArray = (array) => {
    array.sort()
    array.forEach ( (item) => {
      let splitedNames = item.split(" ")
      firstName = splitedNames[0].toUpperCase();
      lastName = splitedNames[1];
  
      console.log(`${firstName} ${lastName}`);
    })
  }
  
  orderArray(amentorsNames)
  
  
  //función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
  
  const charLimit = (array, num) => {
    array.forEach ( (item2) => {
      console.log(item2.slice(0,num))
    })
  }
  
  charLimit (amentorsNames, 4);
  
  
  //función que reciba una cantidad (número), este número será la cantidad de veces que se solicite al usuario mediante un prompt algún nombre, todos los nombres se deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, con sus respectivas iniciales
  
  var namesArray = [];
  
  const numNames = (number) => {
    for (let i=1; i<=number; i++){
          let names = prompt ("Por favor ingresa un nombre");
      namesArray.push(names);
    }
    namesArray.forEach ((item3) => {
      let splitedNames2 = item3.split(" ")
      let n = splitedNames2[0].slice (0,1);
      let l = splitedNames2[1].slice (0,1);
      console.log (`${item3}, ${n}. ${l}.`)
  
    })
  }
  
  numNames (2);



