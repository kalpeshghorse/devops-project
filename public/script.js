async function fetchTasks() {
    const res = await fetch('/tasks');
    const data = await res.json();

    const list = document.getElementById('taskList');
    list.innerHTML = '';

    data.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="delete" onclick="deleteTask(${index})">X</button>`;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value;

    if (!task) return;

    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });

    input.value = '';
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}

fetchTasks();
