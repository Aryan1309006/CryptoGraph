import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCryptoContext } from "../src/context/Cryptocontext";
import CoinChart from "../src/components/CoinChart";

export const CoinDetails = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { allCoins,loading ,currency} = useCryptoContext();
  const coin = allCoins.find((coin) => coin.id === id);
  // console.log(coin);

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-medium">Loading coin data...</p>
      </div>
    </div>
  );
}

if (!coin) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-2">
          Coin Not Found
        </h2>
        <p className="text-gray-400">
          The requested cryptocurrency could not be found.
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="flex justify-center flex-col bg-black  w-full min-h-screen text-white pt-20">
      <img src={coin.image} alt={coin.name} className="w-32 h-32 mx-auto" />
      <h1 className="text-4xl font-bold text-center py-4">
        {coin.name} ({coin.symbol?.toUpperCase()})
      </h1>
      <p className=" text-center font-semibold text-2xl text-gray-500">{(coin.market_cap_rank<=20)?`Rank ${coin.market_cap_rank}`:""}</p>

<div className="w-full p-2 m-auto h-xl md:max-w-4xl">
    <CoinChart id={coin.id}  /> 
</div>
    <h1 className="font-bold text-4xl m-auto mt-4 mb-10 border-4 border-transparent border-b-emerald-500 p-2 ">Coin Detail</h1>
     {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Current Price</p>
    <h3 className="text-xl font-bold text-white">
      ${coin.current_price?.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h High</p>
    <h3 className="text-xl font-bold text-green-500">
      ${coin.high_24h?.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Low</p>
    <h3 className="text-xl font-bold text-red-500">
      ${coin.low_24h?.toLocaleString()}
    </h3>
  </div>
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 col-span-2 md:col-span-1">
    <p className="text-gray-400 text-sm">ATH Change Percentage</p>
    <h3
      className={`text-2xl font-bold ${
        coin.ath_change_percentage > 0
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      {coin.ath_change_percentage?.toFixed(2)}%
    </h3>
  </div>
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Market Cap</p>
    <h3 className="text-xl font-bold text-white">
      ${coin.market_cap?.toLocaleString()}
    </h3>
  </div>


</div> */}

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Current Price</p>
    <h3 className="text-2xl font-bold">{currency.symbol}{coin.current_price}</h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Market Cap</p>
    <h3 className="text-2xl font-bold">
    {currency.symbol}{coin.market_cap.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Volume</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.total_volume.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Rank</p>
    <h3 className="text-2xl font-bold">
      #{coin.market_cap_rank}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h High</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.high_24h}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Low</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.low_24h}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Change</p>
    <h3
      className={`text-2xl font-bold ${
        coin.price_change_percentage_24h >= 0
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      {coin.price_change_percentage_24h.toFixed(2)}%
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Circulating Supply</p>
    <h3 className="text-2xl font-bold">
      {coin.circulating_supply.toLocaleString()}
    </h3>
  </div>

</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 md:p-10">

  <Card title="Current Price">
    {currency.symbol}{coin.current_price.toLocaleString()}
  </Card>

  <Card title="Market Cap">
    {currency.symbol}{coin.market_cap.toLocaleString()}
  </Card>

  <Card title="24H Volume">
    {currency.symbol}{coin.total_volume.toLocaleString()}
  </Card>

  <Card title="Rank">
    #{coin.market_cap_rank}
  </Card>

  <Card title="24H High">
    {currency.symbol}{coin.high_24h.toLocaleString()}
  </Card>

  <Card title="24H Low">
    {currency.symbol}{coin.low_24h.toLocaleString()}
  </Card>

  <Card
    title="24H Change"
    className={
      coin.price_change_percentage_24h >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.price_change_percentage_24h.toFixed(2)}%
  </Card>

  <Card title="Price Change (24H)">
    {currency.symbol}{coin.price_change_24h.toFixed(2)}
  </Card>

  <Card title="Market Cap Change">
    {currency.symbol}
    {coin.market_cap_change_24h.toLocaleString()}
  </Card>

  <Card
    title="Market Cap Change %"
    className={
      coin.market_cap_change_percentage_24h >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.market_cap_change_percentage_24h.toFixed(2)}%
  </Card>

  <Card title="All Time High">
    {currency.symbol}{coin.ath.toLocaleString()}
  </Card>

  <Card title="ATH Date">
    {new Date(coin.ath_date).toLocaleDateString()}
  </Card>

  <Card
    title="ATH Change %"
    className={
      coin.ath_change_percentage >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.ath_change_percentage.toFixed(2)}%
  </Card>

  <Card title="All Time Low">
    {currency.symbol}{coin.atl.toLocaleString()}
  </Card>

  <Card title="ATL Date">
    {new Date(coin.atl_date).toLocaleDateString()}
  </Card>

  <Card
    title="ATL Change %"
    className={
      coin.atl_change_percentage >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.atl_change_percentage.toFixed(2)}%
  </Card>

  <Card title="Circulating Supply">
    {coin.circulating_supply.toLocaleString()}
  </Card>

  <Card title="Total Supply">
    {coin.total_supply
      ? coin.total_supply.toLocaleString()
      : "N/A"}
  </Card>

  <Card title="Max Supply">
    {coin.max_supply
      ? coin.max_supply.toLocaleString()
      : "Unlimited"}
  </Card>

  <Card title="Fully Diluted Valuation">
    {coin.fully_diluted_valuation
      ? `${currency.symbol}${coin.fully_diluted_valuation.toLocaleString()}`
      : "N/A"}
  </Card>

</div>
    </div>
  );
};
const Card = ({ title, children, className = "" }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500 transition-all duration-300">
    <p className="text-gray-400 text-sm mb-2">{title}</p>
    <h3 className={`text-xl font-bold break-words ${className}`}>
      {children}
    </h3>
  </div>
);