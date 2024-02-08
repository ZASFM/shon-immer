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

interface LoginModalStore{
   isOpen:boolean,
   onOpen:()=>void,
   onClose:()=>void
}

export const useLoginModalStore=create<LoginModalStore>()((set)=>({
   isOpen:false,
   onOpen:()=>set({isOpen:true}),
   onClose:()=>set({isOpen:false})
}))