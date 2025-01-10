import insertTask from "../supabase/jointures/insert.js";

const userId = JSON.parse(localStorage.getItem('user')!);
console.log(userId);

const form = document.querySelector('form')!;
form.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const task = formData.get('title') as string;
    const description = formData.get('description') as string;
    console.log(userId);
    const taskCreated = await insertTask(task, description);

});