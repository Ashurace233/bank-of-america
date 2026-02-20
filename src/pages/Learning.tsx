import PublicLayout from "@/components/PublicLayout";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";

const Learning = () => {
  return (
    <PublicLayout activeTab="Learning">
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Better Money Habits®</h1>
          <p className="text-xl text-gray-600 mb-8">Free financial education to help you make smarter decisions</p>
          
          {/* Image placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert Learning Hero Image Here]
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Saving & Budgeting",
                desc: "Learn how to save money and create a budget",
                image: "[Saving Image]",
              },
              {
                icon: GraduationCap,
                title: "Credit & Debt",
                desc: "Understand credit scores and manage debt",
                image: "[Credit Image]",
              },
              {
                icon: TrendingUp,
                title: "Investing",
                desc: "Get started with investing basics",
                image: "[Investing Image]",
              },
            ].map((topic) => (
              <div key={topic.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                  {topic.image}
                </div>
                <div className="h-12 w-12 rounded-full bg-[#E31837] flex items-center justify-center mb-4">
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
                <p className="text-gray-600 mb-4">{topic.desc}</p>
                <Link to="/server-error" className="text-[#012169] font-medium hover:underline inline-flex items-center gap-2">
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Learning;
