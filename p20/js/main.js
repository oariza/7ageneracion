const saveProduct = () => {             //se crea una funcion que obtenga datos de un formulario
    let name = document.getElementById("koder-name").value  //var que tomara el valor name
    let description = document.getElementById("koder-last-name").value; //var que tomara el valor descr
    let price = document.getElementById("koder-delivered-practices").value; // "  " price
    price = parseInt(price) // el precio se convierte a numero
    let productObject = {name,description,price} // con los datos de crea un objeto
    
    console.log(productObject) //se imprime en consola, pus pa probar que sirva

    addProductToDB(productObject) //esta funcion se agrega a la funcion POST de aqui abajito
}


//hay que hacer que el botón funcione pues'n
var saveKoderBtn = document.getElementById("submit-button"); // se crea una var que obtendra "datos" del btn
saveKoderBtn.addEventListener("click",saveProduct) // se crea un listener para que con el click nos ejecute la funcion saveProduct (o sease que va a obtener los datos del formulario y a su vez enviarlos a la funcion POST)


//POST
//Pues el POST nos va a permitir crear datos en nuestra BD remota (en este caso alojada en firebaseio.com)
const addProductToDB = (productObject) => { //se crea funcion que agregara el objeto del formulario
    let xhttp = new XMLHttpRequest(); //se crea una variable con la consulta XMLHTTP

    xhttp.onreadystatechange = function(){ //una funcion va a ejecutarse cada que cambie el readyState
        if(this.readyState == 4 && this.status == 200){ //si readyState y status están OK...
            console.log(this.responseText) //nos manda la respuesta de la consulta (o sea sabremos si se mandó o no nuestro objeto)
        }
    }
    

    //open inicializa un nuevo requerimiento del metodo POST, a la url, asincrono
    xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/omar/products.json",true)
    xhttp.send(JSON.stringify(productObject)) //envia la solicitud (el objeto productObject) al servidor. convierte el objeto a una cadena de texto JSON.
}


//GET
//Pues el GET nos va a permitir obtener datos de nuestra BD remota (en este caso alojada en firebaseio.com)
const getProducts = () => { //se crea funcion que obtendrá información de la BD
    console.log("getting products") //probemos que funciona la función :)

    let xhttp = new XMLHttpRequest() //se crea una variable con la consulta XMLHTTP

    xhttp.onreadystatechange = function(){ //una funcion va a ejecutarse cada que cambie el readyState
        if(this.readyState == 4 && this.status == 200){ //si readyState y status están OK...         
            let response = JSON.parse(this.responseText) //se crea una variable que parsea respuesta
            console.log(response) //nos manda la respuesta de la consulta (o sea sabremos si se mandó o no nuestro objeto)
        } 
    }

    //open inicializa un nuevo requerimiento del metodo GET, a la url, asincrono
    xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/omar/products.json",true)
    xhttp.send() //envia la solicitud al servidor.
}


// PUT
//Pues el PUT nos va a permitir actualizar TODO el objeto en BD remota (en este caso alojada en firebaseio.com)
const putProduct = (productId,productObject) => { //se crea una funcion que nos permitira ingresar el ID y el objeto a actualizar
    console.log("getting products") // probamos funcion :)

    let xhttp = new XMLHttpRequest() //se crea una variable con la consulta XMLHTTP

    xhttp.onreadystatechange = function(){ //una funcion va a ejecutarse cada que cambie el readyState
        if(this.readyState == 4 && this.status == 200){ //si readyState y status están OK... 
            
            let response = JSON.parse(this.responseText) //se crea una variable que parsea respuesta
            console.log(response) //nos manda la respuesta de la consulta (o sea sabremos si se mandó o no nuestro objeto)
        }
    }

    //open inicializa un nuevo requerimiento del metodo PUT, a la url, asincrono. ${productId} nos idica que index de producto(en este caso) se va a actaulizar. 
    xhttp.open("PUT",`https://javascript-ajax-d0ce6.firebaseio.com/omar/products/${productId}.json`,true)
    xhttp.send(productObject) //envia la solicitud al servidor.
}


//DELETE
//Pues el DELETE nos va a permitir elimar un objeto de nuestra BD (en este caso alojada en firebaseio.com)
const deleteProduct = (productId) => { //se crea una funcion que nos permitira ingresar el ID a eliminar
    console.log("getting products") // probamos funcion :)

    let xhttp = new XMLHttpRequest()//se crea una variable con la consulta XMLHTTP

    xhttp.onreadystatechange = function(){ //una funcion va a ejecutarse cada que cambie el readyState
        if(this.readyState == 4 && this.status == 200){ //si readyState y status están OK... 
            
            let response = JSON.parse(this.responseText) //se crea una variable que parsea respuesta
            console.log(response) //nos manda la respuesta de la consulta (o sea sabremos si se mandó o no nuestro objeto)
        }
    }

    //open inicializa un nuevo requerimiento del metodo DELETE, a la url, asincrono. ${productId} nos idica que index de producto(en este caso) se va a eliminar. 
    xhttp.open("DELETE",`https://javascript-ajax-d0ce6.firebaseio.com/omar/products/${productId}.json`,true)
    xhttp.send() //envia la solicitud al servidor.
}



