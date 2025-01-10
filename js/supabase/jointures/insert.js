import supabaseClient from "./../init.js";
import user from "./../login.js";
const getUserById = async (id) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const { data, error } = await supabaseClient
        .from("user")
        .select("id")
        .eq("id", id)
        .limit(1);
    if (error) {
        console.error(error);
        return false;
    }
    console.log(data);
    return data;
};
const insertTask = async (title, description) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const dbUser = JSON.parse(localStorage.getItem('user'));
    console.log(dbUser);
    if (!dbUser || dbUser.length === 0) {
        return false;
    }
    const { data, error } = await supabaseClient.from("task").insert({
        title: title,
        description: description,
        state: false,
        user: dbUser,
    });
    if (error) {
        console.error(error);
        return false;
    }
    console.log(data);
    return true;
};
export default insertTask;
