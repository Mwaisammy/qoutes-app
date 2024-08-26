"use client";
import Autoplay from "embla-carousel-autoplay";

import ImageSlide from "@/components/image-slide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef, useState } from "react";
import { BookData } from "../../../typings";
import { useGetCategory } from "../hooks/use-get-category";
import Loading from "../loaders/loading";
import FeaturedLoading from "./featured-loading";

function FeaturedSlide() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [genre, setGenre] = useState("trending");

  const { data, isLoading, isError } = useGetCategory({ genre });
  // console.log(data?.[0]);

  if (isLoading) {
    return <FeaturedLoading />;
  }

  // console.log(sortObjectsByArrayCount);

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs  flex items-center justify-center"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data?.slice(3, 9).map((item: BookData) => {
            return (
              <CarouselItem key={item.key} className="flex flex-col">
                <ImageSlide item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center justify-center">
        <h3 className="flex text-center tracking-widest font-semibold text-white">
          Featured Books
        </h3>
      </div>
    </div>
  );
}

export default FeaturedSlide;

//OL8801375W

//9781471158254

// function sliceAndLoop<T>(arr: T[] ): T[]{
//   const items = arr.length;
//     //skip the last three items
//   const skipItems = items - 3;

//   // Calculate the start index for the next three elements
//   const startItem = (skipItems + 3) % items;

//   const result : T[] = [];

//   for(let i = 0; i < 3; i++){
//     result.push(arr[(startItem + i % items)] )

//   }

//   return result

// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = sliceAndLoop(arr);

// console.log(result);
