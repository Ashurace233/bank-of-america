import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { Globe, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bank of America</h1>
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
