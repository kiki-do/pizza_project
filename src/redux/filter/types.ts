export type SortState = { 
    name: string;
    sortProperty:  'raiting' |  'price' | '-price' | '-title';
  }
  
  
  export interface FilterSliceState{
    products: number; 
    pageCount: number;
    sort: SortState;
    size: number
  }
  
  
  