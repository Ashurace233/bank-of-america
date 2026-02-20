import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { HelpCircle, Book, MessageSquare, Search } from "lucide-react";

const Help = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">Find answers to common questions</p>
          
          {/* Search */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help topics */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: HelpCircle, title: "Getting Started", desc: "Learn how to use Online Banking" },
              { icon: Book, title: "Account Management", desc: "Manage your accounts and settings" },
              { icon: MessageSquare, title: "Contact Support", desc: "Get help from our team" },
            ].map(({ icon: Icon, title, desc }) => (
              <Link
                key={title}
                to="/help/topics"
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Help;
