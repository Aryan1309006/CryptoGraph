import React, { useEffect, useState } from "react";
import { useCryptoContext } from "../src/context/Cryptocontext";
import { useNavigate } from "react-router-dom";
import { Topten } from "../src/components/Topten";
import ToptenSkeleton from "../src/components/ToptenSkeleton";

export const Heropage = () => {
  const { allCoins, coinData, loading, error } = useCryptoContext();
  const [selected, setSelected] = useState("");
  const [showCoin, SetShowCoin] = useState([]);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    SetShowCoin(allCoins?.slice(0, 10) || []);
  }, [allCoins]);

  return (
    <div className=" bg-gray-950 min-h-screen w-screen flex flex-col items-center justify-center text-white md:px-4 pt-20">
      <h1 className="text-4xl font-bold md:text-7xl max-w-4xl text-center">
        Largest <span className="text-emerald-500">Crypto</span> Marketplace
      </h1>
      <p className="text-lg max-w-2xl md:text-xl text-center py-4">
        Welcome to the world's largest cryptocurrency marketplace. Sign up to
        explore more about cryptos.
      </p>

      <div className="w-full max-w-2xl mx-auto px-4">
        <div >
          <form className="bg-white rounded-lg p-2 flex items-center shadow-lg gap-2">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            disabled={loading}
            className={`flex-1 min-w-0 h-12 px-4 outline-none bg-transparent text-sm sm:text-base md:text-lg ${
              selected ? "text-gray-800" : "text-gray-400"
            } ${loading ? "opacity-50" : ""}`}
          >
            <option value="" disabled>
              {loading ? "Loading coins..." : "Search crypto..."}
            </option>

            {allCoins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol?.toUpperCase()})
              </option>
            ))}
          </select>

          <button
            onClick={() => selected && navigate(`/coin/${selected}`)}
            disabled={!selected || loading}
            className="h-12 px-4 sm:px-6 md:px-8 rounded-md bg-emerald-500 text-white font-semibold whitespace-nowrap"
          >
            Search
          </button>
          </form>
          <div></div>
        </div>
        <div className="flex items-center my-20 flex-col w-full ">
  {/* Header */}
  <div className="w-full max-w-5xl bg-emerald-600 rounded-t-xl">
    <div className="flex items-center h-14 px-4 md:px-6 text-white font-semibold">

      <div className="w-[10%] md:w-[8%]">
        #
      </div>

      <div className="w-[45%] md:w-[34%]">
        Coin
      </div>

      <div className="w-[20%] md:w-[18%] text-right">
        Price
      </div>

      <div className="w-[25%] md:w-[20%] text-right text-wrap">
        24h Change
      </div>

      <div className="hidden md:block md:w-[20%] text-right">
        Market Cap
      </div>

    </div>
  </div>

  {/* Body */}
  <div className="w-full max-w-5xl bg-gray-950 rounded-b-xl overflow-hidden">
   {
  loading? Array.from({ length: 10 }).map((_, index) => (
        <ToptenSkeleton key={index} />
      )):  error ? (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center text-red-400">
        <p className="text-lg font-semibold">Network issue detected</p>
        <p className="text-sm text-gray-400 mt-2">Please check your connection and try again.</p>
      </div>
    ) : coinData.slice(0, 10).map((item) => (
        <Topten key={item.id} item={item} />
      ))
    }
  </div>
</div>
      </div>
    </div>
  );
};
