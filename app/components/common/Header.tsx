"use client";

import { useLoginModalStore, useSidebarDrawer } from "@/lib/store";
import Link from "next/link";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import LocationBtn from "./LocationBtn";
import { User } from "@prisma/client";
import AccountDropDown from "./AccountDropDown";

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => {
  console.log(user);

  const { onSidebarOpen } = useSidebarDrawer();
  const { onOpen } = useLoginModalStore();

  return (
    <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
      {/*  left part */}
      <div className="flex items-center gap-x-8">
        <button className="p-2 rounded-full text-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600">
          <HiBars3
            size={28}
            className="cursor-pointer shrink-0"
            onClick={onSidebarOpen}
          />
        </button>
        <LocationBtn />
      </div>
      {/* right part */}
      <div className="hidden md:flex justify-end space-x-4 items-center">
        <Link
          href="/cart"
          className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600"
        >
          <HiOutlineShoppingCart className="pr-1" size={28} />
          <span className="absolute top-0 right-1 text-green-600 font-bold">
            0
          </span>
        </Link>
        {/*user ?( 
          <AccountDropDown user={user as User} />
        ) : (
          <button
            className="bg-slate-200 text-gray-500 px-4 py-1 rounded-full"
            onClick={onOpen}
          >
            Login/Signup
          </button>
        )*/}
        <button
          className="bg-slate-200 text-gray-500 px-4 py-1 rounded-full"
          onClick={onOpen}
        >
          Login/Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
