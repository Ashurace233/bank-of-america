import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { CreditCard, PiggyBank, Smartphone, Shield, ArrowRight } from "lucide-react";

const Banking = () => {
  return (
    <PublicLayout activeTab="Banking">
      {/* Hero section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Banking Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">Find the right account for your needs</p>
          
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert Banking Hero Image Here]
          </div>
        </div>
      </section>

      {/* Account types */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                [Checking Account Image]
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Checking Accounts</h2>
              <p className="text-gray-600 mb-4">Choose from a variety of checking accounts designed to fit your lifestyle.</p>
              <Link to="/banking/checking" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                [Savings Account Image]
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Savings & CDs</h2>
              <p className="text-gray-600 mb-4">Grow your savings with competitive rates and flexible options.</p>
              <Link to="/banking/savings" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                [Online Banking Image]
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Online & Mobile Banking</h2>
              <p className="text-gray-600 mb-4">Bank anytime, anywhere with our secure digital banking platform.</p>
              <Link to="/login" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Bank with Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "FDIC Insured", desc: "Your deposits are protected up to $250,000" },
              { icon: Smartphone, title: "Mobile Banking", desc: "Bank on the go with our secure app" },
              { icon: CreditCard, title: "Debit Cards", desc: "Free debit card with every checking account" },
              { icon: PiggyBank, title: "No Monthly Fees", desc: "Many accounts with no monthly maintenance fees" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="h-16 w-16 rounded-full bg-[#E31837] flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Open an account online in minutes or visit a financial center near you.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/login" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold">
              Open an Account
            </Link>
            <Link to="/locations" className="border-2 border-[#012169] text-[#012169] px-6 py-3 rounded font-semibold hover:bg-[#012169] hover:text-white">
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Banking;
