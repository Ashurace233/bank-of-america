import DashboardLayout from "@/components/DashboardLayout";
import { accountData, transactions, formatCurrency } from "@/data/accountData";
import { useAuth } from "@/contexts/AuthContext";
import {
  ArrowUpRight, ArrowDownLeft, TrendingUp, Eye, EyeOff,
  ArrowLeftRight, Receipt, FileText, Settings2
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [showBalances, setShowBalances] = useState(true);

  const recentTransactions = transactions.slice(0, 6);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Good morning, {user?.name.split(" ")[0]}</h1>
            <p className="text-sm text-gray-600">Here's your financial overview</p>
          </div>
          <button
            onClick={() => setShowBalances(!showBalances)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showBalances ? "Hide" : "Show"} Balances
          </button>
        </div>

        {/* Total Balance Card */}
        <div className="bg-[#E31837] rounded-lg p-6 text-white shadow-md">
          <p className="text-sm text-white/80 mb-1">Total Balance</p>
          <p className="text-3xl font-bold mb-4">
            {showBalances ? formatCurrency(accountData.totalBalance) : "••••••••"}
          </p>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <TrendingUp className="h-4 w-4" />
            <span>+2.4% from last month</span>
          </div>
        </div>

        {/* Account Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {[accountData.checking, accountData.savings].map((account) => (
            <div key={account.number} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">{account.name}</p>
                  <p className="text-xs text-gray-500">{account.number}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full capitalize font-medium">{account.type}</span>
              </div>
              <p className="text-2xl font-semibold text-gray-900 mb-1">
                {showBalances ? formatCurrency(account.balance) : "••••••"}
              </p>
              <p className="text-xs text-gray-600">Available: {showBalances ? formatCurrency(account.available) : "••••••"}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Transfer Money", path: "/transfers", icon: ArrowLeftRight },
            { label: "Pay Bills", path: "/bill-pay", icon: Receipt },
            { label: "View Statements", path: "/dashboard", icon: FileText },
            { label: "Account Settings", path: "/settings", icon: Settings2 },
          ].map(({ label, path, icon: Icon }) => (
            <Link
              key={label}
              to={path}
              className="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#E31837]/30 transition-all text-center"
            >
              <Icon className="h-5 w-5 text-[#E31837]" />
              <span className="text-xs font-medium text-gray-900">{label}</span>
            </Link>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Link to="/dashboard" className="text-sm text-[#E31837] hover:underline font-medium">View All</Link>
          </div>
          <div className="divide-y divide-gray-200">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    tx.type === "credit" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-600"
                  }`}>
                    {tx.type === "credit" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{tx.description}</p>
                    <p className="text-xs text-gray-500">{tx.date} • {tx.category}</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold ${tx.type === "credit" ? "text-green-600" : "text-gray-900"}`}>
                  {tx.type === "credit" ? "+" : ""}{formatCurrency(Math.abs(tx.amount))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
