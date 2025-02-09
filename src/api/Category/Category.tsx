"use client";
import { useEffect, useState } from "react"
import { instance } from "../../components/hook/instance"

export interface CategoryType {
  id: number;
  name: string;
}

export const CategoryList = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  useEffect(() => {
    instance().get("/category?page=1&limit=100").then((res) => {
        setCategoryList(
          res.data.categories.map((item: CategoryType) => ({
            id: item.id,
            name: item.name
          }))
        )
      })
      .catch((err) => console.error("Error fetching categories:", err))
  }, [])

  return (
    <div>
      {categoryList.length > 0 ? (
        <ul className="flex items-center gap-[26px] justify-center">
          {categoryList.map((category) => (
            <li key={category.id} className="text-[16px] leading-[21px] text-[#545D6A]">{category.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loadinf...</p>
      )}
    </div>
  )
}