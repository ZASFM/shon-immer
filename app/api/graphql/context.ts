import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { AuthOptions } from "next-auth";

//checks if incoming req has a valid api key
const validateGraphApiKey=(request:NextRequest):boolean=>{
   const expectedAPIKey = process.env.GRAPHQL_API_KEY;
   //incoming api key form headers
   const apiKeyFromHeaders=request.headers.get("Authorization");
   //incoming api key being searched in the url
   const apiKeyFromParams=new URL(request.url).searchParams.get("apiKey");
   
   //return true if the apiKey is somehow present in the url or the headers
   return (
      apiKeyFromHeaders===`Bearer ${expectedAPIKey}` ||
      apiKeyFromParams===apiKeyFromHeaders
   )
}

//context creator from Next.js API or GraphQL routes
export const createContext=async({req}:{req:NextRequest})=>{
   //check that the api key in present:
   if(!validateGraphApiKey(req)) throw new Error("hihihihhih");
   const session=await getServerSession();

   //if there if no session return {}
   if(!session || typeof session==="undefined"){
      return {};
   }

   //if user is authenticated then return the user
   const {user}=session;
   return {
      user
   };
}
