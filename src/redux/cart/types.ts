export type CartItem = {
    title: string;
    imageUrl: string;
    price: number;
    id: string;
    sizes: number[];
    count: number;
  }
  
  
  
  export interface CartSliceState{
    totalPrice: number;
    items: CartItem[]
  }