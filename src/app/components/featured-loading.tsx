import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function FeaturedLoading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="aspect-square w-[320px] rounded-sm bg-lime-500/70" />
    </div>
  );
}

export default FeaturedLoading;
