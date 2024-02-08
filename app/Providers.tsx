"use client"

import { ReactNode } from "react";
import AuthModal from "./components/common/AuthModal";

const Providers=({children}:{children:ReactNode})=>{
   return (
      <div>
         <AuthModal/>
         {children}
      </div>
   )
}

export default Providers;