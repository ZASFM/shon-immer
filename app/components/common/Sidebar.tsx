"use client";

import { useState } from "react";
import DialogComponent from "./DialogComponent";
import Link from "next/link";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import React from "react";
import { useSidebarDrawer } from "@/lib/store";
import { User } from "@prisma/client";

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Orders", icon: FaReceipt, url: "/user/orders" },
  { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
  { title: "Help", icon: MdHelp, url: "/user/help" },
];

const Sidebar = ({ user }: { user: User }) => {
  const { isSidebarOpen, onSidebarClose } = useSidebarDrawer();

  return (
    <div>
      <DialogComponent isVisible={isSidebarOpen} onClose={onSidebarClose}>
        <div className="flex flex-col px-6 py-6 gap-y-6">
          {/* 
                {user ? (
          <>
            <div className="flex justify-center my-3">
              <Link href="/" className="outline-none">
                <Image src="/img/logo.png" width={40} height={40} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center p-3 transition-all font-semibold">
              <Image
                src={user?.image!}
                width={40}
                height={40}
                alt="user-img"
                className="object-cover rounded-full"
              />
              <div className="flex flex-col space-y-2 text-xs">
                <span className="pl-4">{user?.name} </span>
                <Link href="/user" className="pl-4 text-green-600">
                  View Account
                </Link>
              </div>
            </div>

            {Links.map((link) => (
              <Link
                href={link.url}
                className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
                key={link.title}
              >
                {createElement(link.icon, {
                  className: "h-5 w-5 mr-4 shrink-0",
                })}
                <span className="pl-2">{link.title}</span>
              </Link>
            ))}
            <button className="flex items-center p-3 transition-all font-semibold"
            onClick={() => signOut({ callbackUrl: "/" })}
            >
              <HiOutlineArrowRightOnRectangle
                className="mr-4 shrink-0"
                size={26}
              />
              <span className="pl-2">Sign Out</span>
            </button>
          </>
        ) : (
          <button
            className="bg-green-600 text-white text-center
           hover:bg-green-200  hover:text-green-700  p-3 rounded  focus:outline-none "
            onClick={showLoginComponent}
          >
            Login / Signup
          </button>
        )}
        */}
          <div className="flex justify-center my-3">
            <Link href="/" className="outline-none">
              <Image src="/img/logo.png" width={40} height={40} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center p-3 transition-all font-semibold">
            <Image
              src="/img/logo.png"
              width={40}
              height={40}
              alt="user image"
              className="object-cover rounded-full"
            />
            <div className="flex flex-col space-y-3 text-xs">
              <span className="pl-4">Shafi</span>
              <Link href="/user" className="pl-4 text-green-600">
                View account
              </Link>
            </div>
          </div>
          {Links.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.title}
                className="flex items-center transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
              >
                {React.createElement(link.icon, {
                  className: "h-5 w*5 mr-4 shrink-0",
                })}
                <span>{link.title}</span>
              </Link>
            );
          })}
          <button className="flex items-center transition-all font-semibold">
            <HiOutlineArrowRightOnRectangle
              className="mr-4 shrink-0"
              size={26}
            />
            <span className="pl-2">Signout</span>
          </button>
        </div>
      </DialogComponent>
    </div>
  );
};

export default Sidebar;
