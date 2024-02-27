export interface IProducts {
  id: number;
  title: string;
  body: {
    head: string;
    content: string;
  };
  image: string;
  quantity: number;
  totalPrice: number;
  name: string;
  price: number;
  discount: number;
}
export interface Cart {
  id: number;
  totalPrice: number;
}

export interface CartList {
  id: number;
  quantity: number;
  totalPrice: number;
}

export interface IProductsData {
  id: number;
  title: string;
  image: string;
  quantity: number;
  totalPrice: number;
  price: number;
}

export interface IProductsSearch {
  // id?: number;
  title: string;
}
