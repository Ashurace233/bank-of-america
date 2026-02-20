import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { CreditCard, Award, Shield, ArrowRight } from "lucide-react";

const CreditCardsPublic = () => {
  return (
    <PublicLayout activeTab="Credit Cards">
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Credit Cards</h1>
          <p className="text-xl text-gray-600 mb-8">Find the perfect card for your lifestyle</p>
          
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert Credit Cards Hero Image Here]
          </div>
        </div>
      </section>

      {/* Featured cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Credit Cards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "BankAmericard Cash Rewards™",
                rewards: "1% cash back everywhere, 2% at grocery, 3% on gas",
                image: "[Cash Rewards Card Image]",
              },
              {
                name: "Bank of America® Travel Rewards",
                rewards: "Unlimited 1.5 points per $1 spent on all purchases",
                image: "[Travel Rewards Card Image]",
              },
              {
                name: "BankAmericard® credit card",
                rewards: "0% intro APR for 18 billing cycles",
                image: "[BankAmericard Image]",
              },
            ].map((card) => (
              <div key={card.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {card.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h3>
                <p className="text-gray-600 mb-4">{card.rewards}</p>
                <Link to="/server-error" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                  Apply now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Card Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Rewards", desc: "Earn cash back, points, or miles on every purchase" },
              { icon: Shield, title: "Security", desc: "Zero liability protection and fraud monitoring" },
              { icon: CreditCard, title: "No Annual Fee", desc: "Many cards with no annual fee" },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check for Personalized Offers</h2>
          <p className="text-gray-600 mb-6">See what credit card offers are available to you.</p>
          <Link to="/server-error" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Check Offers
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default CreditCardsPublic;
