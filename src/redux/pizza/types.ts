export interface PizzaSliceState{
    items: PizzaItems[];
    status: string
  }
  
  
  export type fetchPizzaState = { 
      category: string;
      pageCount: number;
      order: string;
      sort: string;
  }
  
  export type PizzaItems = {
    title: string;
    imageUrl: string;
    price: number;
    id: string;
    sizes: number[];
    count: number;
  }