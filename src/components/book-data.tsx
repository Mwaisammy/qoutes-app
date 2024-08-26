import CustomImage from "@/app/components/custom-image";
import { Books } from "../../typings";
import { Card } from "./ui/card";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useGetDetails } from "../../store/use-get-details";

type Props = {
  cover: Books;
};

function BookData({ cover }: Props) {
  const { onOpen } = useGetDetails();
  // console.log(cover.isbn);
  // if (!cover.isbn) {
  //   // console.log("No ISBN");
  // }
  return (
    <>
      <Card className="flex flex-col justify-between space-y-3 rounded-md aspect-video p-3 bg-lime-500/45 border-none shadow-md">
        <div className="flex justify-between items-center h-full w-full">
          <Image
            src={
              cover.isbn
                ? `https://covers.openlibrary.org/b/isbn/${cover.isbn[0]}-L.jpg`
                : `/fallback.jpg`
            }
            // fallbackSrc={"/fallback.jpg"}
            alt="book"
            width={100}
            height={100}
            className="rounded-tl-md rounded-tr-md w-full h-[80px] md:h-[100px] lg:h-[120px] object-contain"
          />

          <div className="w-full h-full">
            <h3 className="line-clamp-2 font-semibold text-ellipsis text-black tracking-wide ">
              {cover.author_name}
            </h3>
          </div>
        </div>

        <div>
          <h3 className=" line-clamp-1 text-gray-800 tracking-wide text-sm font-medium">
            {cover.title}
          </h3>
        </div>

        <div className="flex items-center space-x-1 ">
          <Button className="text-white cursor-pointer" onClick={onOpen}>
            Details
            <ChevronsRight className="size-4 text-white mt-1 ml-2" />
          </Button>
        </div>
      </Card>
    </>
  );
}

export default BookData;

//https://covers.openlibrary.org/a/olid/OL23919A-M.jpg

// cover.isbn[Math.floor(Math.random() * cover.isbn.length)]
