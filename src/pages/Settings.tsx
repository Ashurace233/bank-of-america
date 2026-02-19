import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle, User, Bell, Lock, Shield, Smartphone } from "lucide-react";

const SettingsPage = () => {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    statements: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

        {saved && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 animate-fade-in">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Settings saved successfully!</span>
          </div>
        )}

        {/* Profile */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
            <User className="h-4 w-4 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Personal Information</h2>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">Full Name</label>
                <Input defaultValue={user?.name} className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">User ID</label>
                <Input defaultValue={user?.userId} disabled className="bg-gray-100 border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">Email</label>
                <Input defaultValue="jack.white@email.com" className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">Phone</label>
                <Input defaultValue="(555) 123-4567" className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-1.5">Mailing Address</label>
              <Input defaultValue="123 Main Street, New York, NY 10001" className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
            </div>
            <Button onClick={handleSave} className="bg-[#E31837] text-white hover:bg-[#C4162F] font-semibold">Save Changes</Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
            <Bell className="h-4 w-4 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Notifications</h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { key: "email", label: "Email Alerts", desc: "Receive alerts via email" },
              { key: "sms", label: "SMS Alerts", desc: "Get text message notifications" },
              { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
              { key: "statements", label: "E-Statements", desc: "Paperless statement notifications" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    notifications[key as keyof typeof notifications] ? "bg-[#E31837]" : "bg-gray-300"
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    notifications[key as keyof typeof notifications] ? "translate-x-5" : ""
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
            <Shield className="h-4 w-4 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Security</h2>
          </div>
          <div className="p-5 space-y-3">
            {[
              { icon: Lock, label: "Change Password", desc: "Last changed 30 days ago" },
              { icon: Smartphone, label: "Two-Factor Authentication", desc: "Enabled via SMS" },
              { icon: Shield, label: "Security Questions", desc: "3 questions configured" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{label}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-gray-300">Update</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
