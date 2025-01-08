import { User } from "../types";

export function login(name: string, email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Trouver l'utilisateur en fonction de l'email, du mot de passe et du nom
    const user = users.find(user => user.email === email && user.password === password && user.name === name);

    if (!user) {
        return false; // L'utilisateur n'a pas été trouvé
    }

    // Enregistrer l'utilisateur actuel dans le localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
}
