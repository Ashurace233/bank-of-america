import { ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useNavigate, useLocation, Link } from "react-router-dom";
import {
  Shield, Home, ArrowLeftRight, Receipt, Settings, LogOut,
  CreditCard, PiggyBank, Bell, Search, Menu, X, ChevronDown
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Accounts", icon: Home, path: "/dashboard" },
  { label: "Transfers", icon: ArrowLeftRight, path: "/transfers" },
  { label: "Bill Pay", icon: Receipt, path: "/bill-pay" },
  { label: "Credit Cards", icon: CreditCard, path: "/credit-cards" },
  { label: "Investments", icon: PiggyBank, path: "/investments" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#E31837] tracking-tight">Bank of America</h1>
            <span className="text-sm text-gray-700 font-medium hidden md:inline">Online Banking</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search..."
                className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-md pl-9 pr-4 py-1.5 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-[#E31837] focus:border-[#E31837]"
              />
            </div>
            <button className="relative text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#E31837] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-semibold">3</span>
            </button>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <div className="h-8 w-8 rounded-full bg-[#E31837] flex items-center justify-center font-semibold text-white">
                {user?.name.charAt(0)}
              </div>
              <span className="hidden lg:inline font-medium">{user?.name}</span>
              <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
            </div>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Navigation bar */}
      <nav className="bg-[#E31837] px-4 md:px-6">
        <div className="max-w-7xl mx-auto hidden md:flex items-center gap-1">
          {navItems.map(({ label, icon: Icon, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === path
                  ? "text-white border-b-2 border-white bg-[#C4162F]"
                  : "text-white/90 hover:text-white hover:bg-[#C4162F]"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
          <div className="ml-auto">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-[#C4162F] transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-in">
          {navItems.map(({ label, icon: Icon, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-6 py-3 text-sm ${
                location.pathname === path
                  ? "text-[#E31837] bg-gray-50 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 w-full border-t border-gray-200"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 px-4 md:px-6 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-4 md:px-6 py-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-[#E31837]">Privacy</a>
            <a href="#" className="hover:text-[#E31837]">Security</a>
            <a href="#" className="hover:text-[#E31837]">Your Privacy Choices</a>
          </div>
          <div className="text-gray-600">
            <span>Bank of America, N.A. Member FDIC. </span>
            <a href="#" className="hover:text-[#E31837]">Equal Housing Lender</a>
            <span> © 2025 Bank of America Corporation.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
