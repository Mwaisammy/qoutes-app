import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {  GenreResponse } from "../../../typings"


export const useGetCategory = ({genre}: {genre: string}) => {

    console.log(genre)
    const categoryQuery = useQuery({
        queryKey: ["categories", {genre}],
        queryFn: async() => {
            const res = await axios.get(`/api/bookGenre/${genre}`)
            const data = await  res.data 

            console.log(data)
            

            return data 
        }

    })


    return categoryQuery
}

