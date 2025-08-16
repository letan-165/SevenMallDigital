export interface Discount {
  _id: string;
  code: string;
  value: number;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  categoryId: Category;
  sellerId: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  haveDiscount: boolean;
  stock: number;
  status: boolean;
  discountId: Discount | null;
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
