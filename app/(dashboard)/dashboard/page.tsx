import Container from "@/app/components/common/Container";
import TotalCards from "./Components/TotalCards";
import SalesRevenueGraph from "./Components/SalesRevueGraph";

const Dashboard=()=>{
   return (
      <Container>
         <TotalCards/>
         <section className="grid grid-cols-1 md:grid-cols-2 py-6 gap-4">
            <SalesRevenueGraph/>
         </section>
      </Container>
   )
}

export default Dashboard;