import { useState } from "react";

const collections = [
  {
    rank: "TOP 8",
    title: "Stays in & Around Delhi for a Weekend Getaway",
    image: "https://via.placeholder.com/150",
  },
  {
    rank: "TOP 8",
    title: "Stays in & Around Mumbai for a Weekend Getaway",
    image: "https://via.placeholder.com/150",
  },
  {
    rank: "TOP 9",
    title: "Stays in & Around Bangalore for a Weekend Getaway",
    image: "https://via.placeholder.com/150",
  },
  {
    rank: "TOP 11",
    title: "Beach Destinations",
    image: "https://via.placeholder.com/150",
  },
  {
    rank: "TOP 11",
    title: "Weekend Getaways",
    image: "https://via.placeholder.com/150",
  },
];

export default function Collections() {
  return (
    <div className="p-6 border-[1px] my-4">
      <h2 className="text-3xl font-bold">Handpicked Collections for You</h2>
      <div className="mt-6 flex space-x-4 overflow-x-scroll scrollbar-hide">
        {collections.map((collection, index) => (
          <div key={index} className="relative w-60 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
            <img src={collection.image} alt={collection.title} className="w-full h-40 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">{collection.rank}</span>
              <p className="text-white text-sm mt-1 font-semibold">{collection.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
