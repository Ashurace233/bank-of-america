import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { Globe, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <PublicLayout showLogin={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#012169] to-[#003DA5] text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Bank of America</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            At Bank of America, we're committed to helping make financial lives better through the power of every connection. Learn how we're empowering our clients, employees, and communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            We serve individuals, small businesses, and large corporations with banking, investing, and financial solutions.
          </p>
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert About Us Hero Image Here]
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Company</h2>
          <p className="text-gray-600 mb-6">
            Bank of America is one of the world’s leading financial institutions, serving individual consumers, small and middle-market businesses, and large corporations with a full range of banking, investing, asset management, and other financial and risk management products and services.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            <li>Deliver together</li>
            <li>Act responsibly</li>
            <li>Realize the power of our people</li>
            <li>Trust the team</li>
            <li>Embrace the future</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">At a Glance</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Globe, title: "Global presence", desc: "Serving clients in the U.S. and around the world." },
              { icon: Users, title: "Our people", desc: "Dedicated to responsible growth and inclusion." },
              { icon: Heart, title: "Community", desc: "Investing in communities through grants and volunteerism." },
              { icon: Award, title: "Recognition", desc: "A leader in sustainability and corporate responsibility." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Background Commitment Section */}
      <section className="bg-gradient-to-r from-[#012169] to-[#003DA5] text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-lg text-blue-100 mb-8">
            At Bank of America, we're committed to helping make financial lives better through the power of every connection. Learn how we're empowering our clients, employees, and communities to achieve new possibilities.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Financial Empowerment</h3>
              <p className="text-blue-100">
                We provide tools, resources, and expert guidance to help our clients make informed financial decisions and achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-blue-100">
                Through our Community Reinvestment Act programs, we invest in housing, small business, and community development initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Growth</h3>
              <p className="text-blue-100">
                We're committed to responsible growth that creates long-term value for shareholders while managing environmental and social risks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Diversity & Inclusion</h3>
              <p className="text-blue-100">
                We foster a culture where diverse perspectives are valued and every employee can bring their authentic selves to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact & Resources</h2>
            <p className="text-gray-600 mb-4">
              For media, investors, and career information, visit our corporate site or contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us" className="text-[#012169] font-medium hover:underline">Contact Us</Link>
              <Link to="/locations" className="text-[#012169] font-medium hover:underline">Find a Location</Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
