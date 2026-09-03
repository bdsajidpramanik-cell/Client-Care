"use client";
import { PlusIcon } from "@heroicons/react/outline";

export default function AutomationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Automation Workflows</h1>
        <button className="btn-primary flex items-center gap-2"><PlusIcon className="w-5 h-5" /> New Workflow</button>
      </div>
      <div className="glass-card p-6 flex flex-col items-center justify-center min-h-[300px]">
        <div className="bg-surface/40 p-8 rounded-2xl border border-border/50 w-full max-w-3xl">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="bg-brand-violet/20 px-4 py-2 rounded-xl border border-brand-violet/30 text-sm">🔵 New Lead</div>
            <div className="text-white/30 text-2xl">↓</div>
            <div className="bg-brand-blue/20 px-4 py-2 rounded-xl border border-brand-blue/30 text-sm">🤖 AI Call</div>
            <div className="text-white/30 text-2xl">↓</div>
            <div className="bg-yellow-500/20 px-4 py-2 rounded-xl border border-yellow-500/30 text-sm">⚡ Analyze Intent</div>
            <div className="text-white/30 text-2xl">↓</div>
            <div className="flex gap-2">
              <div className="bg-green-500/20 px-4 py-2 rounded-xl border border-green-500/30 text-sm">✅ Book Meeting</div>
              <div className="bg-red-500/20 px-4 py-2 rounded-xl border border-red-500/30 text-sm">❌ Follow Up</div>
            </div>
          </div>
          <div className="mt-6 text-center text-white/40 text-sm">Drag & drop to build complex workflows. (Visual builder coming soon)</div>
        </div>
      </div>
    </div>
  );
}
