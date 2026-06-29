import React from "react";

const ToptenSkeleton = () => {
  return (
    <div className="border-b border-gray-800 last:border-none animate-pulse">
      <div className="flex items-center h-16 md:h-20 px-4 md:px-6">

        {/* Rank */}
        <div className="w-[10%] md:w-[8%]">
          <div className="h-4 w-6 rounded bg-gray-700"></div>
        </div>

        {/* Coin */}
        <div className="w-[45%] md:w-[34%] flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-700"></div>

          <div className="space-y-2">
            <div className="h-4 w-24 md:w-32 rounded bg-gray-700"></div>
            <div className="h-3 w-12 rounded bg-gray-800"></div>
          </div>
        </div>

        {/* Price */}
        <div className="w-[20%] md:w-[18%] flex justify-end">
          <div className="h-4 w-20 rounded bg-gray-700"></div>
        </div>

        {/* 24h Change */}
        <div className="w-[25%] md:w-[20%] flex justify-end">
          <div className="h-4 w-16 rounded bg-gray-700"></div>
        </div>

        {/* Market Cap */}
        <div className="hidden md:flex md:w-[20%] justify-end">
          <div className="h-4 w-24 rounded bg-gray-700"></div>
        </div>

      </div>
    </div>
  );
};

export default ToptenSkeleton;