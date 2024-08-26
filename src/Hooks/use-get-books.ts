
import { booksQuery } from "@/actions";
import { useMutation } from "@tanstack/react-query"

export const useCreateProductInfo = () => {
    const createProductInfoMutation = useMutation({
        mutationFn: async ({ query }: { query: string  })  => booksQuery({query}),
        onSuccess: (data) => { (data) }
    });
    return createProductInfoMutation;
}