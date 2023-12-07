import { PromoTypes } from "@/types";

type PromoCardProps={
   promo: PromoTypes
}

const PromoCards=({promo}:PromoCardProps)=>{
   return (
      <div className="w-96 flex rounded-lg shadow-lg hover:text-green-600 hover:bg-green-600 text-gray-500 shrink-0 transition-all ease-out duration-200">
         <div className="flex flex-1 overflow-hidden relative"></div>
         Promo cards
      </div>
   )
}

export default PromoCards;