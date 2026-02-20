import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Homepage from "./pages/Homepage";
import Personal from "./pages/Personal";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transfers from "./pages/Transfers";
import BillPay from "./pages/BillPay";
import CreditCards from "./pages/CreditCards";
import Investments from "./pages/Investments";
import SettingsPage from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Banking from "./pages/Banking";
import CreditCardsPublic from "./pages/CreditCardsPublic";
import Loans from "./pages/Loans";
import InvestmentsPublic from "./pages/InvestmentsPublic";
import Learning from "./pages/Learning";
import ContactUs from "./pages/ContactUs";
import Locations from "./pages/Locations";
import Help from "./pages/Help";
import About from "./pages/About";
import SmallBusiness from "./pages/SmallBusiness";
import WealthManagement from "./pages/WealthManagement";
import BusinessesInstitutions from "./pages/BusinessesInstitutions";
import ServerError from "./pages/ServerError";
import Inbox from "./pages/Inbox";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/credit-cards-public" element={<CreditCardsPublic />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/investments-public" element={<InvestmentsPublic />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/small-business" element={<SmallBusiness />} />
            <Route path="/wealth-management" element={<WealthManagement />} />
            <Route path="/businesses-institutions" element={<BusinessesInstitutions />} />
            <Route path="/server-error" element={<ServerError />} />
            {/* Logged-in routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/bill-pay" element={<BillPay />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
