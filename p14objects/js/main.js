// crear una función que pida al usuario a través de un prompt las propiedades nombre {name}, apellido {lastname}, edad {age}, y teléfono {phone} de un koder y crear un objeto {koderObject} con esos datos


var koderObject = {
    name:" ",
    lastname:" ",
    age:" ",
    phone:" ",
}

const koder = () =>{

    let koderName = prompt("Por favor ingresa el nombre del koder");
    let koderLastname = prompt("Por favor ingresa el apellido del koder");
    let koderAge = prompt("Por favor ingresa la edad del koder");
    let koderPhone = prompt("Por favor ingresa el teléfono del koder");

    koderObject.name = koderName;
    koderObject.lastname = koderLastname;
    koderObject.age = koderAge;
    koderObject.phone = koderPhone;

}









/*
const koder = () =>{

    let koderName = prompt("Por favor ingresa el nombre del koder");
    let koderLastname = prompt("Por favor ingresa el apellido del koder");
    let koderAge = prompt("Por favor ingresa la edad del koder");
    let koderPhone = prompt("Por favor ingresa el teléfono del koder");
    let koderObject = {name, lastName, age, phone}
    console.log(koderObject)

}
*/