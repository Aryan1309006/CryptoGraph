import {
  Search,
  BarChart3,
  TrendingUp,
  Coins,
  ShieldCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Search size={32} />,
    title: "Smart Coin Search",
    description:
      "Quickly search thousands of cryptocurrencies and navigate directly to detailed information.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Live Market Data",
    description:
      "Stay updated with real-time prices, market capitalization, trading volume, and 24-hour changes.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Interactive Charts",
    description:
      "Visualize price history through clean and responsive charts to understand market trends.",
  },
  {
    icon: <Coins size={32} />,
    title: "Top Cryptocurrency Rankings",
    description:
      "Browse the top cryptocurrencies ranked by market capitalization and performance.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Reliable Data",
    description:
      "Powered by the CoinGecko API, providing trusted and frequently updated cryptocurrency information.",
  },
  {
    icon: <Globe size={32} />,
    title: "Responsive Dashboard",
    description:
      "Optimized for desktop, tablet, and mobile devices with a modern dashboard experience.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Powerful Features for Every Crypto Enthusiast
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          CryptoGraph provides everything you need to explore cryptocurrency
          markets, monitor price movements, and discover detailed insights with
          a fast and intuitive interface.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-500 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose CryptoGraph?
            </h2>

            <p className="text-gray-400 leading-8">
              CryptoGraph combines live cryptocurrency data, beautiful
              visualizations, and an intuitive interface into one modern
              dashboard. Whether you're a beginner exploring digital assets or
              an experienced investor monitoring market trends, CryptoGraph
              makes crypto analytics simple and accessible.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-800 p-5 rounded-xl">
              ✅ Real-time cryptocurrency prices
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              ✅ Detailed market statistics
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              ✅ Interactive historical charts
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              ✅ Fast search functionality
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              ✅ Mobile-friendly responsive design
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-5">
          Explore the Crypto Market Today
        </h2>

        <p className="text-gray-400 mb-8">
          Search, analyze, and track your favorite cryptocurrencies with
          CryptoGraph.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition">
          Get Started
        </button>
      </section>
    </div>
  );
}