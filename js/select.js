import { hashPassword } from "./hash.js";
import supabase from "./init.js";
import user from "./login.js";
const getUsers = async () => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
        console.error(error);
        return error.message;
    }
    console.log(data);
    return data;
};
const getUser = async (email, password) => {
    const { data, error } = await supabase.from("user").select("*").eq("email", email);
    if (error) {
        console.error(error);
        return error.message;
    }
    if (data.length === 0) {
        return false;
    }
    if (data[0].password === hashPassword(password)) {
        return data[0];
    }
};
export default getUser;
