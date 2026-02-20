import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

const ServerError = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowMessage(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {!showMessage ? (
          <>
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#E31837] border-t-transparent mb-6" />
            <p className="text-gray-600">Processing your request...</p>
          </>
        ) : (
          <>
            <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-8 w-8 text-[#E31837]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">We're sorry</h1>
            <p className="text-gray-600 mb-6">
              We're experiencing technical difficulties. Please try again later. If the problem persists, contact customer service.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#012169] hover:bg-[#011a52] text-white px-6 py-3 rounded font-semibold"
            >
              <Home className="h-4 w-4" />
              Return to Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServerError;
