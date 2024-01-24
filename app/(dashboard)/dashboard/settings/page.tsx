import Container from "@/app/components/common/Container";
import RestaurantDetails from "./RestaurantDetials";
import OpeningHoursForm from "./OpeningHoursFrom";
import AdminCategories from "./AdminCategories";

const SettingsPage=()=>{
   return (
      <Container>
         <div className="rounded-lg shadow-2xl my-12 p-6 max-h-[80vh] overflow-y-auto bg-white">
            <div className="text-center p-6 text-2xl font-semibold text-slate-500">
               Admin settings
            </div>
            <RestaurantDetails/>
            <OpeningHoursForm/>
            <AdminCategories/>
         </div>
      </Container>
   )
}

export default SettingsPage;