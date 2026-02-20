import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { Building2, CreditCard, PiggyBank, Shield, ArrowRight, CheckCircle } from "lucide-react";

const SmallBusiness = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Small Business Banking</h1>
          <p className="text-xl text-gray-600 mb-8">
            Banking solutions designed for small businesses. Checking, credit cards, lending, and merchant services.
          </p>
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 overflow-hidden">
            <img src="/small business.png" alt="Small Business Banking" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Solutions for Your Business</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Business Checking", desc: "Accounts with no monthly maintenance fee options and integrated tools.", link: "Learn more" },
              { icon: CreditCard, title: "Business Credit Cards", desc: "Earn rewards and manage expenses with cards built for business.", link: "Compare cards" },
              { icon: PiggyBank, title: "Business Lending", desc: "Lines of credit, term loans, and SBA loans to grow your business.", link: "Explore options" },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link to="/server-error" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                  {item.link} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Business Owners Choose Us</h2>
          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {["No monthly maintenance fee on qualifying Business Advantage Checking", "24/7 online and mobile banking", "Dedicated small business support", "Merchant services and payroll solutions"].map((text) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Open a Business Account</h2>
          <p className="text-gray-600 mb-6">Apply online or schedule an appointment at a financial center.</p>
          <Link to="/server-error" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default SmallBusiness;
