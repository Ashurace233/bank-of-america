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
            <h1 className="text-2xl font-semibold text-foreground">Bill Pay</h1>
            <p className="text-sm text-muted-foreground">Pay your bills quickly and securely</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddPayee(!showAddPayee)}
            className="border-[#012169] text-[#012169] hover:bg-[#012169] hover:text-white"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Payee
          </Button>
        </div>

        {success && (
          <div className="flex items-center gap-3 bg-success/10 border border-success/20 text-success rounded-lg p-4 animate-fade-in">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Payment scheduled successfully!</span>
          </div>
        )}

        {showAddPayee && (
          <div className="bg-card border border-border rounded-xl p-5 shadow-card animate-fade-in space-y-4">
            <h3 className="font-semibold text-foreground">Add New Payee</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Payee Name" />
              <Input placeholder="Account Number" />
            </div>
            <div className="flex gap-3">
              <Button size="sm" className="bg-[#E31837] hover:bg-[#c4162f] text-white">Save Payee</Button>
              <Button size="sm" variant="outline" onClick={() => setShowAddPayee(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {/* Payees list */}
        <div className="bg-card border border-border rounded-xl shadow-card">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Your Payees</h2>
          </div>
          <div className="divide-y divide-border">
            {billPayees.map((payee) => (
              <div
                key={payee.id}
                onClick={() => { setSelectedPayee(payee.id); setAmount(payee.amount.toString()); }}
                className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-colors ${
                  selectedPayee === payee.id ? "bg-red-50 border-l-2 border-l-[#E31837]" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                    <Receipt className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{payee.name}</p>
                    <p className="text-xs text-muted-foreground">Account: {payee.accountNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{formatCurrency(payee.amount)}</p>
                  <p className="text-xs text-muted-foreground">Due: {payee.nextDue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment form */}
        {selectedPayee && (
          <form onSubmit={handlePay} className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4 animate-fade-in">
            <h3 className="font-semibold text-foreground">
              Pay {billPayees.find(p => p.id === selectedPayee)?.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="pl-7" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Payment Date</label>
                <Input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} required />
              </div>
            </div>
            <Button type="submit" className="bg-[#E31837] hover:bg-[#c4162f] text-white">
              Schedule Payment
            </Button>
          </form>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BillPay;
