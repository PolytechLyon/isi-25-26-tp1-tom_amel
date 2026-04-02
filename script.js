let tasks = [];

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.onchange = () => {
            task.done = checkbox.checked;
            saveTasks();
            renderTasks();
        };

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.done) {
            span.style.textDecoration = "line-through";
        }

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => openEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("new-todo-item-title");
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
}


function openEdit(index) {
    editIndex = index;
    document.getElementById("new-item").hidden = true;
    document.getElementById("edit-item").hidden = false;
    document.getElementById("edit-todo-item-title").value = tasks[index].text;
}

function confirmEdit() {
    const input = document.getElementById("edit-todo-item-title");
    const text = input.value.trim();
    if (text === "") return;
    tasks[editIndex].text = text;
    closeEdit();
    saveTasks();
    renderTasks();
}

function cancelEdit() {
    closeEdit();
}

function closeEdit() {
    editIndex = null;
    document.getElementById("new-item").hidden = false;
    document.getElementById("edit-item").hidden = true;
}


window.onload = () => {
    loadTasks();
    renderTasks();

    document.getElementById("new-todo-item-add").onclick = addTask;
    document.getElementById("edit-todo-item-confirm").onclick = confirmEdit;
    document.getElementById("edit-todo-item-cancel").onclick = cancelEdit;
};