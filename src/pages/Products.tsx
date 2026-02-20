import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { CreditCard, Home, Car, PiggyBank, Building2, ArrowRight } from "lucide-react";

const productCategories = [
  { name: "Checking & Savings", icon: PiggyBank, path: "/dashboard", desc: "View and manage your deposit accounts" },
  { name: "Credit Cards", icon: CreditCard, path: "/credit-cards", desc: "Manage cards, pay bills, redeem rewards" },
  { name: "Home Loans", icon: Home, path: "/server-error", desc: "Mortgage and home equity" },
  { name: "Auto Loans", icon: Car, path: "/server-error", desc: "Refinance or apply for auto loans" },
  { name: "Investments", icon: PiggyBank, path: "/investments", desc: "Merrill investing and wealth management" },
  { name: "Small Business", icon: Building2, path: "/server-error", desc: "Business banking and lending" },
];

const Products = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Products & Services</h1>
        <p className="text-gray-600 mb-8">Explore and manage your accounts</p>

        <div className="grid gap-4">
          {productCategories.map(({ name, icon: Icon, path, desc }) => (
            <Link
              key={name}
              to={path}
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#E31837]/40 hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-[#012169] flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h2 className="font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
