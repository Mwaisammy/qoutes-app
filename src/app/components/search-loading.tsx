import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function SearchLoading() {
  return (
    <Card className="p-3 bg-lime-500/45 border-none">
      <div className="flex flex-row space-x-4 ">
        <div>
          <Skeleton className="aspect-square w-[140px] rounded-sm bg-lime-400/25 " />
        </div>
        <div>
          <Skeleton className="w-[100px] h-[40px]  bg-lime-400/25 " />
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <Skeleton className="w-[140px] h-[20px]  bg-lime-400/25 " />
        <Skeleton className="w-[100px] h-[20px]  bg-lime-400/25 " />
      </div>
    </Card>
  );
}

export default SearchLoading;
