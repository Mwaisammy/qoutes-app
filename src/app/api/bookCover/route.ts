// import axios from 'axios';
// import { OpenLibraryResponse } from '../../../../typings';

// export const fetchBooks = async (genre: string): Promise<OpenLibraryResponse | null> => {
//   try {
//     const response = await axios.get<OpenLibraryResponse>(`https://openlibrary.org/search.json?subject=${genre}`, {
//       headers: {
//         "User-Agent": "Bookx/1.0(samuelmwaimuriithi@gmail.com)"
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };
