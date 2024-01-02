"use client"

import Image from "next/image";
import UserEditAccountModal from "./UserEditAccountModal";

const UserDetails=()=>{
   return (
      <div className="flex flex-col items-center justify-center">
         <Image
            src="/img/logo.png"
            alt="profile pic"
            width={100}
            height={10}
            className="mx-auto rounded-full"
         />
         <div>
            <h1 className="text-center text-xl my-5 font-semibold leading-tight text-gray-500 md:text-2xl">
               Shafi
            </h1>
            <div className="mb-4 text-gray-500">
               shafi.bahrami.2015@gmail.com
            </div>
            <UserEditAccountModal/>
         </div>
      </div>
   )
}

export default UserDetails;