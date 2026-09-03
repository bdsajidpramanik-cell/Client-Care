"use client";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const leads = [
  { id: 1, name: "Alice Brown", company: "CloudNine", phone: "+1 555-0101", source: "Website", agent: "Sarah", status: "Qualified", score: 92, lastContact: "Today", nextAction: "Send proposal" },
  { id: 2, name: "Bob White", company: "DataStream", phone: "+1 555-0102", source: "LinkedIn", agent: "Mike", status: "New", score: 45, lastContact: "Yesterday", nextAction: "Initial call" },
  { id: 3, name: "Carol Green", company: "EcoVibe", phone: "+1 555-0103", source: "Referral", agent: "Nora", status: "Won", score: 98, lastContact: "2 days ago", nextAction: "Onboarding" },
];

export default function LeadsPage() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Leads</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input type="text" placeholder="Search leads..." className="bg-surface/40 border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-violet/50" />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-surface/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none">
            {["All", "New", "Contacted", "Qualified", "Won", "Lost"].map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="glass-card p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand-violet/30 transition-all">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-violet/20 flex items-center justify-center text-sm font-bold">{lead.name[0]}</div>
              <div>
                <div className="font-semibold">{lead.name}</div>
                <div className="text-sm text-white/50">{lead.company} • {lead.phone}</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-white/50">Agent: <span className="text-white">{lead.agent}</span></span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                lead.status === "Qualified" ? "bg-green-500/20 text-green-400" :
                lead.status === "Won" ? "bg-blue-500/20 text-blue-400" :
                "bg-yellow-500/20 text-yellow-400"
              }`}>{lead.status}</span>
              <span className="bg-brand-violet/20 px-3 py-1 rounded-full text-xs">Score: {lead.score}</span>
              <span className="text-white/40 text-xs">{lead.nextAction}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
