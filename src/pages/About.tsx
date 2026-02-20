import PublicLayout from "@/components/PublicLayout";

const About = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bank of America</h1>
          <p className="text-xl text-gray-600">Serving individuals, small businesses and large corporations</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Insert About Us Image Here]
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Bank of America is one of the world's leading financial institutions, serving individual consumers, 
              small and middle-market businesses and large corporations with a full range of banking, investing, 
              asset management and other financial and risk management products and services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Deliver together</li>
              <li>Act responsibly</li>
              <li>Realize the power of our people</li>
              <li>Trust the team</li>
              <li>Embrace the future</li>
            </ul>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
