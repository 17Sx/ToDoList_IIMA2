import getUser  from '../supabase/select.js';

const form = document.querySelector('form')!;
form.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user = await getUser(email, password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user.id));
        console.log(user);
    } else {
        alert('Error logging in');
    }
});