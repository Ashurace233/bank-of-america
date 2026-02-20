import PublicLayout from "@/components/PublicLayout";

const WealthManagement = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wealth Management</h1>
          <p className="text-xl text-gray-600">Comprehensive wealth management services</p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Wealth Management Image]
          </div>
          <p className="text-gray-600">Wealth management services...</p>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WealthManagement;
