"use client"

import { MenuTypes } from "@/types";
import MenuCard from "./MenuCard";
import { useState } from "react";
import Modal from "../common/Modal";

type MenuModalProps={
   menu:MenuTypes
}

const MenuModal=({menu}:MenuModalProps)=>{
   
   const [isOpen, setIsOpen]=useState(false);
   const closeModal = ()=> setIsOpen(false);
   const openModal = ()=> setIsOpen(true);

   return (
      <>
         <MenuCard menu={menu} openModal={openModal}/>
         <Modal 
            isOpen={isOpen}
            closeModal={closeModal}
         >
            <div>

            </div>
         </Modal>
      </>
   )
}

export default MenuModal;