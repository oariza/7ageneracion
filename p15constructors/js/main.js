//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList

//pt2://agregar a nuestro constructor un método que permita obtener el promedio del koder

//funcion constructora
function Koder (firstname, lastname, cHtml, cCss, cJs){
     this.firstname = firstname;
     this.lastname = lastname;
     this.cHtml = cHtml;
     this.cCss = cCss;
     this.cJs = cJs;
     this.average = function (){
         return this.cHtml + this.cCss + this.cJs / 3
     }
    }

var koderMatrix = [];  // arreglo vacio para el conjunto de koders
const koderList = () =>{    
    let kodersNum = prompt ("Por favor introduce el número de Koders");
    let kodersArray = [];  //arreglo vacio para crear UN koder
    for (let i = 1; i <= kodersNum; i++){ 
        let koderFirstname = prompt ("Por favor introduce el nombre del Koder"); 
        let koderLastname = prompt ("Por favor introduce el apellido del Koder"); 
        let htmlGrade = prompt ("Por favor introduce la calificación en HTML"); 
        let cssGrade = prompt ("Por favor introduce la calificación en CSS"); 
        let jsGrade = prompt ("Por favor introduce la calificación en Javascript"); 
        kodersArray = [koderFirstname,koderLastname,htmlGrade,cssGrade,jsGrade]; //se llena arreglo de UN koder
        koderMatrix.push(kodersArray); //se llena el conjunto de koders con cada bucle
    } 
}
var koderCollection = []; //array vacio para colocar los objetos que se crearán abajo

const koderObject = (koderCreate) => { //se crea una funcion que creara cada objeto (koder)
    koderCreate.forEach((item) =>{  //la función va a iterar cada koder (en este caso del conjunto de Koders)
        let newKoder = new Koder(...item) //en cada iteracion va a crear un objeto con la funcion constructora
        koderCollection.push(newKoder) //como los objetos (koders) se ingresaran a un array, se usa push
    })
    console.log(koderCollection)
}

koderList();
koderObject(koderMatrix);


