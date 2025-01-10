import insertTask from "../supabase/jointures/insert.js";
const userId = JSON.parse(localStorage.getItem('user'));
console.log(userId);
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = formData.get('title');
    const description = formData.get('description');
    console.log(userId);
    const taskCreated = await insertTask(task, description);
    if (taskCreated) {
        window.location.reload();
    }
});
