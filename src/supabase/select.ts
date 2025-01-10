import { hashPassword } from "./hash.js";
import supabaseClient from "./init.js";
import user from "./login.js";

const getUsers = async () => {
    
  const userLogged = await user;
  if (!userLogged) {
    return false;
  }
 
  const { data, error } = await supabaseClient.from("user").select("*");
 
  if (error) {
    console.error(error);
    return error.message;
  }
 
  console.log(data);
  return data;
};

const getUser = async (email:string, password:string) => {
  const { data, error } = await supabaseClient.from("user").select("*").eq("email", email);
  if (error) {
    console.error(error);
    return error.message;
  }
  
  if (data.length === 0) {
    return false;
  }
  console.log(await hashPassword(password));
  if (data[0].password === await hashPassword(password)) {
    console.log(data[0]);
    return data[0];
  }
};
 
export default getUser;