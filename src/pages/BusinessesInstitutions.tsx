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
          <div className="w-full bg-gray-200 rounded-lg mb-8 overflow-hidden shadow-lg">
            <img src="/Businesses & Institutions.png" alt="Businesses & Institutions" className="w-full h-auto object-cover" />
          </div>
          <p className="text-gray-600">Corporate banking services...</p>
        </div>
      </section>
    </PublicLayout>
  );
};

export default BusinessesInstitutions;
