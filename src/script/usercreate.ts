import createUser from '../supabase/insert.js';

const form = document.querySelector('form')!;
form.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const user = await createUser(firstName, lastName, email, password);
    if (user) {
        console.log(user);
    } else {
        alert('Error creating user');
    }
});