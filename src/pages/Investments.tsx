import DashboardLayout from "@/components/DashboardLayout";
import { formatCurrency } from "@/data/accountData";
import { TrendingUp, TrendingDown, PieChart } from "lucide-react";

const Investments = () => {
  const portfolio = {
    totalValue: 1250000,
    dayChange: 3250.45,
    dayChangePercent: 0.26,
    holdings: [
      { name: "S&P 500 Index Fund", symbol: "VOO", shares: 450, price: 523.40, change: 1.2, value: 235530 },
      { name: "Total Bond Market", symbol: "BND", shares: 800, price: 72.15, change: -0.3, value: 57720 },
      { name: "International Stocks", symbol: "VXUS", shares: 600, price: 58.92, change: 0.8, value: 35352 },
      { name: "Growth ETF", symbol: "VUG", shares: 300, price: 380.25, change: 1.5, value: 114075 },
      { name: "Real Estate Fund", symbol: "VNQ", shares: 200, price: 89.60, change: -0.1, value: 17920 },
      { name: "Money Market", symbol: "VMFXX", shares: 789403, price: 1.00, change: 0, value: 789403 },
    ],
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Investments</h1>

        {/* Portfolio summary */}
        <div className="bg-[#E31837] rounded-lg p-6 text-white shadow-md">
          <p className="text-sm text-white/80 mb-1">Portfolio Value</p>
          <p className="text-3xl font-bold mb-2">{formatCurrency(portfolio.totalValue)}</p>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span className="text-white/90">
              +{formatCurrency(portfolio.dayChange)} ({portfolio.dayChangePercent}%) today
            </span>
          </div>
        </div>

        {/* Allocation */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Stocks", pct: "69%", color: "bg-[#E31837]" },
            { label: "Bonds", pct: "5%", color: "bg-orange-500" },
            { label: "Cash & Equivalents", pct: "26%", color: "bg-green-600" },
          ].map(({ label, pct, color }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${color}`} />
              <div>
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-lg font-semibold text-gray-900">{pct}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Holdings */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
            <PieChart className="h-4 w-4 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Holdings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-500 border-b border-gray-200">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Symbol</th>
                  <th className="px-5 py-3 font-medium text-right">Shares</th>
                  <th className="px-5 py-3 font-medium text-right">Price</th>
                  <th className="px-5 py-3 font-medium text-right">Change</th>
                  <th className="px-5 py-3 font-medium text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {portfolio.holdings.map((h) => (
                  <tr key={h.symbol} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{h.name}</td>
                    <td className="px-5 py-3.5 text-gray-600">{h.symbol}</td>
                    <td className="px-5 py-3.5 text-right text-gray-900">{h.shares.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-right text-gray-900">{formatCurrency(h.price)}</td>
                    <td className={`px-5 py-3.5 text-right font-medium flex items-center justify-end gap-1 ${
                      h.change > 0 ? "text-green-600" : h.change < 0 ? "text-red-600" : "text-gray-500"
                    }`}>
                      {h.change > 0 ? <TrendingUp className="h-3 w-3" /> : h.change < 0 ? <TrendingDown className="h-3 w-3" /> : null}
                      {h.change > 0 ? "+" : ""}{h.change}%
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-gray-900">{formatCurrency(h.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Investments;
