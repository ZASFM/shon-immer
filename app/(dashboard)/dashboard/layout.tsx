import DashWrapper from "./Components/DashWrapper"

const layout=async ({children}:{children:React.ReactNode})=>{
   return (
      <DashWrapper>
         {children}
      </DashWrapper>
   )
}

export default layout;