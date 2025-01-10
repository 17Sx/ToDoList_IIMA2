
import supabaseClient from "./init.js";
import user from "./login.js";
import { hashPassword } from "./hash.js";
 
const createUser = async (firstname:string, lastname:string, email:string, password:string) => {

  const userLogged = await user;
  if (!userLogged) {
    return false;
  }

  const pwd = await hashPassword(password);
  const { data, error } = await supabaseClient.from("user").insert({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: pwd,
  }).select();

 
  if (error) {
    console.error(error);
    return false;
  }

  console.log(data);
  return true;
};
 
export default createUser;

