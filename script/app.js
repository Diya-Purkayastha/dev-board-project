// const no = document.getElementById("total-task-no").innerText;

// const no1= document.getElementById("task-assigned-no").innerText;
// console.log( no1)

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


})