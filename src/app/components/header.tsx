import Image from "next/image";
import React from "react";
import NavRoutes from "./nav-routes";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-4 items-center">
        <Image
          src={"/books.png"}
          alt="logo"
          width={100}
          height={100}
          className="size-16"
        />
        <h3 className="font-semibold text-sm md:text-lg lg:text-xl text-white">
          Bookx
        </h3>
      </div>

      <div className="flex items-center space-x-5 ">
        <NavRoutes />

        <div>
          <ClerkLoading>
            <Loader className="animate-spin  size-5" />
          </ClerkLoading>

          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

export default Header;
