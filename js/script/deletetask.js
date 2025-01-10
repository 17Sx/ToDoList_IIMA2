import deleteTask from '../supabase/jointures/delete.js';
const ;
delete ;
async (id) => {
    console.log(id);
    const poubelle = await deleteTask(id);
    console.log(poubelle);
};
export default delete ;
