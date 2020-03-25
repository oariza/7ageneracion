//Botanas


//función constructora
function Snack (nameSnack, flavorSnack, contentSnack){
    this.nameSnack = nameSnack,
    this.flavorSnack = flavorSnack,
    this.contentSnack = contentSnack
    this.slogan = function (){
        alert(`Nuestra botana ${this.nameSnack} es la más sabrosa!!!`)
    }
}

var snackColletion = [];
const askSnack = () =>{
    let howManySnacks = prompt ("¿Cuántas botanas deseas ingresar?");
    let i;
    for (i = 0; i < howManySnacks; i++){
        let askNameSnack = prompt("¿Cuál es el nombre de la botana");
        let askFlavorSnack = prompt("¿Cuál es el sabor de la botana");
        let askContentSnack = prompt("Cuánto es el contenido de la botana");
        let snackArray = [askNameSnack,askFlavorSnack,askContentSnack];
        snackColletion.push(snackArray);
    }
    console.log(snackColletion);
}



