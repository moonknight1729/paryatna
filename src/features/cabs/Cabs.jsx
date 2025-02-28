import Offers from "@/features/offers/Offers";
import CabSearch from "./CabsSearch";
import React from "react";
import CabListing from "./CabListing";

const cabs = () => {
  return (
    <div>
      <CabSearch />
      <Offers />
      <CabListing />
    </div>
  );
};

export default cabs;
