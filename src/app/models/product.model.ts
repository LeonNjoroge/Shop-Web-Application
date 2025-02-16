export interface Category {
    id: string;
    name: string;
    image: string;
  }
  
  export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    images: string[]; 
    category: Category;
  }
  
  export interface ProductResponse {
    products: Product[];
  }