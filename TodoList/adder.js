function add()
{
    let taskString = document.getElementById("task").value;
    let taskList = document.getElementById("taskList");
    taskList.innerHTML += "<li>" + taskString + "</li>";
}

function removeElement()
{
    let taskList = document.getElementById("taskList");
    let search = document.getElementById("task").value;

    for(let i = 0; i < taskList.children.length; i++)
    {

        if(taskList.children[i].innerHTML == search)
        {

            taskList.removeChild(taskList.children[i]);
        }
    }
    
}

function clearAll()
{
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}