import { saveUser, getUser } from "./types.js";
import { getTasksByUser } from "./task/taskService.js";
function generateId() {
    return '_' + Math.random().toString(36).substring(2, 11);
}
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    try {
        const user = { id: generateId(), name, email, password };
        saveUser(user);
        alert('good sgnup');
    }
    catch (error) {
        alert(error.message);
    }
}
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        const user = getUser();
        if (user && user.email === email && user.password === password) {
            alert('Connexion réussie.');
            showlogin();
            showTaskForm();
        }
        else {
            throw new Error('pas bon le mot de passe ou l\'email');
        }
    }
    catch (error) {
        alert(error.message);
    }
}
function showlogin() {
    const user = getUser();
    if (user) {
        const header = document.createElement('h1');
        header.textContent = user.name;
        document.body.appendChild(header);
    }
}
function showTaskForm() {
    const taskForm = document.getElementById('task-form');
    if (taskForm) {
        taskForm.style.display = 'block';
    }
}
function showTask() {
    const user = getUser();
    if (user) {
        const tasks = getTasksByUser(user.id);
        const taskList = document.getElementById('task-list');
        if (taskList) {
            tasks.forEach(task => {
                const taskElement = document.createElement('li');
                taskElement.textContent = task.title;
                taskList.appendChild(taskElement);
            });
        }
    }
}
document.getElementById('signup-form')?.addEventListener('submit', handleSignup);
document.getElementById('login-form')?.addEventListener('submit', handleLogin);