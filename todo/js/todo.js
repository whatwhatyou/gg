var tasks = [];

function addTask(e){
    e.preventDefault();

    var inputElem = document.querySelector("#taskInput");
    
    if(!inputElem.checkValidity())
        return;

    tasks.push({task: inputElem.value, completed: false});
    inputElem.value = "";
    updateList();
}

function deleteTask(index){
    tasks.splice(index, 1);
    updateList();
}
function completedTask(index){
    tasks[index].completed = !tasks[index].completed;
    updateList();
}

function init(){
    document.querySelector(".form").addEventListener("submit",addTask);
    updateList();
}

function updateList(){

    var listElem = document.getElementById("list");
    var html = "";

    for(var t in tasks) {
        html += "<div class='task' data-task-index='" + t + "'><div class='text'>" + tasks[t].task + "</div>" + "<div class='buttons'><button class='btn-delete' type='button'>delete</button></div></div>"
    }

    listElem.innerHTML = html;

    listElem.querySelectorAll(".btn-delete").forEach((btn, index) =>{
        btn.addEventListener("click", function(){
            deleteTask(index);
        });
    });
    
    listElem.querySelectorAll(".task").forEach((btn, index) =>{
        btn.addEventListener("click", function(){
            completedTask(index);
        });
    });
    
    var summ = tasks.length;
    var summCompleted = 0;
    for (var i=0; i<tasks.length; i++){
        if(tasks[i].completed == true){
            summCompleted += 1;
            
            var crtCompl = document.getElementsByClassName("task")[i];
            crtCompl.className = 'task checked';
        }
    
    }
  document.getElementById("summ").innerHTML = "number of tasks: " + summ + "; " + "completed tasks: " + summCompleted; 
}