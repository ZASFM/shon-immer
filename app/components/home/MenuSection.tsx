import { MenuData } from "@/data/menu-data";
import MenuModal from "./MenuModal";

const MenuSection = () => {
  return (
    <section className="mb-24 mt-16">
      <div className="max-w-2xl my-5 mx-auto text-center">
        <h1 className="text-3xl leading-tight tracking-tight text-gray-600 md:text-4xl">
          Our Menus for you
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {MenuData.map(menu=>{
            return (
               <MenuModal menu={menu} key={menu.id}/>
            )
         })}
      </div>
    </section>
  );
};

export default MenuSection;
