const inputFrame = document.getElementById("inputFrame");
const listBtn = document.getElementById("listBtn");
const mainFrame = document.getElementById("mainFrame");
const taskListMain = document.getElementById("taskListMain")


function newTask(){
    const summary = document.getElementById('summary')
    taskContainer()
    
    inputFrame.value = ""
    
    if( summary === false){
        summary()
    }else{
        return
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


}
function summary(){
    let summary = document.createElement('div')

    summary.textContent = "tescik!"
    summary.id = 'summary'
    document.body.appendChild(summary);
}
inputFrame.addEventListener("change", newTask)