import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
import React, { Children, PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";

function AuthLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex items-center justify-center h-screen bg-lime-700">
      <ClerkLoading>
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex items-center space-x-3">
            <Image src={"/books.png"} alt="logo" width={100} height={100} />
            <h3 className="font-semibold text-white tracking-wider">Bookx</h3>
          </div>
          <div>
            <Loader2 className="animate-spin text-white" />
          </div>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex items-center space-x-3">
            <Image src={"/books.png"} alt="logo" width={100} height={100} />
            <h3 className="font-semibold text-white">Bookx</h3>
          </div>
          {children}
        </div>
      </ClerkLoaded>
    </div>
  );
}

export default AuthLayout;
