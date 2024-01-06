import { Order } from "./userOrders";

type UserOnDeliveryModalProps={
   order:Order
}

const UserOnDeliveryModal=({order}:UserOnDeliveryModalProps)=>{
   return (
      <div>
         <>
            {order.status}
         </>
      </div>
   )
}

export default UserOnDeliveryModal;