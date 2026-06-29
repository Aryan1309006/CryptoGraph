import React, { useEffect, useMemo, useState } from "react";
import { useCryptoContext } from "../src/context/Cryptocontext";
import { Topten } from "../src/components/Topten";
import ToptenSkeleton from "../src/components/ToptenSkeleton";

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { coinData, allCoins, loading, error } = useCryptoContext();
  console.log(allCoins);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const [changeFilter, setChangeFilter] = useState("all");

  const filteredCoins = useMemo(() => {
    if (!allCoins) return [];

    let coins = [...allCoins];

    // Search
    coins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase()),
    );

    // Positive / Negative Filter
    if (changeFilter === "positive") {
      coins = coins.filter((coin) => coin.price_change_percentage_24h >= 0);
    }

    if (changeFilter === "negative") {
      coins = coins.filter((coin) => coin.price_change_percentage_24h < 0);
    }

    // Sorting
    switch (sortBy) {
      case "priceHigh":
        coins.sort((a, b) => b.current_price - a.current_price);
        break;

      case "priceLow":
        coins.sort((a, b) => a.current_price - b.current_price);
        break;

      case "marketCap":
        coins.sort((a, b) => b.market_cap - a.market_cap);
        break;

      case "change":
        coins.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h,
        );
        break;

      case "az":
        coins.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        coins.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }

    return coins;
  }, [allCoins, search, sortBy, changeFilter]);

  return (
    <div className="min-h-screen bg-black py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search Coin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white outline-none focus:border-emerald-500"
          />

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
          >
            <option value="rank">Rank</option>
            <option value="priceHigh">Price High → Low</option>
            <option value="priceLow">Price Low → High</option>
            <option value="marketCap">Market Cap</option>
            <option value="change">24h Change</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

          {/* 24h Change Filter */}
          <select
            value={changeFilter}
            onChange={(e) => setChangeFilter(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
          >
            <option value="all">All</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          {/* Header */}
          <div className="bg-emerald-700">
            <div className="flex items-center h-14 px-4 md:px-6 text-white font-semibold">
              <div className="w-[10%] md:w-[8%]">#</div>

              <div className="w-[45%] md:w-[34%]">Coin</div>

              <div className="w-[20%] md:w-[18%] text-right">Price</div>

              <div className="w-[25%] md:w-[20%] text-right">24h Change</div>

              <div className="hidden md:block md:w-[20%] text-right">
                Market Cap
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="bg-black">
            {loading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <ToptenSkeleton key={index} />
              ))
            ) : error ? (
              <div className="text-red-500 text-center py-10">{error}</div>
            ) : filteredCoins.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 px-4 text-center text-red-400">
                <p className="text-lg font-semibold">Network issue detected</p>
                <p className="text-sm text-gray-400 mt-2">
                  Please check your connection and try again.
                </p>
              </div>
            ) : (
              filteredCoins.map((coin) => <Topten key={coin.id} item={coin} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
