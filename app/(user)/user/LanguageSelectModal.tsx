"use client"

import { FaChevronRight } from "react-icons/fa";
import Modal from "@/app/components/common/Modal";
import { useState } from "react";

const LanguageSelectModal=()=>{

   const [isOpen,setIsOpen]=useState(false);
   const openModal = ()=> setIsOpen(true);
   const closeModal = ()=> setIsOpen(false);

  const Languages = [
    "English",
    "Francais",
    "Deutsche",
    "Dutch",
    "Español",
    "Italiano",
  ];

   return (
      <>
         <button className="flex items-center" onClick={openModal}>
            <span>English</span>
            <FaChevronRight className="shrink-0 ml-3"/>
         </button>
         <Modal 
            isOpen={isOpen}
            closeModal={closeModal}         
            title="Select preferred language"   
         >
            <section className="grid grid-cols-2 py-24 gap-8">
               {Languages.map(ln=>{
                  return (
                     <button className="p-2 rounded-md hover-bg-slate-100" key={ln}>
                        {ln}{""}
                     </button>
                  )
               })}
            </section>
         </Modal>
         
      </>
   )
}

export default LanguageSelectModal;