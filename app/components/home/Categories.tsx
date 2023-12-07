import { categoriesData } from "@/data/categories-data";
import Image from "next/image";

const Categories = () => {
  return (
    <section>
      <div className="max-w-2xl my-5 mx-auto text-center">
        <h1 className="text-3xl leading-tight tracking-tight text-gray-600 md:text-4xl">
            Our categories
        </h1>
      </div>
      <div className="flex flex-row md:justify-center items-center justify-between md:gap-12 mt-12 overflow-x-auto">
         {categoriesData.map(cat=>{
            return (
               <div className="flex flex-col rounded-full h-16 w-16 justify-center items-center p-3 cursor-pointer shrink-0 overflow-hidden hover:bg-slate-200" key={cat.id}>
                  <Image
                     src={cat.imageSrc}
                     alt="cat"
                     width={60}
                     height={60}
                  />
                  <div className="whitespace-nowrap text-sm">
                     <h3 className="text-center">{cat.title}</h3>
                  </div>
               </div>
            )
         })}
      </div>
    </section>
  );
};

export default Categories;
