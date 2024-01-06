"use client"

import Container from "@/app/components/common/Container";
import { OrderData } from "@/data/order-data";
import Link from "next/link";
import {
  HiOutlineCalendarDays,
  HiOutlineChevronLeft,
  HiOutlineClock,
} from "react-icons/hi2";
import UserDeliveredModal from "./UserDeliveredModal";
import UserOnDeliveryModal from "./UserOnDeliveryModal";
import { CiReceipt } from "react-icons/ci";

export type Order={
   id:string,
   orderNumber:string,
   cart:{
      id:string,
      title:string,
      prepare:string,
      instructions:string,
      price:number,
   }[],
   orderDate:string,
   deliveryTime:string
   userName:string
   userEmail:string
   user:User,
   userPhone:string,
   paymentToken?:string,
   paid:boolean,
   delivery:string,
   deliveryAddress:string
   deliveryFee:number,
   serviceFee:number
   status:string,
   note:string,
   discount:number,
   total:number
}

export type User={
   id:string,
   name:string,
   email:string
   emailVerified:string,
   image:string,
   accounts:[],
   sessions:[],
   role:string,
   profile?:string,
   order:[],
   favorite?:string
}

const UserOrders = () => {
  return (
    <Container>
      <div className="mt-6 text-center">
        <h2 className="text-lg md:text-2xl lg:text-3xl leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          My Orders
        </h2>
        <Link
          href="/user"
          className="inline-flex items-center justify-center
           bg-green-600 text-lg   px-4 py-1 text-white 
            border border-green-500 space-x-2 rounded-full
             hover:text-green-700 hover:bg-green-200  "
        >
          {" "}
          <HiOutlineChevronLeft /> <span>Back to my Profile</span>{" "}
        </Link>
      </div>
      <section className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-h-[80vh] overflow-y-auto scrollbar-hide">
        {OrderData.map((order) => {
          return (
            <div
              className="flex flex-col p-3 space-y-6 rounded-md border"
              id={order.id}
            >
              {order.status === "DELIVERED" ? (
                <UserDeliveredModal order={order} />
              ) : (
                <UserOnDeliveryModal order={order} />
              )}
              <div className="flex justify-between items-center p-1 text-slate-500 bg-slate-500">
                <div className="flex items-center space-x-1 ">
                  <CiReceipt size={28} />
                  <div className="flex flex-col text-xs">
                    <span>Order</span>
                    <span>#{order.orderNumber}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {order.status === "DELIVERED" ? (
                    <>
                      <HiOutlineCalendarDays size={28} />
                      <div className="flex flex-col text-xs">
                        <span>Delivered </span>
                        <span>May 11 2023</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <HiOutlineClock size={28} />
                      <div className="flex flex-col text-xs">
                        <span>Estimated </span>
                        <span>16:46pm</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

export default UserOrders;