import { MenuTypes } from "@/types";
import Image from "next/image";

type MenuCardProps={
   menu: MenuTypes,
   openModal:()=>void
}

const MenuCard=({menu, openModal}:MenuCardProps)=>{
   return (
      <div 
         className="flex flex-col shadow-md rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
         onClick={openModal}
      >
         <Image
            src={menu.image}
            alt="food image"
            height={200}
            width={360}
            className="h-56 rounded-l-lg w-full object-scale-down"
         />
         <div className="flex flex-col p-5 flex-1">
            <div className="flex justify-between items-center">
               <h2>{menu.title}</h2>
               <div className="text-green-600 font-semibold">${menu.price}</div>
            </div>
         </div>
      </div>
   )
}

export default MenuCard;