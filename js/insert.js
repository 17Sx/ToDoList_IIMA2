import supabase from "./init.js";
import user from "./login.js";
import { hashPassword } from "./hash.js";
const createUser = async (firstname, lastname, email, password) => {
    const userLogged = await user;
    if (!userLogged) {
        return false;
    }
    const pwd = await hashPassword("plainPassword");
    const { error } = await supabase.from("user").insert({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashPassword(pwd),
    });
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
export default createUser;
