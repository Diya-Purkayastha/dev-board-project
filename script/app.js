//converting function 
function getConvertedById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

let button = document.getElementById("card-btn");
button.addEventListener("click" , function(event){
    event.preventDefault();
        window.alert("board uploaded successfully")
    const taskAssignedNo = getConvertedById("task-assigned-no");
    const totalTaskNo = getConvertedById("total-task-no");
   
    document.getElementById("task-assigned-no").innerText = taskAssignedNo - 1;
    document.getElementById("total-task-no").innerText = totalTaskNo +1 ;
    
    button.disabled = true;

    const cardTitle = document.getElementById("card-title").innerText;
    console.log(cardTitle);
    const historyDiv = document.getElementById("history");
    const p = document.createElement("p");
    p.innerHTML = `
     <h1>You have Complete The Task ${cardTitle} at 12:48:15 PM</h1>
    `
    historyDiv.appendChild(p);

})
    //removing elements 
    document.getElementById("history-btn").addEventListener("click" , function (event){
        const historyDiv = document.getElementById("history");
        historyDiv.remove();

    })

