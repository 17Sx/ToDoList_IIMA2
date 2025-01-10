import getUser from '../supabase/select.js';
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const user = await getUser(email, password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user.id));
        console.log(user);
    }
    else {
        alert('Error logging in');
    }
});
