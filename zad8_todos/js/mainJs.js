const inputFrame = document.getElementById("inputFrame");
const listBtn = document.getElementById("listBtn");
const mainFrame = document.getElementById("mainFrame");
const taskListMain = document.getElementById("taskListMain")
let activeTasks = []
let completeTasks = []


function newTask(){
    
    taskContainer()
    
    inputFrame.value = ""
    
    if( document.getElementById('summary') === null){
        summary()
    }
    
      
}
function taskContainer(){
    
    let newTask = document.createElement("form");
    let checker = document.createElement('input');
    let taskContent = document.createElement('label');    
    let delBtn = document.createElement('button');

        
    taskContent.classList = "active"
    delBtn.classList = "deleteBtn";
    checker.type = "checkbox";
    taskContent.textContent = inputFrame.value;
    newTask.appendChild(checker);
    newTask.appendChild(taskContent);
    newTask.appendChild(delBtn);
    taskListMain.appendChild(newTask);

    checker.addEventListener("change", checked)
    newTask.addEventListener("mouseenter", showBtn)
    newTask.addEventListener("mouseleave", hideBtn)
    

    delBtn.addEventListener("click", deleteTask)   

}
function summary(){
    let summary = document.createElement('section')

    summary.textContent = "tescik!"
    summary.classList = "container summary"
    summary.id = 'summary'
    document.body.appendChild(summary);
}
function showBtn(){
    let btn = document.querySelector('.deleteBtn');    
    btn.classList = "showBtn"
}
function hideBtn(){
    let btn = document.querySelector('.showBtn');    
    btn.classList = "deleteBtn"
}
function deleteTask(){    
    let taskToBeDeleted = document.querySelector("form")

    taskListMain.removeChild(taskToBeDeleted)  
}
function checked(){
    let checker = document.querySelector("input")
    let label = document.querySelector("label")

    
    if (label.classList.contains("completed")){
        label.classList = "active"
    }else{
        label.classList = "completed"
    }

    // tutaj 

}
inputFrame.addEventListener("change", newTask)

