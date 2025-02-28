import React from "react";

const destinations = [
  { name: "Goa", description: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas", image: "/images/goa.jpg" },
  { name: "Ooty", description: "Hotels, Resorts, Cottages, Budget Hotels, Homestay", image: "/images/ooty.jpg" },
  { name: "Jaipur", description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station", image: "/images/jaipur.jpg" },
  { name: "Singapore", description: "Hotels, 5 Star Hotels, Little India, Orchard Road, Hostels, Hotels in Sentosa", image: "/images/singapore.jpg" },
  { name: "Phuket", description: "Hotels, Resorts, Budget Hotels, Beachfront Properties", image: "/images/phuket.jpg" },
  { name: "Others", description: "Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels", image: "/images/others.jpg" },
  { name: "Delhi", description: "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport", image: "/images/delhi.jpg" },
  { name: "Mumbai", description: "Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport", image: "/images/mumbai.jpg" },
  { name: "Manali", description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road", image: "/images/manali.jpg" },
  { name: "Bangkok", description: "Hotels, 3 Star Hotels, 5 Star Hotels, Hostels, Budget Hotels, Hotels in Sukhumvit", image: "/images/bangkok.jpg" },
  { name: "Bali", description: "Hotels, Resorts, 5 Star Hotels, Budget Hotels, Villas In Bali, Beach-front Properties", image: "/images/bali.jpg" },
  { name: "Maldives", description: "Hotels, 3 Star Hotels, Resorts, 5 Star Hotels, 4 Star Hotels, Hotels in Male", image: "/images/maldives.jpg" },
  { name: "Bangalore", description: "Hotels, Budget Hotels, Resorts, Near Airport, Guhantara Resort", image: "/images/bangalore.jpg" },
  { name: "Shimla", description: "Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road", image: "/images/shimla.jpg" },
  { name: "Dubai", description: "Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays", image: "/images/dubai.jpg" },
  { name: "Pattaya", description: "Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central Pattaya, Beachfront Properties", image: "/images/pattaya.jpg" },
];

const DestinationList = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 bg-gray-100 rounded-lg">
            <img src={destination.image} alt={destination.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{destination.name}</h3>
              <p className="text-gray-600 text-sm">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
