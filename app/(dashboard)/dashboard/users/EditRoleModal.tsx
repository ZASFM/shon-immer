import Modal from "@/app/components/common/Modal";
import { useState } from "react"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { User } from "@/app/(user)/user/orders/UserOrders";
import EditRoleForm from "./EditRoleForm";

type EditRoleModalProp={
   user:User
}

const EditRoleModal=({user}:EditRoleModalProp)=>{
   const [isOpen, setIsOpen]=useState(false);
   const openModal=()=>setIsOpen(true);
   const closeModal=()=>setIsOpen(false);
    
   return (
      <div>
         <HiOutlinePencilSquare
            onClick={openModal}
            className="w-6 h-6"
         />
         <Modal
            isOpen={isOpen}
            closeModal={closeModal}
         >
            <EditRoleForm user={user}/>
         </Modal>
      </div>
   )
}

export default EditRoleModal;