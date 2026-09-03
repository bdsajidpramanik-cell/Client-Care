"use client";
import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";

const appointments = [
  { time: "10:00 AM", customer: "John Doe", agent: "Sarah", type: "AI-Booked", status: "Confirmed" },
  { time: "11:30 AM", customer: "Jane Smith", agent: "Alex", type: "Follow-up", status: "Pending" },
  { time: "2:00 PM", customer: "Mike Johnson", agent: "Nora", type: "Human", status: "Confirmed" },
];

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <div className="flex gap-2">
          <button className="btn-secondary !px-4 !py-1.5 text-sm">Day</button>
          <button className="btn-primary !px-4 !py-1.5 text-sm">Week</button>
          <button className="btn-secondary !px-4 !py-1.5 text-sm">Month</button>
        </div>
      </div>
      <div className="glass-card p-6">
        <div className="text-center text-white/40 mb-6">📅 September 2026 (Visual calendar view coming soon)</div>
        <div className="space-y-3">
          {appointments.map((app, idx) => (
            <div key={idx} className="flex items-center gap-6 p-3 bg-white/5 rounded-xl border border-border/30">
              <div className="flex items-center gap-2 text-sm font-mono"><ClockIcon className="w-4 h-4 text-white/30" /> {app.time}</div>
              <div className="flex-1"><span className="font-medium">{app.customer}</span> <span className="text-sm text-white/40">with {app.agent}</span></div>
              <span className="text-xs bg-brand-violet/20 px-3 py-1 rounded-full">{app.type}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${app.status === "Confirmed" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{app.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
