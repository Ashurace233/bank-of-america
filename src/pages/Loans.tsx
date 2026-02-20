import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { Home, Car, DollarSign, ArrowRight } from "lucide-react";

const Loans = () => {
  return (
    <PublicLayout activeTab="Loans">
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loans</h1>
          <p className="text-xl text-gray-600 mb-8">Financing solutions for your goals</p>
          
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert Loans Hero Image Here]
          </div>
        </div>
      </section>

      {/* Loan types */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Home Loans",
                desc: "Mortgage and refinancing options",
                image: "[Home Loan Image]",
              },
              {
                icon: Car,
                title: "Auto Loans",
                desc: "Competitive rates for new and used vehicles",
                image: "[Auto Loan Image]",
              },
              {
                icon: DollarSign,
                title: "Personal Loans",
                desc: "Flexible financing for your needs",
                image: "[Personal Loan Image]",
              },
            ].map((loan) => (
              <div key={loan.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {loan.image}
                </div>
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <loan.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{loan.title}</h2>
                <p className="text-gray-600 mb-4">{loan.desc}</p>
                <Link to="/server-error" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to apply?</h2>
          <p className="text-gray-600 mb-6">Get pre-qualified in minutes without impacting your credit score.</p>
          <Link to="/server-error" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Loans;
