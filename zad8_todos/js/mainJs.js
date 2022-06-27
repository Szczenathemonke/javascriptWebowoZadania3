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

    let taskTag = inputFrame.value

        
    taskContent.classList = "active"
    delBtn.classList = "deleteBtn";
    checker.type = "checkbox";
    checker.id = taskTag;
    taskContent.htmlFor = taskTag;
    taskContent.textContent = taskTag;
    newTask.appendChild(checker);
    newTask.appendChild(taskContent);
    newTask.appendChild(delBtn);
    taskListMain.appendChild(newTask);

    // checker.addEventListener("change", checked)
    checker.addEventListener("change", ()=>{
        let labelTag = document.querySelector(`label[for="${taskTag}"`)

        if (labelTag.classList.contains("completed")){
            labelTag.classList = "active"
        }else{
            labelTag.classList = "completed"
        }    
        
    })
    newTask.addEventListener("mouseenter", showBtn)
    newTask.addEventListener("mouseleave", hideBtn)
    

    delBtn.addEventListener("click", deleteTask)   

}
function checkAllTasks(){

    let taskCheckbox = document.querySelectorAll("input[type=checkbox]")
    

    for (task of taskCheckbox){
        task.checked = true
        taskStatusChanger(task.id)
    }       
    

    listBtn.removeEventListener("click", checkAllTasks)
    listBtn.addEventListener("click", uncheckAllTasks)
}
function uncheckAllTasks(){
    let taskCheckbox = document.querySelectorAll("input[type=checkbox]")
    

    for (task of taskCheckbox){
        task.checked = false
        taskStatusChanger(task.id)
    }       
    

    listBtn.removeEventListener("click", uncheckAllTasks)
    listBtn.addEventListener("click", checkAllTasks)
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


inputFrame.addEventListener("change", newTask)
listBtn.addEventListener("click", checkAllTasks)

function taskStatusChanger(task){
    // let taskName = document.getElementByID(`"${task}"`)
    let label = document.querySelector(`label[for=${task}]`)

    if (label.classList.contains("completed")){
        label.classList = "active"
    }else{
        label.classList = "completed"
    }
}