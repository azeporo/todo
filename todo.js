const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#tasks');

//CHECK LOCAL STORAGE
if (!localStorage.getItem('finalTaskList')){
    localStrgTasks = []
}
else{
    localStrgTasks = JSON.parse(localStorage.getItem("finalTaskList"))
}

// DISPLAY ALL TASKS
for (let t in localStrgTasks){
    let newTask = document.createElement('li');
    newTask.innerHTML = localStrgTasks[t];
    taskList.appendChild(newTask);
}

//ADD A TASK
form.addEventListener('submit', function(e){
    e.preventDefault();

    const newTask = document.createElement('li'); 
    newTask.innerHTML = `<button id="trash" type="button" class="btn btn-outline-danger btn-sm justify-content-md-end ">Delete</button>${taskInput.value}`;
    taskList.appendChild(newTask);
    localStrgTasks.push(newTask.innerHTML)

    taskInput.value = "";
    let ourTasks = JSON.stringify(localStrgTasks);
    localStorage.setItem('finalTaskList', ourTasks);
})

//DELETE A TASK OR MARK A TASK COMPLETE
taskList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        let content = e.target.parentElement.innerHTML
        let taskIndex = localStrgTasks.indexOf(content)
        localStrgTasks.splice(taskIndex,1)

        let ourTasks = JSON.stringify(localStrgTasks);
        localStorage.setItem('finalTaskList', ourTasks);
        e.target.parentElement.remove();
    }
    if(e.target.tagName ==='LI'){        
        let complete = e.target 
        complete.classList.toggle('completed');
    }
})


