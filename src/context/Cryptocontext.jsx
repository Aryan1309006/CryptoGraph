import React, { useState, useContext, useEffect, createContext } from "react";

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [coinData, setCoinData] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const loadMoreCoins = () => {
    setVisibleCount((prev) => Math.min(prev + 10, allCoins.length || prev));
  };

  // Fetch coins
  const fetchCoins = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1`
      );

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
      }

      const data = await res.json();

      setAllCoins(data);
      setVisibleCount(10);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch coins");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCoinData(allCoins.slice(0, visibleCount));
  }, [allCoins, visibleCount]);

  // Refetch whenever currency changes
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <CryptoContext.Provider
      value={{
        coinData,
        allCoins,
        loading,
        error,
        currency,
        setCurrency,
        visibleCount,
        loadMoreCoins,
        hasMoreCoins: allCoins.length > visibleCount,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => useContext(CryptoContext);

export default CryptoContextProvider;