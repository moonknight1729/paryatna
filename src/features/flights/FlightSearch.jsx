import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import TravellersSelection from "./TravellersSelection";

const tags = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Dubai",
  "Singapore",
  "Rome",
  "Bangkok",
  "Istanbul",
  "Los Angeles",
  "Barcelona",
  "Moscow",
  "Hong Kong",
  "Berlin",
  "Sydney",
  "Toronto",
  "Amsterdam",
  "San Francisco",
  "Seoul",
  "Mumbai",
  "Beijing",
  "Rio de Janeiro",
  "Cairo",
  "Vienna",
  "Chicago",
  "Madrid",
  "Mexico City",
  "Buenos Aires",
  "Shanghai",
  "Lisbon",
];

const ServiceSection = () => {
   
  //const dispatch = 


  const [selectedFare, setSelectedFare] = useState("Regular");
  const [searchData, setSearchData] = useState({
    source: "",
    destination: "",
    departure: "",
    return: "",
    travellers: {
      adults: "",
      infants: "",
      children: "",
    },
    class: "",
    category:"",
  });

  return (
    <div className=" border-[1px] p-2 my-4">
      <div className="flex flex-row items-center gap-2 ">
        <div>
          <input onInput={()=>dispatch(onInput)} type="radio" />
          <label>One Way</label>
        </div>
        <div>
          <input type="radio" />
          <label>Round Trip</label>
        </div>
       
      </div>

      <div className="flex flex-row justify-around m-12 border-[1px]">
        <Popover>
          <PopoverTrigger asChild>
            <button className="px-16 py-8 border-r-[1px] ">
              From
              <PopoverAnchor />
              <h1>city</h1>
              <div>airport</div>
            </button>
          </PopoverTrigger>

          <PopoverContent className=" p-0 bg-black" sideOffset={2}>
            <div className=" bg-white">
              <div>
                <input className="w-48" type="text" placeholder="Search" />
              </div>
              <ScrollArea className="h-72  rounded-md border">
                <div className="p-4">
                  {tags.map((tag) => (
                    <>
                      <div key={tag} className="text-sm">
                        {tag}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <button className="px-16 py-8 border-r-[1px] ">
              To
              <PopoverAnchor />
              <h1>city</h1>
              <div>airport</div>
            </button>
          </PopoverTrigger>

          <PopoverContent className=" p-0 bg-black" sideOffset={2}>
            <div className=" bg-white">
              <div>
                <input className="w-48" type="text" placeholder="Search" />
              </div>
              <ScrollArea className="h-72  rounded-md border">
                <div className="p-4">
                  {tags.map((tag) => (
                    <>
                      <div key={tag} className="text-sm">
                        {tag}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </PopoverContent>
        </Popover>
        <div className="border-[1px]">
          <label className="block text-gray-600 text-sm">Departure</label>
          <input
            type="date"
            value={searchData.departure}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="border-[1px]">
          <label className="block text-gray-600 text-sm">Return</label>
          <input
            type="date"
            value={searchData.departure}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="border-[1px] ">
          <label className="block text-gray-600 text-sm">
            Travellers & Class
          </label>
          <Popover>
          <PopoverTrigger asChild>
            <button className="px-16 py-8 border-r-[1px] ">
              Travellers and classes
              <PopoverAnchor />
              <h1>6 Travellers</h1>
              <div>class</div>
            </button>
          </PopoverTrigger>

          <PopoverContent className=" p-8 w-full " sideOffset={2}>
           
            <TravellersSelection/>
          
          </PopoverContent>
        </Popover>
        </div>
      </div>

      <div className="flex flex-row justify-around mt-12">
        {[
          "Regular",
          "Student",
          "Senior Citizen",
          "Armed Forces",
          "Doctors and Nurses",
        ].map((fare) => (
          <label key={fare} className="flex flex-row">
            <input
              type="radio"
              name="fare"
              value={fare}
              checked={selectedFare === fare}
              onChange={() => setSelectedFare(fare)}
            />
            <div>{fare}</div>
          </label>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <button className="mt-6 w-1/5 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
