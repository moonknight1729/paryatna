import React from 'react'
import '../data/offers'

const ActiveOfferTab = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {offers.map((offer, index) => (
      <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
        <img src={offer.image} alt={offer.title} className="w-full h-32 object-cover rounded-md" />
        <p className="mt-2 text-sm font-bold text-gray-600">{offer.category}</p>
        <h3 className="text-lg font-bold mt-1">{offer.title}</h3>
        <p className="text-sm text-gray-700 mt-1">{offer.description}</p>
        <button className="mt-2 text-blue-500 font-semibold">BOOK NOW</button>
      </div>
    ))}
  </div>
  )
}

export default ActiveOfferTab