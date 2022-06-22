const inputFrame = document.getElementById("inputFrame");
const listBtn = document.getElementById("listBtn");
const mainFrame = document.getElementById("mainFrame");
const taskListMain = document.getElementById("taskListMain")


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

    newTask.classList = "container";
    checker.classList = "dropDown dropdownBtn"
    taskContent.classList = "dropDown inputFrame"
    checker.type = "checkbox";
    taskContent.textContent = inputFrame.value;
    newTask.appendChild(checker);
    newTask.appendChild(taskContent);
    taskListMain.appendChild(newTask);

    checker.addEventListener("change", checked)


}
function summary(){
    let summary = document.createElement('section')

    summary.textContent = "tescik!"
    summary.classList = "container summary"
    summary.id = 'summary'
    document.body.appendChild(summary);
}

function checked(){
    let checker = document.querySelector("input")
    let task = document.querySelector("form")

    if(checker.checked){
        task.classList.add("taskDone")
    }else{
        task.classList.remove("taskDone")
    }

    // tutaj 

}
inputFrame.addEventListener("change", newTask)
