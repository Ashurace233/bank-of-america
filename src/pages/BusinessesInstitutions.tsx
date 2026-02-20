import PublicLayout from "@/components/PublicLayout";

const BusinessesInstitutions = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Businesses & Institutions</h1>
          <p className="text-xl text-gray-600">Corporate banking solutions</p>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-500">
            [Businesses & Institutions Image]
          </div>
          <p className="text-gray-600">Corporate banking services...</p>
        </div>
      </section>
    </PublicLayout>
  );
};

export default BusinessesInstitutions;
