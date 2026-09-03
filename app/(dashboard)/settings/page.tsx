"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [tab, setTab] = useState("Profile");
  const tabs = ["Profile", "Business", "AI Employees", "Voice", "Team", "Integrations", "Security", "Billing"];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="flex flex-wrap gap-2 border-b border-border/50 pb-4">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-xl text-sm transition-all ${tab === t ? "bg-brand-violet/20 text-white border border-brand-violet/30" : "text-white/50 hover:text-white"}`}>{t}</button>
        ))}
      </div>
      <div className="glass-card p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">{tab}</h2>
        {tab === "Profile" && (
          <div className="space-y-4">
            <div><label className="block text-sm text-white/60 mb-1">Full Name</label><input type="text" defaultValue="Sajid Pramanik" className="w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5" /></div>
            <div><label className="block text-sm text-white/60 mb-1">Email</label><input type="email" defaultValue="sajid@pramanikgroup.com" className="w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5" /></div>
            <button className="btn-primary">Save Changes</button>
          </div>
        )}
        {tab !== "Profile" && <div className="text-center text-white/30 py-10">{tab} settings will be available in the production version.</div>}
      </div>
    </div>
  );
}
