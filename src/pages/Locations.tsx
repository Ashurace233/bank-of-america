import PublicLayout from "@/components/PublicLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const Locations = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Location</h1>
          <p className="text-xl text-gray-600 mb-8">Locate ATMs and financial centers near you</p>
          
          {/* Search */}
          <div className="max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter city, state or ZIP code"
                  className="pl-10 border-gray-300"
                />
              </div>
              <Button className="bg-[#E31837] hover:bg-[#c4162f] text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Insert Map Here]
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Locations;
