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
      // console.log(response.data)
      return response.data
    }
  })

  if (isLoading) return <p>Yuklanmoqda...</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.banners?.map((item: BannerType) => (
        <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
          <Image src={`https://ashyo.store/${item.image}`} alt={`Banner ${item.name}`} width={310} height={169} className="w-full h-[200px] object-cover"/>
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-900">{item.name}</h1>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Banner