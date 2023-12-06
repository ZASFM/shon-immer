"use client"

import { useState } from "react";
import DialogComponent from "./DialogComponent";


const Sidebar=()=>{
   const [isOpen, setIsOpen]=useState(true);

   const closeModal = () =>{
      setIsOpen(preVal=>!preVal);      
   }

   return (
      <div>
         <DialogComponent 
            isVisible={isOpen}
            onClose={closeModal}
         >
            <div>1234</div>
         </DialogComponent>
      </div>
   )
}

export default Sidebar;