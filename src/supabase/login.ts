
import supabaseClient from "./init.js";
 
const signIn = async () => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: "noa.obringer@gmail.com",
    password: "uI1lV9OJpFQoKATV",

  });
 
  if (error) {
    console.error(error);
    return false;
  }
 
  return data;
};
 
const user = signIn();

export default user;