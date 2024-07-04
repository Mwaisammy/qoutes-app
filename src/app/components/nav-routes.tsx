"use client";
import { usePathname } from "next/navigation";
import React from "react";
import RouteBtn from "./route-btn";

function NavRoutes() {
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
    <div className="flex items-center space-x-5">
      {routes.map((route) => (
        <RouteBtn
          key={route.name}
          path={route.path}
          name={route.name}
          active={route.active}
        />
      ))}
    </div>
  );
}

export default NavRoutes;
