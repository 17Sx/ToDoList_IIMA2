export function login(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Trouver l'utilisateur en fonction de l'email, du mot de passe et du nom
    const user = users.find(user => user.email === email && user.password === password && user.name === name);
    if (!user) {
        return false; // L'utilisateur n'a pas été trouvé
    }
    // Enregistrer l'utilisateur actuel dans le localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
}
