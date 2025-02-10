import React from "react";
import BestSellingDestinations from "./BestSellinDestination";
import  PackageSearch  from "./PackageSearch";
import Offers from "@/Offers";

const HolidayPackages = () => {
  return (
    <div>
      <PackageSearch/>
      <Offers/>
      <BestSellingDestinations />
    
    </div>
  );
};

export default HolidayPackages;
