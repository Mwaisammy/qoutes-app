import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col items-center text-center  w-full h-full pt-3 lg:flex-row lg:items-center lg:space-x-3 lg:text-start">
      <div className="w-full flex flex-col space-y-6">
        <h3 className="font-bold text-7xl text-white text-center lg:text-start tracking-wide">
          Best books in stock
        </h3>

        <div className="flex flex-col items-center text-center space-y-4  lg:flex-row  lg:items-center lg:space-x-7">
          <div className="flex space-x-3 items-center w-[410px] bg-white rounded-full p-1 ">
            <Input
              placeholder="Search books.."
              className="bg-transparent w-[400px] ring-0 ring-offset-0 focus-within:ring-0 focus-within:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
            />
            <ArrowRight className="size-9 p-2 bg-black text-white rounded-full" />
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
      <div className="w-full">
        <Image
          src={"/banner.png"}
          alt=""
          width={250}
          height={250}
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}

export default HomePage;
