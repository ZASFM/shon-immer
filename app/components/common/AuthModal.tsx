import { useLoginModalStore } from "@/lib/store";
import Modal from "./Modal";
import Image from "next/image";
import LoginComponent from "./LoginComponent";

const AuthModal=()=>{
   const {isOpen, onClose}=useLoginModalStore();

   return (
      <Modal isOpen={isOpen} closeModal={onClose}>
         <Image
           src="/img/logo.png"
           alt="logo"
           width={75}
           height={75}
           className="mx-auto mb-12"
         />
         <LoginComponent/>
      </Modal>
   )
}

export default AuthModal;