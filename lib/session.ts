import { getServerSession } from "next-auth"

export async function getCurrentUser() {
   try{
      const session = await getServerSession();
      return session?.user;
   }catch(err){
      console.error(err)
   }
}