export interface Product {
  _id: string;
  categoryId: {
    _id: string;
    name: string;
  };
  sellerId: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductsResponse {
  products: Product[];
  totalPages: number;
}

export interface Profile {
  userId: string;
  email: string;
  role: string;
  iat: string;
}
