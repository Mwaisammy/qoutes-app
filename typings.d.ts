export interface DataObject {
  [key : string] :any
}



export interface  OpenLibraryResponse {
  numFound: number;
  start: number;
  docs: Books;
 
}
 export interface Books extends OpenLibraryResponse {
    cover_i: number;
    has_fulltext: boolean;
    edition_count: number;
    title: string;
    author_name: string[];
    first_publish_year: number;
    key: string;
    ia: string[];
    author_key: string[];
    public_scan_b: boolean;
    isbn: number[];
    publisher: string;
    author_alternative_name: string[];
    edition_key: string[];
    first_sentence:string[];


}


export interface Work {
  author_key: string[];
  author_name: string[];
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  key: string;
  language: string[];
  public_scan_b: boolean,
  title: string[];


}

// // Define the type for a single work item
// interface Work {
//   author_key: string[];         // Array of author keys
//   author_name: string[];        // Array of author names
//   edition_count: number;        // Number of editions available
//   first_publish_year: number;   // Year of first publication
//   has_fulltext: boolean;        // Whether full text is available
//   key: string;                  // Unique key for the work
//   language: string[];           // Array of languages the work is available in
//   public_scan_b: boolean;       // Whether a public scan is available
//   title: string;                // Title of the work
// }


export interface GenreResponse {
  query: string;
  works: DataObject[];
  days: number;
  hours:number;

}


interface Availability {
  status: string;
  available_to_browse: boolean;
  available_to_borrow: boolean;
  available_to_waitlist: boolean;
  is_printdisabled: boolean;
  is_readable: boolean;
  is_lendable: boolean;
  is_previewable: boolean;
  identifier: string;
  isbn: string;
  oclc: string | null;
  openlibrary_work: string;
  openlibrary_edition: string;
  last_loan_date: string | null;
  num_waitlist: number | null;
  last_waitlist_date: string | null;
  is_restricted: boolean;
  is_browseable: boolean;
  __src__: string;
}

interface BookData {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  cover_i: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia?: string[];
  ia_collection_s?: string;
  key: string;
  language: string[];
  lending_edition_s?: string;
  lending_identifier_s?: string;
  public_scan_b: boolean;
  title: string;
  availability?: Availability;
}


  