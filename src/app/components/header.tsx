"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavRoutes from "./nav-routes";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import SheetResponsive from "./sheet-responsive";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Header() {
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setIsScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //clean-up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <header
      className={cn(
        "sticky top-0 bg-lime-600 max-w-full  p-4 z-50 ",
        scrolled && "drop-shadow-lg"
      )}
    >
      <nav className="flex items-center justify-between w-full">
        <Link href={"/"}>
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
        </Link>

        <SheetResponsive />

        <div className="hidden lg:flex lg:items-center lg:space-x-5 ">
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
      </nav>
    </header>
  );
}

export default Header;
