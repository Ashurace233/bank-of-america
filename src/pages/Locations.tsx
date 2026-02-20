import PublicLayout from "@/components/PublicLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Locations = () => {
  return (
    <PublicLayout>
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Location</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find ATMs and financial centers. Use our locator to search by city, state, or ZIP code.
          </p>

          <div className="max-w-2xl mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter city, state or ZIP code"
                  className="pl-10 border-gray-300 h-11"
                />
              </div>
              <Button className="bg-[#E31837] hover:bg-[#c4162f] text-white h-11 px-6">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">More search options available after search.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-8">
            [Insert Map Here – Replace with your map widget or image]
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Centers & ATMs</h2>
          <p className="text-gray-600 mb-6">
            Bank of America has thousands of financial centers and ATMs nationwide. Use the search above to find locations near you. Many locations offer extended hours and weekend availability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#E31837]" />
                <h3 className="font-semibold text-gray-900">Financial Centers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">Full-service banking, notary, and appointments.</p>
              <Link to="/server-error" className="text-[#012169] text-sm font-medium hover:underline">Find locations</Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#E31837]" />
                <h3 className="font-semibold text-gray-900">ATM Locator</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">Deposit, withdraw, and more at ATMs nationwide.</p>
              <Link to="/server-error" className="text-[#012169] text-sm font-medium hover:underline">Find ATMs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule an Appointment</h2>
          <p className="text-gray-600 mb-6">Book a time to meet with a specialist at a financial center.</p>
          <Link to="/server-error" className="bg-[#E31837] hover:bg-[#c4162f] text-white px-6 py-3 rounded font-semibold inline-block">
            Schedule Appointment
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Locations;
