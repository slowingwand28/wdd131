// events.js
let tasks = [];

function renderTasks(tasks) {
    // get the list element from the DOM
    // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function taskTemplate(task) {
    return `
        <li ${task.completed ? 'class="strike"' : ""}>
            <p>${task.detail}</p>
            <div>
                <span data-function="delete">❎</span>
                <span data-function="complete">✅</span>
            </div>
        </li>`
}

function newTask() {
    // get the value entered into the #todo input
    // add it to our arrays tasks
    // render out the list
    const task = document.querySelector("#todo").value;
    tasks.push({detail: task, completed: false});
    renderTasks(tasks);
}

function manageTasks(event) {
    // did they click the delete or complete icon?
    console.log(event.target);
    // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
    const parent = event.target.closest("li");
    // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
    // use that in a couple of if statements to decide whether to run removeTask or completeTask
    if (event.target.getAttribute('data-function') === "delete") {
        parent.remove();
    }
    if (event.target.getAttribute('data-function') === "complete") {
        parent.classList.toggle('strike');
    }
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.querySelector("#submitTask").addEventListener("click", newTask);

document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);