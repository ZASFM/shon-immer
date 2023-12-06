import { create } from "zustand"

interface SidebarDrawerStore{
   isSidebarOpen:boolean,
   onSidebarOpen:()=>void,
   onSidebarClose:()=>void
}

export const useSidebarDrawer=create<SidebarDrawerStore>()((set)=>({
   isSidebarOpen:false,
   onSidebarOpen:()=>set({isSidebarOpen:true}),
   onSidebarClose:()=>set({isSidebarOpen:false})
}))