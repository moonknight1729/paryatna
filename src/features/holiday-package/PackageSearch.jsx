import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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

const PackageSearch = ({ activeTab }) => {

  if (activeTab == "Search") {
    return (
      <div className=" border-[1px] p-2 my-4">
        <div className="flex flex-row justify-around m-12 border-[1px]">
          <Popover>
            <PopoverTrigger asChild>
              <button className="px-16 py-8 border-[1px] ">
                <PopoverAnchor />
                hell
                <div>hello</div>
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
              <button className="px-16 py-8 border-[1px] ">
                <PopoverAnchor />
                hell
                <div>hello</div>
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
            <input type="date" className="w-full border p-2 rounded-md" />
          </div>
          <div className="border-[1px]">
            <label className="block text-gray-600 text-sm">Return</label>
            <input type="date" className="w-full border p-2 rounded-md" />
          </div>

          <div className="border-[1px]">
            <label className="block text-gray-600 text-sm">
              Travellers & Class
            </label>
            <input
              type="text"
              placeholder="1 Traveller, Economy"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <button className="mt-6 w-1/5 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
            SEARCH
          </button>
        </div>
      </div>
    );
  }

  if (activeTab == "Honeymoon") {
    return (
      <div className="flex space-x-10 p-6 my-4 bg-white shadow-md rounded-lg">
        {/* Left Section */}
        <div>
          <h2 className="text-blue-600 font-bold text-lg">MakeMyTrip</h2>
          <h3 className="text-blue-600 font-bold text-lg">
            Honeymoon Packages
          </h3>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p>Maldives</p>
            <p>Bali</p>
            <p>Thailand</p>
            <p>Malaysia</p>
            <p>Dubai</p>
          </div>
          <div>
            <p>North East</p>
            <p>Rajasthan</p>
            <p>Goa</p>
            <p>Kerala</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6">
          {[
            { label: "Trending", img: "/images/trending.jpg" },
            { label: "Bucket List", img: "/images/bucketlist.jpg" },
            { label: "Trip finder", img: "/images/tripfinder.jpg" },
            { label: "View All", img: "/images/viewall.jpg" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                alt={item.label}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab == "Book @1") {
    return (
      <div className="flex space-x-10 my-4 p-6 bg-white shadow-md rounded-lg">
        {/* Left Section */}
        <div>
          <h2 className="text-blue-600 font-bold text-lg">MakeMyTrip</h2>
          <h3 className="text-blue-600 font-bold text-lg">
            Honeymoon Packages
          </h3>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p>Maldives</p>
            <p>Bali</p>
            <p>Thailand</p>
            <p>Malaysia</p>
            <p>Dubai</p>
          </div>
          <div>
            <p>North East</p>
            <p>Rajasthan</p>
            <p>Goa</p>
            <p>Kerala</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6">
          {[
            { label: "Trending", img: "/images/trending.jpg" },
            { label: "Bucket List", img: "/images/bucketlist.jpg" },
            { label: "Trip finder", img: "/images/tripfinder.jpg" },
            { label: "View All", img: "/images/viewall.jpg" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                alt={item.label}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default PackageSearch;
