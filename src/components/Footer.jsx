import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBitcoin,
} from "react-icons/fa";
import { HiArrowTrendingUp } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-emerald-500/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaBitcoin className="text-emerald-400" />
              <span>
                Crypto<span className="text-emerald-400">Graph</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-7">
              Track real-time cryptocurrency prices, market trends,
              trading volume, and historical performance with a clean
              and responsive dashboard.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>

            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/markets" className="hover:text-emerald-400 transition">
                  Markets
                </a>
              </li>

              <li>
                <a href="/coins" className="hover:text-emerald-400 transition">
                  Coins
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-emerald-400 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <HiArrowTrendingUp className="text-emerald-400" />
                Live Market Data
              </li>

              <li className="flex items-center gap-2">
                <HiArrowTrendingUp className="text-emerald-400" />
                Price Charts
              </li>

              <li className="flex items-center gap-2">
                <HiArrowTrendingUp className="text-emerald-400" />
                Top Gainers & Losers
              </li>

              <li className="flex items-center gap-2">
                <HiArrowTrendingUp className="text-emerald-400" />
                Market Statistics
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <p className="text-sm">
              Stay connected for the latest crypto updates and project
              improvements.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-emerald-500 flex items-center justify-center transition"
              >
                <FaGithub className="text-lg text-white" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-emerald-500 flex items-center justify-center transition"
              >
                <FaTwitter className="text-lg text-white" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-emerald-500 flex items-center justify-center transition"
              >
                <FaLinkedin className="text-lg text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-500/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-400 font-medium">
              CryptoGraph
            </span>
            . All Rights Reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-emerald-400">React</span> &{" "}
            <span className="text-emerald-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}