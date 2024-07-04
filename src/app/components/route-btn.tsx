import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { act } from "react";

type Props = {
  name: string;
  path: string;
  active: boolean;
};

function RouteBtn({ name, path, active }: Props) {
  return (
    <div>
      <Button
        className={cn(
          "bg-transparent text-white hover:bg-slate-700/40 text-xs font-semibold tracking-wider",
          active && "bg-slate-700/40"
        )}
        asChild
      >
        <Link href={path}>{name}</Link>
      </Button>
    </div>
  );
}

export default RouteBtn;
