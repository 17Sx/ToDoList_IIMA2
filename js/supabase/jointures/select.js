import supabaseClient from "./../init.js";
const getTasksByUser = async () => {
    const id = JSON.parse(localStorage.getItem("user"));
    if (!id) {
        return false;
    }
    const { data, error } = await supabaseClient.from("user").select("*, task(*)").eq("id", id);
    if (error) {
        console.error(error);
        return false;
    }
    console.log(data);
    return data;
};
export default getTasksByUser;
