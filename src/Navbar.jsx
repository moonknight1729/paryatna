import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-around  border-[1px] p-[12px] mx-auto mx-96">
        <li>
          <NavLink
            to="/flights"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trains"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Trains
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/holiday-packages"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Travel Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabs"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Cabs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
