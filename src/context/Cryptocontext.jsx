import React, { useState, useContext, useEffect, createContext } from "react";

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [coinData, setCoinData] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // Fetch coins
  const fetchCoins = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1`
      );

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
      }

      const data = await res.json();

      setAllCoins(data);
      setCoinData(data.slice(0, 10));
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch coins");
    } finally {
      setLoading(false);
    }
  };

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
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => useContext(CryptoContext);

export default CryptoContextProvider;