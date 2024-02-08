"use client";

import Container from "@/app/components/common/Container";
import { MenuData } from "@/data/menu-data";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import FavoriteModal from "./FavoriteModal";
import { Menu } from "@prisma/client";}
import { MenuTypes } from "@/types";}

const FavoriteSection = () => {
  return (
    <Container>
      <div className="mt-6 text-center">
        <h1 className="sm:text-4xl md:text-2xl lg:text-3xl text-lg leading-tight tracking-tight text-gray-600">
          My favorites
        </h1>
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
      <section className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {MenuData.map(fav=>{
            return (
               <FavoriteModal
                  favorite={fav as Menu}
                  //user={}

               />
            )
         })}
      </section>
    </Container>
  );
};

export default FavoriteSection;
