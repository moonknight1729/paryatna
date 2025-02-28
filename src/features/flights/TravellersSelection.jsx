import { useState } from "react";

export default function TravellersSelection() {

    
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [error, setError] = useState("");
  const [selectedClass, setSelectedClass] = useState("Economy/Premium Economy");

  const handleInfantsChange = (count) => {
    if (count > adults) {
      setError("Number of infants cannot be more than adults");
    } else {
      setError("");
    }
    setInfants(count);
  };

  return (
    <div >
      <h2 className="text-lg font-semibold mb-2">ADULTS (12y+)</h2>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => setAdults(num)}
            className={`px-3 py-1 border rounded ${adults === num ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {num}
          </button>
        ))}
      </div>
      
      <h2 className="text-lg font-semibold mt-4">CHILDREN (2y - 12y)</h2>
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => setChildren(num)}
            className={`px-3 py-1 border rounded ${children === num ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {num}
          </button>
        ))}
      </div>
      
      <h2 className="text-lg font-semibold mt-4">INFANTS (below 2y)</h2>
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => handleInfantsChange(num)}
            className={`px-3 py-1 border rounded ${infants === num ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {num}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      
      <h2 className="text-lg font-semibold mt-4">CHOOSE TRAVEL CLASS</h2>
      <div className="flex gap-2">
        {["Economy/Premium Economy", "Premium Economy", "Business", "First Class"].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-3 py-1 border rounded ${selectedClass === cls ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {cls}
          </button>
        ))}
      </div>
      
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">APPLY</button>
    </div>
  );
}
