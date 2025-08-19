export interface ProductRequest {
  name: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  categoryId?: string;
  discountId?: string;
  sellerId: string;
}
