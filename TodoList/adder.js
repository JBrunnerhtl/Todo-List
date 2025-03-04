const BASE_URL = "http://localhost:3000/TODO";

function add()
{
    let taskString = document.getElementById("task").value;
    let taskList = document.getElementById("taskList");
    taskList.innerHTML += "<li>" + taskString + "</li>";
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            task: taskString
        })
    })
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
            fetch(BASE_URL, {
                Method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    task: search

                })

            }).then(r =>console.log(r));

         }
    }
    
}

function clearAll()
{
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}