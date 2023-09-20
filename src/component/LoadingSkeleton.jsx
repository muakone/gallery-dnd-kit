import React from "react";

const LoadingSkeleton = () => {
  return (
    <>
      {Array(12)
        .fill(undefined)
        .map((_, index) => (
          <div className="h-[400px] w-72 shadow rounded-md max-w-sm mx-auto animate-pulse my-4">
            <div className=" w-full h-[320px] rounded-t-md bg-slate-700"></div>
            <div className="flex mt-2 ml-2 ">
              <div className="font-medium text-base w-full mr-2 bg-slate-700 rounded"></div>
              <div className=" my-2 w-full bg-slate-700 rounded"></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default LoadingSkeleton;
