import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
        <p className="mb-6 text-xl text-gray-600">Page not found</p>
        <a href="/" className="text-[#012169] font-medium hover:underline">
          Return to Bank of America
        </a>
      </div>
    </div>
  );
};

export default NotFound;
