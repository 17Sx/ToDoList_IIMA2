import getTasksByUser from "../supabase/jointures/select.js";
const afficherTasks = async () => {
    let data = await getTasksByUser();
    data[0].task.forEach((task) => {
        console.log(task);
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        `;
        if (task.state) {
            taskElement.classList.add('done');
        }
        else {
            taskElement.classList.add('undone');
        }
        document.body.appendChild(taskElement);
    });
};
const a = afficherTasks();
