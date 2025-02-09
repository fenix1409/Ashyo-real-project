"use client";
import { useEffect, useState } from "react";
import { instance } from "../../components/hook/instance";

export interface BrandType {
  id: number;
  name: string;
  image: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  image: string;
  brendId: number;
}

export const BrandList = () => {
  const [brandList, setBrandList] = useState<BrandType[]>([]);

  useEffect(() => {
    instance()
      .get("/brand")
      .then((res) => {
          console.log(res.data.brands[0].products);
        return setBrandList(res.data.brands);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="px-[130px] mt-[80px]">
      <h2 className="text-[26px] leading-[40px] font-bold mb-[20px]">Brands</h2>
      {brandList.length > 0 ? (
        <ul className="flex items-center gap-[26px] justify-center">
          {brandList.map((item) => (
            <li key={item.id} className="text-[16px] leading-[21px] text-[#545D6A]">
              {item.name}
              {item.products.length > 0 ? (
                <ul>
                  {item.products.map((product) => (
                    <li key={product.id}>
                        <h2 className="text-sm text-blue-400">{product.name}</h2>
                        <p className="text-sm text-blue-600">{product.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <li className="text-sm text-red-500">No products available</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};