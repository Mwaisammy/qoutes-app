"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateProductInfo } from "@/Hooks/use-get-books";
import { formSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Router } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q");

  if (searchQuery) {
  }

  // 1. Define your form.

  const { data, mutate } = useCreateProductInfo();

  console.log(data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // onSearch(
    //   mutate({
    //     query: values.username,
    //   })
    // );

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: { q: values.username },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }
  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex space-x-3 items-center bg-white rounded-full p-1"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Search books.."
                    {...field}
                    className="bg-transparent w-[400px] ring-0 ring-offset-0 focus-within:ring-0 focus-within:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <ArrowRight className="size-9 p-2 bg-black text-white rounded-full cursor-pointer" />
        </form>
      </Form>
    </div>
  );
}

export default SearchForm;
