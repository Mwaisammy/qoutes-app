import axios, { AxiosResponse } from "axios"
import { NextRequest, NextResponse } from "next/server"
import { OpenLibraryResponse } from "../../../../typings"

export async function GET(request: NextRequest): Promise<NextResponse>{
    try {

        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        const OpenLibraryResponseQuery:AxiosResponse<OpenLibraryResponse> = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
            headers: {
                "User-Agent": "Bookx/1.0(samuelmwaimuriithi@gmail.com)" 
            }

        })

        const data: OpenLibraryResponse =  OpenLibraryResponseQuery.data
        // console.log(data)


        return NextResponse.json(data, {status: 200})

    
        
    } catch (error) {
        // console.log(error)
        return new NextResponse(
            JSON.stringify({message: "Failed to fetch OpenLibraryResponse"}),
            {status: 401}
        )
        
    }
}