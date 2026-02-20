import DashboardLayout from "@/components/DashboardLayout";
import { CreditCard as CardIcon, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "@/data/accountData";
import { Button } from "@/components/ui/button";

const CreditCards = () => {
  const [showNumber, setShowNumber] = useState(false);

  const card = {
    name: "BankAmericard Cash Rewards™",
    number: "4532 •••• •••• 8847",
    fullNumber: "4532 7891 2345 8847",
    expiry: "09/28",
    balance: 3420.56,
    limit: 50000,
    available: 46579.44,
    rewards: 24850,
    apr: "16.99%",
    minPayment: 85.00,
    dueDate: "03/05/2026",
  };

  const recentCharges = [
    { date: "02/18/2026", desc: "Delta Airlines", amount: 1250.00 },
    { date: "02/16/2026", desc: "The Ritz-Carlton", amount: 890.00 },
    { date: "02/14/2026", desc: "Apple Store", amount: 999.00 },
    { date: "02/12/2026", desc: "Nordstrom", amount: 245.56 },
    { date: "02/10/2026", desc: "Whole Foods", amount: 36.00 },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Credit Cards</h1>

        {/* Card visual - BankAmericard Cash Rewards style (red/blue diagonal stripes) */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[1.586/1] max-h-48 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
          {/* Diagonal stripes - Bank of America card style */}
          <div className="absolute inset-0 opacity-90">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E31837] via-[#012169] to-[#E31837]" />
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                135deg,
                transparent,
                transparent 8px,
                rgba(255,255,255,0.03) 8px,
                rgba(255,255,255,0.03) 16px
              )`,
            }} />
          </div>
          <div className="relative p-6 h-full flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">{card.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider">VISA</span>
                <CardIcon className="h-6 w-6 text-white/80" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-lg tracking-[0.2em] font-mono">
                  {showNumber ? card.fullNumber : card.number}
                </p>
                <button
                  onClick={() => setShowNumber(!showNumber)}
                  className="text-white/80 hover:text-white"
                >
                  {showNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[10px] text-white/60 uppercase">Expires</p>
                  <p className="text-sm font-medium">{card.expiry}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/60 uppercase">Cardholder</p>
                  <p className="text-sm font-medium">JACK L WHITE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Placeholder: Add your card image at /public/card-rewards.png for a photo-realistic card */}
        <p className="text-xs text-gray-500 text-center">
          Tip: Add <code className="bg-gray-100 px-1 rounded">/public/card-rewards.png</code> for a custom card image
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Current Balance", value: formatCurrency(card.balance) },
            { label: "Available Credit", value: formatCurrency(card.available) },
            { label: "Reward Points", value: card.rewards.toLocaleString() },
            { label: "Min Payment Due", value: formatCurrency(card.minPayment) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-xs text-gray-500 mb-1">{label}</p>
              <p className="text-lg font-semibold text-gray-900">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="bg-[#E31837] hover:bg-[#c4162f] text-white">Make a Payment</Button>
          <Button variant="outline" className="border-[#012169] text-[#012169] hover:bg-[#012169] hover:text-white">
            Redeem Rewards
          </Button>
          <Button variant="outline" className="border-gray-300">
            <Lock className="h-4 w-4 mr-1" /> Lock Card
          </Button>
        </div>

        {/* Recent charges */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900">Recent Charges</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentCharges.map((c, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{c.desc}</p>
                  <p className="text-xs text-gray-500">{c.date}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">{formatCurrency(c.amount)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreditCards;
