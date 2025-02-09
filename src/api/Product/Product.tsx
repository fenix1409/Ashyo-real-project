"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  image: string;
  brendId: number;
  productItems: ProductItem[];
}

export interface ProductItem {
  id: number;
  name: string;
  colorId: number;
  productId: number;
  image: string;
  quantity: number;
  price: number;
}

interface ApiResponse {
  message: string;
  totalCount: number;
  products: ProductType[];
}

export const useProducts = (page: number, limit: number = 100) => {
  return useQuery<ApiResponse>({
    queryKey: ["products", { page, limit }],
    queryFn: async () => {
      const { data } = await axios.get<ApiResponse>(
        `https://ashyo.store/api/product`,
        {
          params: { page: String(page), limit: String(limit) },
        }
      );
      console.log(data.products);
      return data; // Butun API javobini qaytaramiz
    },
    enabled: page > 0, // Faqat musbat son bo'lsa so‘rov yuboriladi
  });
};
