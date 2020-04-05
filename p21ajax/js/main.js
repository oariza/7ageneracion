
const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderPhone = document.getElementById("koder-phone").value;
    let koderEmail = document.getElementById("koder-email").value;
    
    let koderObject = {koderName,koderPhone,koderEmail}
    
    console.log(koderObject)


    addKoderToDB(koderObject);
    
}


var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder)



const addKoderToDB = (koderToAdd) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }

    xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/omar/koders.json", true)
    xhttp.send(JSON.stringify(koderToAdd))
}



const getKoders = () =>{
    console.log("getting koders")

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)

            document.getElementById("koders-wrapper").innerHTML = ""

            for(let koder in response){
                let currentContent = document.getElementById("koders-wrapper").innerHTML;  

                let newContent = `
                    <tr>
                        <td><span class="text-uppercase">${koder.koderName}</span></td>
                        <td>${koder.koderPhone}</td>
                        <td>${koder.koderEmail}</td>
                        <td>
                            <div class='btn btn-danger delete-kdr' id='btn-delete'>Eliminar</div>
                        </td>
                    </tr>
                    `
                document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
            }


        }
    }

    xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/omar/koders.json", true)
    xhttp.send()

}



const deleteKoder = (koderId) => { //se crea una funcion que nos permitira ingresar el ID a eliminar
    console.log("getting koders") // probamos funcion :)

    let xhttp = new XMLHttpRequest()//se crea una variable con la consulta XMLHTTP

    xhttp.onreadystatechange = function(){ //una funcion va a ejecutarse cada que cambie el readyState
        if(this.readyState == 4 && this.status == 200){ //si readyState y status están OK... 
            
            let response = JSON.parse(this.responseText) //se crea una variable que parsea respuesta
            console.log(response) //nos manda la respuesta de la consulta (o sea sabremos si se mandó o no nuestro objeto)
        }
    }

    xhttp.open("DELETE",`https://javascript-ajax-d0ce6.firebaseio.com/omar/koders/${koderId}.json`,true)
    xhttp.send() //envia la solicitud al servidor.
}

const assignDeleteListener = () => {
    var deleteFromChart = document.getElementsByClassName("delete-kdr")
    console.log(deleteFromChart);
    var i;
    for (i = 0; i < deleteFromChart.length; i++) {
        deleteFromChart[i].addEventListener("click", deleteProductFromChart)
    }
}


var deleteKoderBtn = document.getElementById("btn-delete");
saveKoderBtn.addEventListener("click",saveKoder)

