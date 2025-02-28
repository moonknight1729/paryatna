import React from "react";
import PackageSearch from "./PackageSearch";

const Nav = () => {
  const [activeTab, setActiveTab] = React.useState("");
  return (
    <div>
      <div className="flex space-x-4 mt-4 border-b pb-2">
        {["Search", "Honeymoon", "Book @1"].map((tab) => (
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
        ))}
      </div>
      <PackageSearch activeTab={activeTab} />
    </div>
  );
};

export default Nav;
