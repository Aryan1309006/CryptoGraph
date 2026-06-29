import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaBitcoin } from "react-icons/fa";
import { useCryptoContext } from "../context/Cryptocontext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/Features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "#" },
];


export default function Navbar() {
  const { currency, setCurrency } = useCryptoContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("crypto-theme") !== "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("crypto-theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("crypto-theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl border-b border-emerald-500/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 text-slate-100">
        <a
          href="#"
          className="flex items-center gap-3 rounded-2xl bg-slate-900/70 px-3 py-2 transition hover:bg-slate-900"
        >
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaBitcoin className="text-emerald-400" />
              <span>
                Crypto<span className="text-emerald-400">Graph</span>
              </span>
            </div>
          
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-200 transition hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <select className="border-none"
  value={currency.name}
  onChange={(e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;

      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;

      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;

      default:
        break;
    }
  }}
>
  <option value="usd" className="bg-slate-900 text-white border-none" >USD</option>
  <option value="inr" className="bg-slate-900 text-white border-none" >INR</option>
  <option value="eur" className="bg-slate-900 text-white border-none" >EUR</option>
</select>
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-emerald-400/40 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#"
            className="rounded-2xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-5 py-5">
          <div className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 transition hover:border-emerald-400/40 hover:text-emerald-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light mode" : "Dark mode"}
            </button>

            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-slate-950 font-semibold transition hover:bg-emerald-400"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
