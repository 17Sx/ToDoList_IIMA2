import supabase from "./init.js";
const register = async () => {
    const { data, error } = await supabase.auth.signUp({
        email: "test.test@gmail.com",
        password: "testtest",
    });
    if (error) {
        console.error(error);
        return false;
    }
    console.log(data);
    return data;
};
const user = register();
