"use client"

import { useState } from "react"
import DashSideBar from "./DashSideBar"
import DashHeader from "./DashHeader"

type DashWrapper={
   children:React.ReactNode
}

const DashWrapper=({children}:DashWrapper)=>{
   const [show, setShow]=useState(false);
   const showSideBar=()=>setShow(preVal=>!preVal);

   return (
      <div className="min-h-screen bg-slate-500">
         <DashSideBar show={show} setShow={showSideBar}/>
         <section className={`relative ml-[6.5rem] transition-all duration-100 ease-out ${show && "md:ml-[10rem]"}`}>
            <DashHeader/>
            {children}
         </section>
      </div>
   )
}

export default DashWrapper;