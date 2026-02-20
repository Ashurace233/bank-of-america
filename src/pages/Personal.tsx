import PublicLayout from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, Send, Smartphone, TrendingUp, Lock, DollarSign } from "lucide-react";

const Personal = () => {
  return (
    <PublicLayout showLogin={true}>
      {/* Hero Section - Personal Banking */}
      <section className="bg-gradient-to-r from-[#012169] to-[#003DA5] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Banking made personal</h1>
              <p className="text-lg mb-8 text-blue-100">
                At Bank of America, we're committed to helping make financial lives better through the power of every connection.
              </p>
              <Link to="/login">
                <Button className="bg-[#E31837] hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <img src="/personal.png" alt="Banking Experience" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Banking Solutions</h2>
          <p className="text-gray-600 mb-12">Everything you need for your financial journey</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CreditCard,
                title: "Checking & Savings",
                description: "Flexible accounts that work for you",
                link: "/banking"
              },
              {
                icon: CreditCard,
                title: "Credit Cards",
                description: "Earn rewards on your everyday spending",
                link: "/credit-cards-public"
              },
              {
                icon: DollarSign,
                title: "Loans",
                description: "Auto loans, home loans, and more",
                link: "/loans"
              },
              {
                icon: TrendingUp,
                title: "Investments",
                description: "Grow your wealth with expert guidance",
                link: "/investments-public"
              },
              {
                icon: Send,
                title: "Money Transfers",
                description: "Send money fast and securely",
                link: "/transfers"
              },
              {
                icon: Lock,
                title: "Security",
                description: "Your accounts protected 24/7",
                link: "/help"
              }
            ].map((product) => (
              <Link key={product.title} to={product.link} className="block h-full">
                <div className="border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-[#E31837] flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Learn & Grow</h2>
          <p className="text-gray-600 mb-12">Financial education to help you succeed</p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Education</h3>
              <p className="text-gray-600 mb-4">Learn about investing, budgeting, and making smart financial decisions.</p>
              <Link to="/learning" className="text-[#012169] font-medium hover:underline">
                Explore Learning Center →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manage Your Account</h3>
              <p className="text-gray-600 mb-4">Access tools to track spending, set goals, and stay secure.</p>
              <Link to="/login" className="text-[#012169] font-medium hover:underline">
                Go to Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Banking On the Go</h2>
              <p className="text-gray-600 mb-6">
                Download our mobile app for convenient banking anytime, anywhere. Check balances, transfer money, pay bills, and more.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
            <div className="rounded-lg h-80 overflow-hidden">
              <img src="/personal2.png" alt="Mobile Banking Experience" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Personal;
