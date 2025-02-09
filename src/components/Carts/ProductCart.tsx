import { useProducts } from '@/src/api/Product/Product'
import React from 'react'

const ProductCart = () => {
    const { data, isLoading, error } = useProducts(1, 100)
    const items = data?.products[0].productItems
    const datas = data?.products

    if (isLoading) return <p>Yuklanmoqda...</p>
    if (error) return <p>Xatolik yuz berdi: {error.message}</p>
    return (
        <div className="flex flex-col gap-6 p-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Jami mahsulotlar: <span className="text-blue-600">{data?.totalCount}</span>
        </h2>
      
        {/* Mahsulotlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas?.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition hover:shadow-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg"/>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            </div>
          ))}
        </div>
      
        {/* Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items?.map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md transition hover:scale-105">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
    )
}

export default ProductCart