var kodersArray = [
]
const saveKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderLastName = document.getElementById("koder-last-name").value;
    let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
    let koderAssistances = document.getElementById("koder-assistances").value;
    
    let koderObject = {koderName,koderLastName,koderDeliveredPractices,koderAssistances}
    
    console.log(koderObject)
    kodersArray.push(koderObject);
    printKoders();
    printCards();
}
const printKoders = () => {
    document.getElementById("koders-wrapper").innerHTML = ""
    kodersArray.forEach((koder,index) => {
        let koderFullName = koder.koderName + " " + koder.koderLastName;
        let koderAssistances = koder.koderAssistances;
        let koderDeliveredPractices = koder.koderDeliveredPractices;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;  
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete'>Eliminar</div>
                </td>
            </tr>
            `
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
    })
}

function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
}

var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click",saveKoder)

/*var deleteKoderBtn = document.getElementById("btn-delete");
deleteKoderBtn.addEventListener("click",deleteKoder);
*/

const printCards = () => {
    document.getElementById("koders-card").innerHTML = ""
    kodersArray.forEach((koder,index)=>{
        let koderCardFullName = koder.koderName + " " + koder.koderLastName;
        let koderCardDeliveredPractices = `Practicas entregadas: ${koder.koderDeliveredPractices}`;
        let koderCardAssistances = `Practicas entregadas: ${koder.koderAssistances}`;
        let currentCardContent = document.getElementById("koders-card").innerHTML; 
        let newCardContent = `
            <div class="col-12 col-md-3">
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title">${koderCardFullName}</h5>
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${koderCardDeliveredPractices}</li>
                        <li class="list-group-item">${koderCardAssistances}</li>
                    </ul>
                    <div class="btn btn-danger mt-3 btn-block">Eliminar</div>
                    </div>
                </div>
            </div>                          
        ` 
        document.getElementById("koders-card").innerHTML= currentCardContent + newCardContent;

    })
}