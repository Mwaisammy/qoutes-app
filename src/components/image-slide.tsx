import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { BookData, Work } from "../../typings";

type Props = {
  item: BookData;
};

function ImageSlide({ item }: Props) {
  // console.log(item.availability?.isbn);
  return (
    <div>
      <Card className="bg-inherit border-none shadow-lg">
        <CardContent className="flex  aspect-[2/3] w-30 items-center justify-center  relative bg-inherit">
          <Image
            src={
              item.availability
                ? `https://covers.openlibrary.org/b/isbn/${item.availability?.isbn}-L.jpg`
                : `/fallback.jpg`
            }
            alt="slide"
            fill
            className="object-contain rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ImageSlide;
