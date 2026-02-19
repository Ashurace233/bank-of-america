import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle, Smartphone } from "lucide-react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saveUserId, setSaveUserId] = useState(false);
  const [showUserIdHelp, setShowUserIdHelp] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const userIdLength = userId.trim().length;
  const canEnablePassword = userIdLength >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId.trim()) {
      setError("User ID Must be at least 6 characters long");
      return;
    }
    if (userIdLength < 6) {
      setError("User ID Must be at least 6 characters long");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      return;
    }
    const success = login(userId, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid User ID or Password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#E31837] tracking-tight">Bank of America</h1>
              <span className="text-sm text-gray-700 font-medium">Log In</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600">Secure Area</span>
              <a href="#" className="text-[#E31837] hover:underline">En español</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-start justify-center py-12 px-6">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Log In to Online Banking</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User ID Field */}
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-900 mb-2">
                User ID
              </label>
              <Input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  setError("");
                }}
                className="w-full h-10 border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]"
                placeholder=""
                autoFocus
              />
              {error && userIdLength < 6 && (
                <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
              )}
            </div>

            {/* Save User ID */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="saveUserId"
                checked={saveUserId}
                onCheckedChange={(checked) => setSaveUserId(checked as boolean)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <label htmlFor="saveUserId" className="text-sm text-gray-700 cursor-pointer">
                  Save this User ID
                </label>
                <button
                  type="button"
                  onClick={() => setShowUserIdHelp(!showUserIdHelp)}
                  className="ml-2 text-sm text-[#E31837] hover:underline inline-flex items-center gap-1"
                >
                  Online ID Help
                  <HelpCircle className="h-3.5 w-3.5" />
                </button>
                {showUserIdHelp && (
                  <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 space-y-2">
                    <p className="font-semibold">How does "Save this User ID" work?</p>
                    <p>Saving your User ID means you don't have to enter it every time you log in.</p>
                    <p className="font-semibold">Don't save on a public computer</p>
                    <p>Only save your User ID on your personal computer or mobile device.</p>
                    <p className="font-semibold">How to clear a saved User ID</p>
                    <p>To clear a saved User ID, log in and select <strong>Saved User IDs</strong> from <strong>Profile and Settings.</strong></p>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  disabled={!canEnablePassword}
                  className={`w-full h-10 border-gray-300 focus:border-[#E31837] focus:ring-[#E31837] ${!canEnablePassword ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}`}
                  placeholder={!canEnablePassword ? "Password is unavailable. Please enter atleast 6 characters of online id to enable Passcode" : ""}
                />
              </div>
              {error && userIdLength >= 6 && (
                <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div>
              <a href="#" className="text-sm text-[#E31837] hover:underline">
                Forgot your Password?
              </a>
            </div>

            {/* Login Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                className="w-full bg-[#E31837] hover:bg-[#C4162F] text-white font-semibold py-2.5 h-11 text-base"
              >
                Log In
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-11 text-base"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Log In with mobile app
              </Button>
            </div>
          </form>

          {/* Mobile App Promotion */}
          <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-md">
            <div className="flex items-start gap-3">
              <Smartphone className="h-6 w-6 text-[#E31837] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 text-base">Stay connected with our app</h3>
                <p className="text-sm text-gray-700 mb-3">Secure, convenient banking anytime</p>
                <a href="#" className="text-sm text-[#E31837] hover:underline font-medium">
                  Get the app
                </a>
              </div>
            </div>
          </div>

          {/* Login Help */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Login help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#E31837] hover:underline">
                  Problem logging in?
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E31837] hover:underline">
                  Forgot ID/Password?
                </a>
              </li>
            </ul>
          </div>

          {/* Not using Online Banking */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Not using Online Banking?</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#E31837] hover:underline">
                  Enroll now for online Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E31837] hover:underline">
                  Learn more about Online Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E31837] hover:underline">
                  Service Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#E31837]">Privacy</a>
              <a href="#" className="hover:text-[#E31837]">Security</a>
              <a href="#" className="hover:text-[#E31837]">Your Privacy Choices</a>
            </div>
            <div className="text-gray-600">
              <span>Bank of America, N.A. Member FDIC. </span>
              <a href="#" className="hover:text-[#E31837]">Equal Housing Lender</a>
              <span> © 2025 Bank of America Corporation.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
