"use client";
import BookData from "@/components/book-data";
import { useBooksQuery } from "@/Hooks/use-books-query";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Books } from "../../../typings";
import Loading from "../loaders/loading";
import { Suspense } from "react";
import SearchLoading from "./search-loading";

type Props = {
  item: Books[];
};

function SearchPage({ item }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  console.log(query);

  const { data, isLoading, error } = useBooksQuery();

  console.log(data?.docs.slice(0, 20));

  // if (query || isLoading) {
  //   return (
  //     <div>
  //       <SearchLoading />;
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <h3 className="text-white tracking-wider text-center">
        Sorry , the book could not be found😢
      </h3>
    );
  }

  if (query) {
    return (
      <>
        <h3 className="font-semibold tracking-widest text-white mb-3 mt-9">
          Your search is here
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {isLoading
            ? Array(20)
                .fill("")
                .map((_, index) => (
                  <div key={index}>
                    <SearchLoading />
                  </div>
                ))
            : data?.docs.slice(0, 20).map((item: Books) => {
                // console.log(data.docs);
                return <BookData key={item.key} cover={item} />;
              })}

          {/* {data.map((item: Books) => (
          <BookData key={item.key} cover={item} />
        ))} */}
        </div>
      </>
    );
  }

  if (!query) {
    return (
      <div className="mt-10 flex items-center justify-center">
        <h3 className="text-sm text-white tracking-widest font-semibold">
          Search for your favourite book
        </h3>
      </div>
    );
  }
}

export default SearchPage;

//OL3306363M
