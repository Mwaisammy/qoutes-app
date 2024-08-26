import { usePathname } from "next/navigation";
import React from "react";
import SlideRoutes from "./slide-routes";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

function MainRoutes() {
  const pathName = usePathname();

  const routes = [
    {
      name: "Home",
      path: "/",
      active: pathName === "/",
    },

    {
      name: "Shop",
      path: "/shop",
      active: pathName.startsWith("/shop"),
    },
    {
      name: "Blog",
      path: "/blog",
      active: pathName.startsWith("/blog"),
    },
    {
      name: "Category",
      path: "/category",
      active: pathName.startsWith("/category"),
    },
  ];
  return (
    <main className="">
      <div className="flex justify-start">
        <ClerkLoading>
          <Loader className="animate-spin  size-5" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
      <div className="flex flex-col space-y-7 mt-6">
        {routes.map((route) => (
          <SlideRoutes
            key={route.path}
            path={route.path}
            name={route.name}
            active={route.active}
          />
        ))}
      </div>
    </main>
  );
}

export default MainRoutes;
