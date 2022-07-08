const inputFrame = document.getElementById("inputFrame");
const listBtn = document.getElementById("listBtn");
const mainFrame = document.getElementById("mainFrame");
const mainForm = document.getElementById("mainForm");
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
    newTask.classList.add("active")

    taskContent.classList.add("active")

    delBtn.classList.add("deleteBtn")
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
            labelTag.classList.remove("completed")
            newTask.classList.remove("completed")
            labelTag.classList.add("active")
            newTask.classList.add("active")
            
        }else{
            labelTag.classList.remove("active")
            newTask.classList.remove("active")
            labelTag.classList.add("completed")
            newTask.classList.add("completed")
        }
        activeTaskCounter()    
        
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


    if (taskName.checked){
        label.classList.add("completed")
        label.classList.remove("active")
        taskForm.classList ="completed"
    }else{
        label.classList.remove("completed")
        label.classList.add("active")
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

    
    summary.classList.add("summary")
    summary.classList.add("container")
    summary.id = 'summary'
    
    filter.classList.add("filterBtnContainer")

    allBtn.classList.add("filterBtn")
    allBtn.id = "allTaskList"
    allBtn.textContent = "All"    
    
    activeBtn.classList.add("filterBtn")
    activeBtn.id = "activeTaskList"
    activeBtn.textContent = "Active"
    
    completedBtn.classList.add("filterBtn")
    completedBtn.id ="completedTaskList"
    completedBtn.textContent = "Completed"

    activeTaskCounter.id = "activeTaskCounter"

    clearBtn.textContent = "Clear Completed"
    clearBtn.classList.add("filterBtn")
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

mainForm.addEventListener("submit", newTask)
listBtn.addEventListener("click", checkAllTasks)

