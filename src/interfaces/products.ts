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

export interface IProductsData {
  id: number;
  title: string;
  image: string;
  quantity: number;
  totalPrice: number;
  price: number;
}
