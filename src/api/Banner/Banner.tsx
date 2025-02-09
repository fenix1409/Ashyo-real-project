"use client"
import { instance } from "@/src/components/hook/instance"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import React from "react"

export interface BannerType {
  id: number
  name: string
  description: string
  productId: number
  image: string
}

const Banner: React.FC = () => {
  const { data, isLoading } = useQuery<{ banners: BannerType[] }>({
    queryKey: ["banners"],
    queryFn: async () => {
      const response = await instance().get("/banner")
      return response.data
    }
  })

  if (isLoading) return <p>Yuklanmoqda...</p>

  return (
    <div className="px-[130px] mt-[80px]">
      <h2 className="text-[26px] leading-[40px] font-bold mb-[20px]">Banner</h2>
      <div className="flex items-center gap-[30px]">
        {data?.banners?.map((item: BannerType) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
            {/* <Image src={`https://ashyo.store/${item.image}`} alt={`Banner ${item.name}`} width={310} height={169} className="w-full h-[200px] object-cover"/> */}
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-900">{item.name}</h1>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner