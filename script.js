const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="removeTask(this)">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = '';
    }
});

function removeTask(button) {
    button.parentElement.remove();
}
