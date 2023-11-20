const textInput = document.getElementById("text-input");
const taskCont = document.getElementById("task-cont");

function addTask(){
    if (textInput.value === '') {
        alert("Please enter a valid task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = textInput.value;
        taskCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textInput.value = '';
    storeTask();
}

taskCont.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        storeTask();
    } else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        storeTask();
    }
});

function storeTask() {
    localStorage.setItem("task", taskCont.innerHTML);
}

function showList() {
    taskCont.innerHTML = localStorage.getItem("task");
}

showList();