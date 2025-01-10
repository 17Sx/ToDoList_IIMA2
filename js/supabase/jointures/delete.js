import supabaseClient from "../init.js";
import user from "../login.js";
const deleteTask = async (id) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const response = await supabaseClient.from("task")
        .delete()
        .eq("id", id);
    return response;
};
export default deleteTask;
