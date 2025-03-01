
// date
const currentDate = new Date().toDateString();
const dateDiv = document.getElementById("current-date");
const p = document.createElement("p");
p.innerText = currentDate;
dateDiv.appendChild(p);

//time
function getCurrentTime(){ 
     return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}


//removing elements 
document.getElementById("history-btn").addEventListener("click" , function (event){
    document.getElementById("history").innerHTML=" ";
  

})

//bg color change
function randomColor(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
let bgColor = document.getElementById("bg-color");
bgColor.addEventListener("click" , function(){
    document.body.style.backgroundColor = randomColor();
})

//converting function 
function getConvertedById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

const button = document.querySelectorAll(".complete-btn");
for(let i = 0; i < button.length; i++){
    const btn = button[i];
    

    btn.addEventListener("click" , function(event){
        event.preventDefault();
            window.alert("Board updated Successfully")
          
        let taskAssignedNo = getConvertedById("task-assigned-no");
        const totalTaskNo = getConvertedById("total-task-no");
       
        document.getElementById("task-assigned-no").innerText = taskAssignedNo - 1;
        document.getElementById("total-task-no").innerText = totalTaskNo + 1 ;

        //title accessing 
        const card = event.target.closest(".card"); 
        if (card) {
            const title = card.querySelector(".title-card").innerText;       
            //appending p tag
            const historyDiv = document.getElementById("history");
            const p = document.createElement("p");
            p.classList.add("bg-white" , "p-2", "rounded-lg");
            let time = getCurrentTime();
            p.innerHTML = `<h1>You have completed the task ${title} at ${time}</h1>`;
            historyDiv.appendChild(p);
        }
        
        btn.disabled = true;

        if(taskAssignedNo === 1){
            alert("Congratulations!! You have completed all the current task .")
        }
        
    })

  

}



    

