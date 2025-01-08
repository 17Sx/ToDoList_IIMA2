import { getTasks, saveTasks } from "./taskmodel.js";  
import { Task } from "../types";


export function createTask(title: string, description: string, deadline: Date): Task {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) throw new Error('Utilisateur pas co');

    const tasks = getTasks();
    const newTask: Task = {
        id: crypto.randomUUID(),
        userId: currentUser.id,
        title,
        description,
        status: 'IN_PROGRESS',
        deadline,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
}

export function completeTask(taskId: string): void {
    const tasks = getTasks();
    const task = tasks.find((task: Task) => task.id === taskId);
    if (!task) throw new Error('Task pas trouver');
    task.status = 'DONE';
        saveTasks(tasks);
    }

    export function deleteTask(taskId: string): void {
        const tasks = getTasks();
        const taskIndex = tasks.findIndex((t: Task) => t.id === taskId && t.status !== 'DONE');
        if (taskIndex === -1) throw new Error('Erreurr');
        tasks.splice(taskIndex, 1);
        saveTasks(tasks);
    }



export function getTasksByUser(userId: string): Task[] {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks.filter(task => task.userId === userId);
}


