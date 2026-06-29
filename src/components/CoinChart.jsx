import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function CoinChart({ id }) {
  const [chartData, setChartData] = useState([]);
  const [lineColor, setLineColor] = useState("#10b981"); // default green
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChart = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        );

        if (!res.ok) {
          throw new Error(`Chart API error: ${res.status}`);
        }

        const data = await res.json();

        const prices = data.prices || [];

        const formatted = prices.map((item) => ({
          time: new Date(item[0]).toLocaleDateString(),
          price: item[1],
        }));

        setChartData(formatted);

        // Set line color based on price movement
        if (prices.length > 1) {
          const firstPrice = prices[0][1];
          const lastPrice = prices[prices.length - 1][1];

          setLineColor(lastPrice >= firstPrice ? "#10b981" : "#ef4444");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load chart data");
      } finally {
        setLoading(false);
      }
    };

    fetchChart();
  }, [id]);

  return (
    <div className="max-w-full h-[400px] border bg-gray-950 md:w-5xl m-auto mt-20">
      {loading ? (
        <div className="flex h-full items-center justify-center text-slate-300">
          Loading chart...
        </div>
      ) : error ? (
        <div className="flex h-full items-center justify-center text-rose-400">
          {error}
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke={lineColor}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}