// utils/fetchOpenLibraryResponse.ts

import axios, { AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';
import { DataObject, GenreResponse, Work } from '../../../../../typings';


// Function to count arrays in an object
function countArraysInObject(obj: DataObject): number {
  return Object.values(obj).reduce((count, value) => {
    if (Array.isArray(value)) {
      return count + 1;
    }
    return count;
  }, 0);
}

// Function to sort objects by array count
function sortObjectsByArrayCount(data: DataObject[]): DataObject[] {
  return data.sort((a, b) => {
    const countA = countArraysInObject(a);
    const countB = countArraysInObject(b);
    return countB - countA; // Sort in descending order
  });
}





export async function GET(request: Request,{ params : {genre}} : {params : {genre : string}}): Promise<NextResponse>{

  try {

    const response:AxiosResponse<GenreResponse> = await axios.get(`https://openlibrary.org/${genre}.json`, {
      headers: {
        'User-Agent': 'Bookx/1.0 (samuelmwaimuriithi@gmail.com)',
      },
    });

    const data :GenreResponse =  response.data 

    // console.log(data.works)

    if(data && data.works) {

      const sortedWorks = sortObjectsByArrayCount(data.works)

      return NextResponse.json(sortedWorks, {status: 200});
    }else {

      return NextResponse.json("Error sorting works", {status :500})
    }


    // return NextResponse.json(data, {status: 200})


    
  } catch (error) {

    console.log(error)

    return new NextResponse('Internal server error', {status: 500})
    
  }

}

