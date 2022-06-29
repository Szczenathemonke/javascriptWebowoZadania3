const inputFrame = document.getElementById("inputFrame");
const listBtn = document.getElementById("listBtn");
const mainFrame = document.getElementById("mainFrame");
const taskListMain = document.getElementById("taskListMain")
let activeTasks = []
let completeTasks = []
let taskCount = 0


function newTask(){
    
    taskContainer()
    taskCount += 1
    

    inputFrame.value = ""
    
    if( document.getElementById('summary') === null){
        summary()
    }
    
    activeTaskCounter()  
}
function taskContainer(){
    
    let newTask = document.createElement("form");
    let checker = document.createElement('input');
    let taskContent = document.createElement('label');    
    let delBtn = document.createElement('button');

    let taskTag = `${taskCount}_${inputFrame.value}`

    newTask.name = taskTag
    newTask.classList = "active"

    taskContent.classList = "active" 

    delBtn.classList = "deleteBtn";
    delBtn.id =`delete_${taskTag}`;

    checker.type = "checkbox";
    checker.id = taskTag;

    
    taskContent.textContent = inputFrame.value;

    newTask.appendChild(checker);
    newTask.appendChild(taskContent);
    newTask.appendChild(delBtn);
    taskListMain.appendChild(newTask);

    
    checker.addEventListener("change", ()=>{
        let taskForm = document.querySelector(`form[name="${taskTag}"]`)
        let labelTag = taskForm.querySelector("label")
                

        if (labelTag.classList.contains("completed")){
            labelTag.classList = "active"
            newTask.classList = "active"
            
        }else{
            labelTag.classList = "completed"
            newTask.classList ="completed"
        }
        activeTaskCounter()    
        
    })
    newTask.addEventListener("mouseenter", ()=>{
    let btn = document.getElementById(`delete_${taskTag}`)    
    btn.classList = "showBtn"
    })   
    newTask.addEventListener("mouseleave", ()=>{
        let btn = document.getElementById(`delete_${taskTag}`)    
        btn.classList = "deleteBtn"
    })   

    delBtn.addEventListener("click", ()=>{
        let taskToBeDeleted = document.querySelector(`form[name="${taskTag}"`)
        
        taskListMain.removeChild(taskToBeDeleted)
        activeTaskCounter()
    })
       

}
function checkAllTasks(){

    let taskCheckbox = document.querySelectorAll("input[type=checkbox]")
    

    for (task of taskCheckbox){
        task.checked = true
        taskStatusChanger(task.id)
    }       
    activeTaskCounter()

    listBtn.removeEventListener("click", checkAllTasks)
    listBtn.addEventListener("click", uncheckAllTasks)
}
function uncheckAllTasks(){
    let taskCheckbox = document.querySelectorAll("input[type=checkbox]")
    

    for (task of taskCheckbox){
        task.checked = false        
        taskStatusChanger(task.id)
    }       
    activeTaskCounter()

    listBtn.removeEventListener("click", uncheckAllTasks)
    listBtn.addEventListener("click", checkAllTasks)
}
function taskStatusChanger(taskId){
    let taskName = document.getElementById(`${taskId}`)
    
    let taskForm = document.querySelector(`form[name="${taskId}"]`)
    let label = taskForm.querySelector("label")


    if (taskName.checked == true){
        label.classList = "completed"
        taskForm.classList ="completed"
    }else{
        label.classList = "active"
        taskForm.classList ="active"
    }
}
function showAll(){
    let tasks = document.querySelectorAll("form")

    for (task of tasks){
        task.style.display = "flex"
    }
    
}
function showActive(){
    let tasks = document.querySelectorAll("form")

    for (task of tasks){
        if(task.classList.contains("active")){
            task.style.display = "flex"
        }else{
            task.style.display = "none"
        }
    }    
}
function showCompleted(){
    let tasks = document.querySelectorAll("form")

    for (task of tasks){
        if(task.classList.contains("completed")){
            task.style.display = "flex"
        }else{
            task.style.display = "none"
        }
    }       
}

function summary(){
    let summary = document.createElement('section')
    let allBtn = document.createElement("button")
    let activeBtn = document.createElement("button")
    let completedBtn = document.createElement("button")
    let activeTaskCounter = document.createElement("span")
    let filter = document.createElement("div")
    let clearBtn = document.createElement("button")

    
    summary.classList = "container summary"
    summary.id = 'summary'
    
    filter.classList = "filterBtnContainer"

    allBtn.classList = "filterBtn"
    allBtn.id = "allTaskList"
    allBtn.textContent = "show all"    
    
    activeBtn.classList = "filterBtn"
    activeBtn.id = "activeTaskList"
    activeBtn.textContent = "show Active"
    
    completedBtn.classList = "filterBtn"
    completedBtn.id ="completedTaskList"
    completedBtn.textContent = "show Completed"

    activeTaskCounter.id = "activeTaskCounter"

    clearBtn.textContent = "Clear Completed"
    clearBtn.classList = "filterBtn"
    clearBtn.id = "clearBtn"

    filter.appendChild(allBtn);
    filter.appendChild(activeBtn);
    filter.appendChild(completedBtn);
    
    summary.appendChild(activeTaskCounter);
    summary.appendChild(filter);
    summary.appendChild(clearBtn);
    
    document.body.appendChild(summary);

    allBtn.addEventListener("click", showAll)
    activeBtn.addEventListener("click", showActive)
    completedBtn.addEventListener("click", showCompleted)

    clearBtn.addEventListener("click", clearCompletedTasks)

    
}
function activeTaskCounter(){
    let counter = document.getElementById("activeTaskCounter")
    let activeTasks = document.querySelectorAll("form.active")

    if (activeTasks.length == 1){
        counter.textContent = `${activeTasks.length} item left`
    }else{
        counter.textContent = `${activeTasks.length} items left`
    }


}
function clearCompletedTasks(){    
    let completedTasks = document.querySelectorAll("form.completed")

    for (task of completedTasks){
        taskListMain.removeChild(task)
    }  
}

inputFrame.addEventListener("change", newTask)
listBtn.addEventListener("click", checkAllTasks)

