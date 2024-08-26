import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
  active: boolean;
};

function SlideRoutes({ name, active, path }: Props) {
  return (
    <div>
      <Button
        variant={"outline"}
        className={cn(
          "bg-transparent text-black hover:bg-slate-200 w-full",
          active && "bg-slate-200"
        )}
      >
        <Link href={path}>{name}</Link>
      </Button>
    </div>
  );
}

export default SlideRoutes;
