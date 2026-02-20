import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { accountData, formatCurrency } from "@/data/accountData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, CheckCircle } from "lucide-react";

const Transfers = () => {
  const [fromAccount, setFromAccount] = useState("checking");
  const [toAccount, setToAccount] = useState("savings");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [success, setSuccess] = useState(false);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setAmount("");
    setMemo("");
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Transfer Money</h1>
          <p className="text-sm text-muted-foreground">Move funds between your accounts</p>
        </div>

        {success && (
          <div className="flex items-center gap-3 bg-success/10 border border-success/20 text-success rounded-lg p-4 animate-fade-in">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Transfer completed successfully!</span>
          </div>
        )}

        <form onSubmit={handleTransfer} className="bg-card border border-border rounded-xl p-6 shadow-card space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">From</label>
            <select
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="checking">{accountData.checking.name} ****{accountData.checking.number} - {formatCurrency(accountData.checking.balance)}</option>
              <option value="savings">{accountData.savings.name} ({accountData.savings.number}) - {formatCurrency(accountData.savings.balance)}</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => { setFromAccount(toAccount); setToAccount(fromAccount); }}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4 text-foreground" />
            </button>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">To</label>
            <select
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="savings">{accountData.savings.name} ****{accountData.savings.number}</option>
              <option value="checking">{accountData.checking.name} ****{accountData.checking.number}</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <Input
                type="number"
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-7"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1.5">Memo (optional)</label>
            <Input value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="Add a note" />
          </div>

          <Button type="submit" className="w-full bg-[#E31837] hover:bg-[#c4162f] text-white">
            Submit Transfer
          </Button>
        </form>

        {/* Transfer History */}
        <div className="bg-card border border-border rounded-xl shadow-card">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Recent Transfers</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { date: "02/15/2026", desc: "Savings → Checking", amount: 5000 },
              { date: "02/01/2026", desc: "Checking → Savings", amount: 10000 },
              { date: "01/20/2026", desc: "Checking → Savings", amount: 25000 },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3.5">
                <div>
                  <p className="text-sm font-medium text-foreground">{t.desc}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span className="text-sm font-semibold text-foreground">{formatCurrency(t.amount)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transfers;
