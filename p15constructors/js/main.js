//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado//guardarlo en una colección que se llame KodersList

//pt2://agregar a nuestro constructor un método que permita obtener el promedio del koder


function Koder (firstname, lastname, cHtml, cCss, cJs){
     this.firtsname = firstname;
     this.lastname = lastname;
     this.cHtml = cHtml;
     this.cCss = cCss;
     this.cJs = cJs;
     this.prom = function(){
         averageAdd = cHtml + cCss + cJs;
         averageF = averageAdd / 3
     }
    }

const koderList = () =>{
     let kodersNum = prompt ("Por favor introduce el número de Koders");
     let kodersArray = []; 
     for (let i = 1; i <= kodersNum; i++){ 
         let koderFirstname = prompt ("Por favor introduce el nombre del Koder"); 
         kodersArray.push (koderFirstname); 
         let koderLastname = prompt ("Por favor introduce el apellido del Koder"); 
         kodersArray.push (koderLastname); 
         let htmlGrade = prompt ("Por favor introduce la calificación en HTML"); 
         kodersArray.push (htmlGrade); 
         let cssGrade = prompt ("Por favor introduce la calificación en CSS"); 
         kodersArray.push (cssGrade); 
         let jsGrade = prompt ("Por favor introduce la calificación en Javascript"); 
         kodersArray.push (jsGrade); 
        } 
        let newKoder = new Koder (firstname, lastname, cHtml, cCss, cJs)
        console.log(kodersArray);
    }
koderList();
console.log(newKoder);


