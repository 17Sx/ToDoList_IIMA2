export interface User {
    id: string;
    name: string;
    email: string;
    password: string;  
}

export function saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export interface Task{
    id: string;
    title: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
    userId: string;
    deadline: Date;
}

