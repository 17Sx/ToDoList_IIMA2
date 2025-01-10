import getTasksByUser from "../supabase/jointures/select.js";
import deleteTask from "../supabase/jointures/delete.js";
import getDone from "../supabase/jointures/done.js";


const afficherTasks = async () => {
    let data = await getTasksByUser();
    data[0].task.forEach((task: any) => {
        console.log(task);
        const list = document.getElementById('taskList');
        const taskElement = document.createElement('li');
        const button = document.createElement('button');
        const doneButton = document.createElement('button');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            
        `;
        if (task.state) {
            taskElement.classList.add('done');
            taskElement.innerHTML += `<div class="dones"><span class="done-circle"></span>  <p> Done</p></div>`;
        }
        else {
            button.type='submit';
            button.id=task.id;
            button.classList.add('poubelle');
            button.innerHTML = 'Delete';
            button.addEventListener('click', async () => {
                await deleteTask(task.id);
                button.parentElement?.remove();
            });
            taskElement.appendChild(button);
            doneButton.type='submit';
            doneButton.id=task.id;
            doneButton.classList.add('DoneButton');
            doneButton.innerHTML = 'Done';
            doneButton.addEventListener('click', async () => {
                await getDone(task.id);
                location.reload();
            });
            taskElement.appendChild(doneButton);
            taskElement.classList.add('undone');
            const undoneDiv = document.createElement('div');
            undoneDiv.classList.add('undones');
            undoneDiv.innerHTML = `<span class="undone-circle"></span>  <p> Undone</p>`;
            taskElement.appendChild(undoneDiv);
        }
        if(list){
            list.appendChild(taskElement);
        }
    });
        
};
const a = afficherTasks();