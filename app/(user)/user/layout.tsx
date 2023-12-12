import Header from "@/app/components/common/Header";
import Sidebar from "@/app/components/common/Sidebar";

export default async function RootLayout(
   {children}:
   {children:React.ReactNode}
){
   return (
      <div>
         <Header/>
         <Sidebar/>
         {children}
         
      </div>
   )
}