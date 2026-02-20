import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, Shield, ArrowRight } from "lucide-react";

const InvestmentsPublic = () => {
  return (
    <PublicLayout activeTab="Investments">
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investments</h1>
          <p className="text-xl text-gray-600 mb-8">Grow your wealth with Merrill</p>
          
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert Investments Hero Image Here]
          </div>
        </div>
      </section>

      {/* Investment options */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Self-Directed Investing",
                desc: "Trade stocks, ETFs, and more on your own",
                image: "[Self-Directed Image]",
              },
              {
                icon: PieChart,
                title: "Guided Investing",
                desc: "Get personalized investment advice",
                image: "[Guided Investing Image]",
              },
              {
                icon: Shield,
                title: "Wealth Management",
                desc: "Comprehensive financial planning services",
                image: "[Wealth Management Image]",
              },
            ].map((option) => (
              <div key={option.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {option.image}
                </div>
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h2>
                <p className="text-gray-600 mb-4">{option.desc}</p>
                <Link to="/investments-public/learn-more" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start investing today</h2>
          <p className="text-gray-600 mb-6">Open an account and get started with as little as $0.</p>
          <Link to="/investments-public/open-account" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Open an Account
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default InvestmentsPublic;
