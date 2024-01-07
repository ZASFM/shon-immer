import { FaChevronRight } from "react-icons/fa"
import { HiMapPin } from "react-icons/hi2"

const LocationBtn=()=>{
   return (
      <>
         <button className="flex items-center bg-slate-200 rounded-full lg:rounded-lg md:max-w-sm px-4 py-2">
            <HiMapPin className="shrink-0 text-green-600"/>
            <span className="h-2 w-2 mx-2 bg-gray-600 shrink-0 rounded-full hidden md:block"></span>
            <span className="truncate max-w-[8rem] text-sm text-gray-500 md:max-w-[12rem]">Location placeholder</span>
            <FaChevronRight className="shrink-0 text-green-500"/>
         </button>
      </>
   )
}

export default LocationBtn;