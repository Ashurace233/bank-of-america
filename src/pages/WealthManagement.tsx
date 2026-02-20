import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";

const WealthManagement = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wealth Management</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive wealth management and investment services through Merrill. Planning, investing, and advice for individuals and families.
          </p>
          <div className="w-full bg-gray-200 rounded-lg mb-8 overflow-hidden shadow-lg">
            <img src="/wealth management.png" alt="Wealth Management" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Investing", desc: "Portfolio management, stocks, ETFs, and more through Merrill Edge and Merrill Lynch." },
              { icon: Users, title: "Financial Planning", desc: "Goals-based planning for retirement, education, and legacy." },
              { icon: Shield, title: "Private Bank", desc: "Dedicated advisors and tailored solutions for high-net-worth clients." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link to="/server-error" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Merrill</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {["Access to research and insights", "Preferred Rewards benefits", "Integrated banking and investing", "Trust and estate planning support"].map((text) => (
              <li key={text} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#E31837] flex-shrink-0" />
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
          <p className="text-gray-600 mb-6">Connect with a financial advisor to discuss your goals.</p>
          <Link to="/server-error" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Schedule Appointment
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WealthManagement;
