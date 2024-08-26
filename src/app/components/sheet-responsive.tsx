"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNav } from "../hooks/use-nav";
import { Menu } from "lucide-react";
import MainRoutes from "./main-routes";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

function SheetResponsive() {
  const { isOpen, onClose, onOpen } = useNav();
  const media = useMediaQuery("(min-width : 1024px)");
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <Menu
          onClick={onOpen}
          className="text-white size-7 md:size-8 lg:hidden cursor-pointer"
        />
        <SheetContent className={cn("block", media && "hidden")}>
          <SheetHeader>
            <MainRoutes />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SheetResponsive;
