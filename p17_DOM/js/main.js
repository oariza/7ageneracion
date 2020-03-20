var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

/*Teniendo el array kodersDb, realizar las siguientes operaciones:
1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
3.- Obtener el promedio general de prácticas entregadas
4.- Obtener el promedio general de asistencias
5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking!!! */


//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
const kodersPractices = kodersDb.filter (koder => koder.deliveredPractices < 10);
console.log(kodersPractices)

//2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
const kodersAssistance = kodersDb.filter (koder => koder.totalAssistance < 20);
console.log(kodersAssistance)

//3.- Obtener el promedio general de prácticas entregadas
var kodersNumPractices = kodersDb.reduce ((accum, koder) => {
    return accum += koder.deliveredPractices
},0)
var averagePractices = kodersNumPractices / kodersDb.length;
console.log(averagePractices)

//4.- Obtener el promedio general de asistencias
var kodersNumAssistances = kodersDb.reduce ((accum, koder) => {
    return accum += koder.totalAssistance
},0)
var averageAssistances = kodersNumAssistances / kodersDb.length;
console.log(averageAssistances)


/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>*/

kodersPractices.forEach((koder, index) =>{
    var rowPractices = document.createElement("tr"); //(Para Cada Koder) se crean una fila con la etiqueta HTML tr
    var numberCellPractices = document.createElement("td"); //(PCK) se crean una celda con la etiqueta HTML td
    var nameCellPractices = document.createElement("td");
    var practicesCellPractices = document.createElement("td");

    var numKoderPractices = document.createTextNode(index + 1);  //(PCK) los datos requeridos se asignan a variables
    var nameKoderPractices = document.createTextNode(`${koder.name} ${koder.lastName}`);
    var koderPracticesPractices = document.createTextNode(koder.deliveredPractices);

    numberCellPractices.appendChild (numKoderPractices); //(PCK) a los elementos se les agregan las variables
    nameCellPractices.appendChild (nameKoderPractices);
    practicesCellPractices.appendChild (koderPracticesPractices);

    rowPractices.appendChild(numberCellPractices); //(PCK)A cada tr se le agrega td (que ya trae la variable con la info)
    rowPractices.appendChild(nameCellPractices);
    rowPractices.appendChild(practicesCellPractices);

    //Se crea un contenedor que tendrá las filas con las celdas e información
    let practicesContainer = document.getElementById("practices-container")
    practicesContainer.appendChild(rowPractices);
})

/*6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>*/

kodersAssistance. forEach((koder, index)=>{
    var rowAssistance = document.createElement("tr");

    var cellNumberAssistance = document.createElement("td");
    var cellNameAssistance = document.createElement("td");
    var cellTotalAssistance = document.createElement("td");

    var numberAssistance = document.createTextNode(index + 1);
    var nameAssistance = document.createTextNode(`${koder.name} ${koder.lastname}`);
    var totalAssistance = document.createTextNode(koder.totalAssistance);

    cellNumberAssistance.appendChild(numberAssistance);
    cellNameAssistance.appendChild(nameAssistance);
    cellTotalAssistance.appendChild(totalAssistance);

    rowAssistance.appendChild(cellNumberAssistance);
    rowAssistance.appendChild(cellNameAssistance);
    rowAssistance.appendChild(cellTotalAssistance);

    let assistanceContainer = document.getElementById("assistances-container");
    assistanceContainer.appendChild(rowAssistance);
})


//7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3

var practicesAverageContainer = document.getElementById("practices-average");
var practicesAverageText = document.createTextNode(averagePractices);

practicesAverageContainer.appendChild(practicesAverageText);


//8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

var assistancesAverageContainer = document.getElementById("assistance-average");
var assistancesAverageText = document.createTextNode(averageAssistances);

assistancesAverageContainer.appendChild(assistancesAverageText);