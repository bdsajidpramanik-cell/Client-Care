"use client";
import { PhoneIcon } from "@heroicons/react/outline";

const calls = [
  { id: 1, customer: "+1 555-0301", agent: "Sarah", duration: "2:34", status: "Completed", intent: "Sales", sentiment: "Positive", time: "10:30 AM" },
  { id: 2, customer: "+1 555-0302", agent: "Alex", duration: "1:15", status: "Missed", intent: "Support", sentiment: "Neutral", time: "09:15 AM" },
];

export default function CallsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Call History</h1>
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-border/50 text-left text-white/40">
            <tr><th className="p-4">Customer</th><th className="p-4">AI Agent</th><th className="p-4">Duration</th><th className="p-4">Status</th><th className="p-4">Intent</th><th className="p-4">Time</th></tr>
          </thead>
          <tbody>
            {calls.map((call) => (
              <tr key={call.id} className="border-b border-border/30 hover:bg-white/5 transition-colors cursor-pointer">
                <td className="p-4 flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-white/30" /> {call.customer}</td>
                <td className="p-4">{call.agent}</td>
                <td className="p-4">{call.duration}</td>
                <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs ${call.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{call.status}</span></td>
                <td className="p-4">{call.intent}</td>
                <td className="p-4 text-white/40">{call.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
