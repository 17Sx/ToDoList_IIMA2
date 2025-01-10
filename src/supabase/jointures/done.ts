import supabaseClient from "../init.js";
import user from "../login.js";
 
const getDone = async (id: string) => {

  const { error } = await supabaseClient
    .from("task")
    .update({ state: true })
    .eq("id", id)

    
  if (error) {
    console.error(error);
    return false;
  } 
  console.log("done");
  return true;
};
export default getDone;