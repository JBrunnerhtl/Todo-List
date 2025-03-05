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
            id: taskList.children.length,
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
            fetch(BASE_URL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    id: i+1,
                    task: search,

                })
            }).then(res => res.json())
        }
    }

}

function clearAll()
{
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}


