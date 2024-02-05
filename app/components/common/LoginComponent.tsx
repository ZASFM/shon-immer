import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const LoginComponent=()=>{
   const [providers,setProviders]=useState<Record<string, ClientSafeProvider>>({});

   useEffect(()=>{
      const getProvidersValue=async()=>{
         const p = await getProviders();
         setProviders(p as Record<string, ClientSafeProvider>);   
      }
      getProvidersValue();
   },[])

   return (
      <div className="flex flex-col space-y-5">
         {providers && !!Object.keys(providers) && Object.values(providers).map(pro=>{
            return (
               <button 
                  className="flex items-center justify-center w-full border font-medium rounded-lg text-xs px-2 md:px-5 py-2 "
                  onClick={(e)=>{
                     e.preventDefault();
                     signIn(pro.id);
                  }}
               >
                  {
                     pro.name==="google"?(
                        <FaGoogle className="h-6 w-6 mr-3/"/>
                     ):(
                        <BsFacebook className="h-6 w-6 mr-3 text-blue-600"/>
                     )
                  }
                  Continue with {pro.name}
               </button>
            )
         })}
      </div>
   )
}

export default LoginComponent;