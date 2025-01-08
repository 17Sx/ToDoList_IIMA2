import { User } from "../types";

export function signup(name: string, email: string, password: string): boolean {
    // Récupérer les utilisateurs existants
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // Vérifier si l'email existe déjà
    if (users.find(user => user.email === email)) {
        throw new Error('Compte déjà existant');
    }

    // Créer un nouvel utilisateur avec un ID unique
    const newUser: User = { id: crypto.randomUUID(), email, password: hashPassword(password), name };
    users.push(newUser);

    // Sauvegarder les utilisateurs dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}


function hashPassword(password: string): string {
    return btoa(password); //ça marcehe pas 
}
