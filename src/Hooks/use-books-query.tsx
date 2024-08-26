import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export const useBooksQuery = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const getBookQuery = useQuery({
    queryKey: ["books", { query }],
    queryFn: async () => {
      const res = await axios.get(`/api/booksQuery`, {
        params: {
          q: query,
        },
      });

      const data = await res.data;
      // console.log(data);

      return data;
    },
  });

  return getBookQuery;
};
