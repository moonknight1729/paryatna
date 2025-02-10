import React from "react";

const cabData = [
  { city: "Delhi", destinations: ["Agra", "Jaipur", "Dehradun", "Haridwar", "Chandigarh"], img: "delhi.jpg" },
  { city: "Agra", destinations: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"], img: "agra.jpg" },
  { city: "Jaipur", destinations: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"], img: "jaipur.jpg" },
  { city: "Pune", destinations: ["Mumbai", "Shirdi", "Mahabaleshwar", "Nasik", "Aurangabad"], img: "pune.jpg" },
  { city: "Mumbai", destinations: ["Pune", "Nasik", "Shirdi", "Lonavala", "Mahabaleshwar"], img: "mumbai.jpg" },
  { city: "Chandigarh", destinations: ["New Delhi", "Shimla", "Manali", "Gurgaon", "Noida"], img: "chandigarh.jpg" },
  { city: "Bangalore", destinations: ["Ooty", "Madikeri", "Coorg", "Vellore"], img: "bangalore.jpg" },
  { city: "Chennai", destinations: ["Vellore", "Pondicherry", "Bangalore", "Tirupati"], img: "chennai.jpg" },
  { city: "Dehradun", destinations: ["Mussoorie", "New Delhi", "Gurgaon", "Noida", "Faridabad"], img: "dehradun.jpg" }
];

const CabListing = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cabData.map((cab, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <img src={cab.img} alt={cab.city} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-lg">Cabs From {cab.city} To</h3>
              <p className="text-gray-600">{cab.destinations.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabListing;
