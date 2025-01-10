import createUser from '../supabase/insert.js';
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const user = await createUser(firstName, lastName, email, password);
    if (user) {
        console.log(user);
    }
    else {
        alert('Error creating user');
    }
});

