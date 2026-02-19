import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { billPayees, formatCurrency } from "@/data/accountData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Plus, Receipt } from "lucide-react";

const BillPay = () => {
  const [selectedPayee, setSelectedPayee] = useState<number | null>(null);
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [success, setSuccess] = useState(false);
  const [showAddPayee, setShowAddPayee] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayee || !amount) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setAmount("");
    setSelectedPayee(null);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Bill Pay</h1>
            <p className="text-sm text-gray-600">Pay your bills quickly and securely</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddPayee(!showAddPayee)}
            className="border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Payee
          </Button>
        </div>

        {success && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 animate-fade-in">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Payment scheduled successfully!</span>
          </div>
        )}

        {showAddPayee && (
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm animate-fade-in space-y-4">
            <h3 className="font-semibold text-gray-900">Add New Payee</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Payee Name" className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
              <Input placeholder="Account Number" className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" />
            </div>
            <div className="flex gap-3">
              <Button size="sm" className="bg-[#E31837] text-white hover:bg-[#C4162F]">Save Payee</Button>
              <Button size="sm" variant="outline" onClick={() => setShowAddPayee(false)} className="border-gray-300">Cancel</Button>
            </div>
          </div>
        )}

        {/* Payees list */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Your Payees</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {billPayees.map((payee) => (
              <div
                key={payee.id}
                onClick={() => { setSelectedPayee(payee.id); setAmount(payee.amount.toString()); }}
                className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-colors ${
                  selectedPayee === payee.id ? "bg-red-50 border-l-2 border-l-[#E31837]" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Receipt className="h-4 w-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{payee.name}</p>
                    <p className="text-xs text-gray-500">Account: {payee.accountNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{formatCurrency(payee.amount)}</p>
                  <p className="text-xs text-gray-500">Due: {payee.nextDue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment form */}
        {selectedPayee && (
          <form onSubmit={handlePay} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4 animate-fade-in">
            <h3 className="font-semibold text-gray-900">
              Pay {billPayees.find(p => p.id === selectedPayee)?.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <Input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="pl-7 border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-1.5">Payment Date</label>
                <Input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} className="border-gray-300 focus:border-[#E31837] focus:ring-[#E31837]" required />
              </div>
            </div>
            <Button type="submit" className="bg-[#E31837] text-white hover:bg-[#C4162F] font-semibold">
              Schedule Payment
            </Button>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BillPay;
