// modele des tasks

import { Task } from '../types'

export function getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

