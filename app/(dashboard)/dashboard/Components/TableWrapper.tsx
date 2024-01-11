import SearchAddFilter from "./SearchAddFilter";

type TableWrapperProps={
   title: string,
   children:React.ReactNode
}

const TableWrapper=({title, children}:TableWrapperProps)=>{
   return (
      <div className="rounded-lg shadow-2xl bg-white max-h-[80bh] p-6 my-12 overflow-y-auto">
         <div>
            <h2 className="text-center mb-6 text-2xl font-semibold text-slate-500">{title}</h2>
            <SearchAddFilter/>
         </div>
         <div className="relative overflow-x-auto">
            {children}
         </div>
      </div>
   )
}

export default TableWrapper;