import SearchForm from "@/components/search-form";
import Image from "next/image";

import Link from "next/link";
import FeaturedSlide from "./featured-slide";
import { Suspense } from "react";
import LoadingSkeleton from "./featured-loading";

function HomePage() {
  return (
    <div className="flex flex-col items-center  text-center  w-full h-full pt-3 lg:flex-row lg:items-center lg:space-x-4 lg:text-start">
      <div className="w-full flex flex-col justify-around space-y-6">
        <h3 className="font-bold text-7xl text-white text-center lg:text-start tracking-wide">
          Best books in stock
        </h3>

        <div className="flex flex-col items-center text-center space-y-4  lg:flex-row  lg:items-center lg:space-x-7">
          <div className="">
            <SearchForm />
          </div>
          <h2 className="font-bold tracking-wide lg:pb-4  ">
            <Link
              href={"/shop"}
              className="hover:underline hover:text-white transition-all ease-in-out duration-200"
            >
              Go to shop
            </Link>
          </h2>
        </div>

        <p className="text-sm tracking-wide pt-12 text-white">
          Unlock a world of adventure, knowledge, and inspiration with every
          page. Discover your next great read today
        </p>
      </div>
      <div className="w-full flex items-center justify-center z-0 ">
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedSlide />
        </Suspense>
      </div>
    </div>
  );
}

export default HomePage;
