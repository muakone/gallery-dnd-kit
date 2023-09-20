import React from "react";

const Header = ({ text, textState }) => {
  return (
    <div className="header-bg">
      <div className="w-[90%] mx-auto py-8 text-center pt-16">
        <h2 className="md:text-4xl text-2xl text-white font-semibold my-2">
          Get The Best Quality Images by creator
        </h2>
        <div className="relative mx-auto">
          <input
            type="text"
            className="md:w-[70%] w-full border-2 border-gray-300 bg-white h-10 px-5 py-7 my-4 pr-10 rounded-md text-sm focus:outline-none focus:border-indigo-500"
            placeholder="Search..."
            value={text}
            onChange={(e) => textState(e.target.value)}
          />
          <div className="absolute right-[16%] top-3  mt-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.293 13.293a1 1 0 0 1-1.414 1.414l-3.793-3.793a6 6 0 1 1 1.414-1.414l3.793 3.793zM12 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
