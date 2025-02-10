import React from "react";

const AppDownload = () => {
  return (
    <div className="max-w-6xl my-4 mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      {/* Left Section - Text & Input */}
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <img src="/icons/download-icon.png" alt="Download Icon" className="w-10 h-10" />
          <h2 className="text-2xl font-bold">Download App Now !</h2>
        </div>
        <p className="text-gray-600 mt-1">
          Use code <span className="font-semibold text-black">WELCOMEMMT</span> and get up to <span className="font-bold text-black">Rs.5000 OFF</span> on your first domestic hotel booking.
        </p>

        {/* Mobile Number Input */}
        <div className="flex items-center mt-4 border border-gray-300 rounded-lg overflow-hidden w-full md:w-[450px]">
          <span className="px-3 py-2 bg-gray-100 border-r border-gray-300 flex items-center space-x-1">
            <img src="/icons/india-flag.png" alt="India Flag" className="w-5 h-5" />
            <span className="text-gray-700 font-semibold">+91</span>
          </span>
          <input type="text" placeholder="Enter Mobile number" className="flex-1 px-4 py-2 outline-none text-gray-700" />
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600">GET APP LINK</button>
        </div>
      </div>

      {/* Right Section - QR Code & Store Links */}
      <div className="flex flex-col items-center space-y-3">
        <img src="/icons/google-play.png" alt="Google Play" className="w-40 cursor-pointer" />
        <img src="/icons/app-store.png" alt="App Store" className="w-40 cursor-pointer" />
        <img src="/icons/qr-code.png" alt="QR Code" className="w-24 h-24" />
      </div>
    </div>
  );
};

export default AppDownload;
