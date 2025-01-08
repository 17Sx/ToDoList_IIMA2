export function signup(name, email, password) {
    // Récupérer les utilisateurs existants
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Vérifier si l'email existe déjà
    if (users.find(user => user.email === email)) {
        throw new Error('Compte déjà existant');
    }
    // Créer un nouvel utilisateur avec un ID unique
    const newUser = { id: crypto.randomUUID(), email, password: hashPassword(password), name };
    users.push(newUser);
    // Sauvegarder les utilisateurs dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}
function hashPassword(password) {
    return btoa(password); //ça marcehe pas 
}
