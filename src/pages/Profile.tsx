import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Phone, MapPin, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile & Settings</h1>
        <p className="text-gray-600 mb-8">Manage your personal information and preferences</p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-[#E31837] flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.charAt(0) || "?"}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
              <p className="text-sm text-gray-500">Online ID: {user?.userId}</p>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            <Link to="/settings" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <User className="h-5 w-5 text-gray-500" />
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Personal Information</p>
                <p className="text-sm text-gray-500">Name, address, phone, email</p>
              </div>
              <span className="text-gray-400">›</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <Shield className="h-5 w-5 text-gray-500" />
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Security & Privacy</p>
                <p className="text-sm text-gray-500">Password, security questions, saved devices</p>
              </div>
              <span className="text-gray-400">›</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Notifications</p>
                <p className="text-sm text-gray-500">Alerts, statements, marketing preferences</p>
              </div>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
