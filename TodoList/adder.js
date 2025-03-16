const BASE_URL = "http://localhost:3000/posts";

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
            id: `${taskList.children.length}`,
            task: taskString,

        })

    }).then(res => res.json());
}

function removeElement()
{
    let taskList = document.getElementById("taskList");
    let search = document.getElementById("task").value;

    for(let i = 0; i < taskList.children.length; i++)
    {

        if(taskList.children[i].innerHTML == search)
        {

            console.log("found on index: " + i);
            taskList.removeChild(taskList.children[i]);
            console.log(JSON.stringify({id: i+1, task: search}));


            fetch(BASE_URL + `/${i + 1}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(res => res.json())




        }
    }

    updateId();
}

function loadFromJson()
{
    let taskList = document.getElementById("taskList");
    fetch(BASE_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {

                const li = document.createElement("li");
                li.textContent = element.task;
                taskList.appendChild(li);
            });
        });
}


function clearAll()
{
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

function updateId()
{

    fetch(BASE_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {
        data.forEach(element => {
            fetch(BASE_URL + `/${element.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
        })

        data.forEach(element => {
            element.id --;
        });

        data.forEach(element => {
            fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: `${element.id}`,
                    task: element.task,
                })
            }).then(res => res.json())
    });


})}

