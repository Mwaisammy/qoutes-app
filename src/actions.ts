"use server"

import axios from "axios"

type Props = {
    query: string
}

export const booksQuery = async({query}: Props) =>{
    try {

      
        const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`,({
            headers: {
                "User-Agent": "Bookx/1.0(samuelmwaimuriithi@gmail.com)" 
            }
        })
            
        )
        const data = res.data;

        return data

        // console.log(data)
        
    } catch (error) {

        console.error(error)
        throw new Error("Error fetching books")
        
    }
}


