import React from 'react'
const orders = {
  archived: [
    { id: 1, name: 'Laptop', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJg5Ki6NuLopV3UPb4XDbX4SM15tRU7oyGw&s' },
    { id: 2, name: 'Headphones', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEJ-BqNDRHvF8KKdMfxiLTvCYMK1oIHUgxBIOoc4ESbUacu7hLZrDCEW4J27seedzqMQ&usqp=CAU' },
  ],
  completed: [
    { id: 1, name: 'Smartphone', price: 800, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJg5Ki6NuLopV3UPb4XDbX4SM15tRU7oyGw&s'  },
    { id: 2, name: 'Keyboard', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJg5Ki6NuLopV3UPb4XDbX4SM15tRU7oyGw&s' },
  ]
};
const Archive = () => {
  return (
  <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Arxivlangan Buyurtmalar</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.archived.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <img src={order.image} alt={order.name} className="w-full h-32 object-cover rounded-md mb-4" />
              <p className="text-lg font-medium">{order.name}</p>
              <p className="text-gray-600">Price: {order.price}$</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.completed.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <img src={order.image} alt={order.name} className="w-full h-32 object-cover rounded-md mb-4" />
              <p className="text-lg font-medium">{order.name}</p>
              <p className="text-gray-600">Price: ${order.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Archive);