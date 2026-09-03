"use client";

const metrics = [
  { label: "Total Calls", value: "1,284", change: "+12%" },
  { label: "Answered", value: "1,102", change: "+8%" },
  { label: "Avg Duration", value: "3:42", change: "-2%" },
  { label: "Conversion", value: "18.5%", change: "+5%" },
];

const barData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 50 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 20 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card p-4">
            <div className="text-sm text-white/40">{m.label}</div>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-xs text-green-400">{m.change}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Call Volume (Weekly)</h3>
          <div className="flex items-end justify-between h-40 gap-2">
            {barData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-brand-violet/20 rounded-t-lg" style={{ height: `${d.value * 2}px` }}></div>
                <div className="text-xs text-white/40">{d.day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Lead Sources</h3>
          <div className="space-y-3">
            {["Website (40%)", "LinkedIn (25%)", "Referral (20%)", "Cold Call (15%)"].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span className="text-sm w-24">{s.split("(")[0]}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-violet rounded-full" style={{ width: s.match(/\d+/)?.[0] + "%" }}></div>
                </div>
                <span className="text-xs text-white/40">{s.match(/\d+/)?.[0]}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
