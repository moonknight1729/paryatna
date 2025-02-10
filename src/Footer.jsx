
import React from 'react'

const Destination = () => {
  return (
    <footer className="bg-gray-200 mt-10 p-6 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
      <div>
        <h3 className="font-bold text-lg">Why Choose Us?</h3>
        <p className="text-gray-600">Providing seamless booking experiences with exclusive offers.</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">Book With Ease</h3>
        <p className="text-gray-600">Find the best deals on cabs, flights, and hotels.</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">Customer Support</h3>
        <p className="text-gray-600">24/7 assistance for all your travel needs.</p>
      </div>
    </div>
    <div className="flex justify-center space-x-4 mt-6">
      <span className="text-xl">📷</span>
      <span className="text-xl">✖️</span>
      <span className="text-xl">💼</span>
      <span className="text-xl">📘</span>
    </div>
    <p className="text-gray-600 mt-4">© 2025 Your Company. Country: India | USA | UAE</p>
  </footer>
  )
}

export default Destination
