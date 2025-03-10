import { useState } from "react";
import ActiveOfferTab from "./ActiveOfferTab";

export default function Offers() {
  const [activeTab, setActiveTab] = useState("All Offers");

  return (
    <div className="p-6 border-[1px] my-4">
      <h2 className="text-3xl font-bold">Offers</h2>
      <div className="flex space-x-4 mt-4 border-b pb-2">
        {["All Offers", "Flights", "Hotels", "Holidays", "Trains", "Cabs"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={
                activeTab == tab
                  ? "px-4 py-2 text-sm font-semibold border-b-2 border-blue-500 text-blue-500"
                  : "px-4 py-2 text-sm font-semibold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
              }
            >
              {tab}
            </button>
          )
        )}
      </div>
      <ActiveOfferTab activeTab={activeTab} />
    </div>
  );
}
