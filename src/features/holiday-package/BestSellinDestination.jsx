import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  { title: "Kerala: Sale Live", price: "₹12,900", image: "/images/kerala.jpg" },
  { title: "Singapore: Sale Live", price: "₹77,400", image: "/images/singapore.jpg" },
  { title: "Goa", price: "₹21,800", image: "/images/goa.jpg" },
  { title: "Himachal", price: "₹8,600", image: "/images/himachal.jpg" },
  { title: "Kashmir", price: "₹21,600", image: "/images/kashmir.jpg" },
  { title: "Rajasthan", price: "₹11,600", image: "/images/rajasthan.jpg" },
  { title: "Andaman", price: "₹47,100", image: "/images/andaman.jpg" },
  { title: "Thailand", price: "₹59,900", image: "/images/thailand.jpg" },
];

const BestSellingDestinations = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Heading & Arrows */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Best Selling Destinations</h2>
        <div className="flex space-x-2">
          <button onClick={() => scroll(-300)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll(300)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div ref={scrollRef} className="mt-4 flex space-x-4 overflow-x-auto scrollbar-hide">
        {destinations.map((dest, index) => (
          <div key={index} className="min-w-[200px] md:min-w-[250px] lg:min-w-[280px] relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={dest.image} alt={dest.title} className="w-full h-52 object-cover" />
            <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white w-full">
              <h3 className="font-bold">{dest.title}</h3>
              <p className="text-sm">Starting at {dest.price} Per person</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingDestinations;
