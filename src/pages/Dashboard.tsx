import DashboardLayout from "@/components/DashboardLayout";
import { accountData, transactions, formatCurrency } from "@/data/accountData";
import { useAuth } from "@/contexts/AuthContext";
import {
  ArrowUpRight, ArrowDownLeft, ChevronRight, Send,
  DollarSign, TrendingUp, Eye, EyeOff
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
        {/* Greeting card - Hello [Name], Life Plan, My Rewards */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Hello, {user?.name.split(" ")[0]}
            </h1>
            <p className="text-sm text-gray-500 mb-4">Preferred Rewards Gold Member</p>
            {/* Optional: Add image placeholder here if needed */}
            {/* <div className="w-full h-32 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400 text-xs">[Life Plan Image]</div> */}
            <div className="space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-[#012169]" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">Bank of America Life Plan®</p>
                    <p className="text-xs text-gray-500">Your next steps are ready. Let&apos;s go!</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#E31837]" />
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors group"
              >
                <p className="font-semibold text-gray-900 text-sm">My Rewards</p>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#E31837]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bank of America accounts section - single user's accounts only */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#E31837] px-4 sm:px-6 py-3">
            <h2 className="text-lg font-bold text-white">Bank of America</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { name: accountData.checking.name, number: accountData.checking.number, balance: accountData.checking.balance },
              { name: accountData.savings.name, number: accountData.savings.number, balance: accountData.savings.balance },
            ].map((account) => (
              <div
                key={account.number}
                className="flex items-center justify-between px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{account.name} ****{account.number}</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    {showBalances
                      ? formatCurrency(account.balance)
                      : "••••••••"}
                  </p>
                </div>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                >
                  VIEW
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Net Worth / Summary card - BoA Dashboard style */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="border-t-2 border-[#E31837] p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Net Worth¹</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {showBalances ? formatCurrency(accountData.totalBalance) : "••••••••"}
                </p>
              </div>
              <button
                onClick={() => setShowBalances(!showBalances)}
                className="flex items-center gap-2 text-sm text-[#012169] hover:underline"
              >
                {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showBalances ? "Hide" : "Show"}
              </button>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 mt-2" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Transfer Money", path: "/transfers", icon: ArrowUpRight },
            { label: "Pay Bills", path: "/bill-pay", icon: DollarSign },
            { label: "View Statements", path: "/dashboard", icon: TrendingUp },
            { label: "Account Settings", path: "/settings", icon: Eye },
          ].map(({ label, path, icon: Icon }) => (
            <Link
              key={label}
              to={path}
              className="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#E31837]/40 hover:shadow-md transition-all text-center"
            >
              <Icon className="h-6 w-6 text-[#E31837]" />
              <span className="text-xs font-medium text-gray-900">{label}</span>
            </Link>
          ))}
        </div>

        {/* Recent Activity - BofA Account Activity style */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-900">BofA Checking: Account Activity</h2>
            <p className="text-sm text-gray-600 mt-1">
              Balance Summary: {showBalances ? formatCurrency(accountData.checking.balance) : "••••••••"} (available as of today)
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-900 bg-gray-100 border-b border-gray-200">
                  <th className="px-4 py-3">Posting Date</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3 text-right">Available Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{tx.date}</td>
                    <td className="px-4 py-3 text-gray-900">{tx.description}</td>
                    <td className="px-4 py-3 text-gray-600">C</td>
                    <td className={`px-4 py-3 text-right font-medium ${
                      tx.type === "credit" ? "text-green-600" : "text-gray-900"
                    }`}>
                      {tx.type === "credit" ? "+" : ""}{formatCurrency(Math.abs(tx.amount))}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <Link to="/dashboard" className="text-sm text-[#012169] font-medium hover:underline">
              View All Transactions
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
