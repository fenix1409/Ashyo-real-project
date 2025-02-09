import { useProducts } from '@/src/api/Product/Product'
import React from 'react'

const ProductCart = () => {
  const { data, isLoading, error } = useProducts(1, 100)
  const items = data?.products[0].productItems
  const datas = data?.products

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>
  return (
    <div className="px-[130px] mt-[80px]">
      {/* Products */}
      <h2 className="text-[26px] leading-[40px] font-bold mb-[20px]">Products</h2>
      <div className="flex items-center gap-[30px]">
        {datas?.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition hover:shadow-lg p-4">
            <img src="https://m.media-amazon.com/images/I/713SsA7gftL._AC_UF1000,1000_QL80_.jpg" alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Items */}
      <h2 className="text-[26px] leading-[40px] font-bold mb-[20px] mt-[60px]">Product Items</h2>
      <div className="flex items-center gap-[35px]">
        {items?.map((item) => (
          <div key={item.id} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md transition hover:scale-105 w-64">
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCart