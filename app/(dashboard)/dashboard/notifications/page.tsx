import Container from "@/app/components/common/Container";
import NotificationList from "./NotificationList";

const notificationsPage=()=>{
   return (
      <Container>
         <div className="rounded-md shadow-2xl p-6 my-12 overflow-y-auto max-h-[80vh] bg-white">
            <NotificationList/>
         </div>
      </Container>
   )
}

export default notificationsPage;