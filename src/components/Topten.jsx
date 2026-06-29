import React from "react";
import { useNavigate } from "react-router-dom";
import { useCryptoContext } from "../context/Cryptocontext";


export const Topten = ({ item }) => {
  const {currency}=useCryptoContext()
  const navigate = useNavigate();
  return (
    <div className="border-b border-gray-800 last:border-none hover:bg-gray-900 transition duration-200"  onClick={() => navigate(`/coin/${item.id}`)}>
      <div className="flex items-center h-16 md:h-20 px-4 md:px-6 text-white">

        {/* Rank */}
        <div className="w-[10%] md:w-[8%] text-gray-400 font-semibold">
          {item.market_cap_rank}
        </div>

        {/* Coin */}
        <div className="w-[45%] md:w-[34%] flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-8 h-8 md:w-10 md:h-10"
          />

          <div>
            <h2 className="text-sm md:text-lg font-semibold">
              {item.name}
            </h2>

            <p className="uppercase text-xs text-gray-400">
              {item.symbol}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="w-[20%] md:w-[18%] text-right text-sm md:text-base font-medium">
         {currency.symbol}{item.current_price.toLocaleString()}
        </div>

        {/* 24h Change */}
        <div
          className={`w-[25%] md:w-[20%] text-right text-sm md:text-base font-semibold ${
            item.price_change_percentage_24h >= 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {item.price_change_percentage_24h.toFixed(2)}%
        </div>

        {/* Market Cap - Hidden on Mobile */}
        <div className="hidden md:block md:w-[20%] text-right text-base">
          {currency.symbol}{(item.market_cap / 1e9).toFixed(2)}B
        </div>

      </div>
    </div>
  );
};