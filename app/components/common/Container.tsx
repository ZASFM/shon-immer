const Container=({children}:{children:React.ReactNode})=>{
   return (
      <div className="max-w-[2520px] px-4 sm:px-2 md:px-10 mx-auto">
         {children}
      </div>
   )
}

export default Container;