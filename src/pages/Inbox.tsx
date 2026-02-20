import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const mockMessages = [
  { id: 1, from: "Bank of America", subject: "Your monthly statement is ready", date: "Feb 18, 2026", unread: true },
  { id: 2, from: "Bank of America", subject: "Security alert: New sign-in", date: "Feb 17, 2026", unread: true },
  { id: 3, from: "Bank of America", subject: "Your payment was received", date: "Feb 15, 2026", unread: false },
  { id: 4, from: "Bank of America", subject: "Account summary", date: "Feb 10, 2026", unread: false },
];

const Inbox = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Inbox</h1>
        <p className="text-gray-600 mb-6">Messages for {user?.name}</p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Messages</span>
            <span className="text-xs text-gray-500">3 unread</span>
          </div>
          <ul className="divide-y divide-gray-200">
            {mockMessages.map((msg) => (
              <li key={msg.id}>
                <Link
                  to="#"
                  className={`flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors ${msg.unread ? "bg-red-50/50" : ""}`}
                >
                  <div className="h-10 w-10 rounded-full bg-[#E31837] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className={`text-sm font-medium truncate ${msg.unread ? "text-gray-900" : "text-gray-600"}`}>
                      {msg.from}
                    </p>
                    <p className={`text-sm truncate ${msg.unread ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                      {msg.subject}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{msg.date}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Secure messages from Bank of America about your accounts appear here.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
