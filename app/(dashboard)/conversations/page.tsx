"use client";
import { useState } from "react";
import { SearchIcon, FilterIcon } from "@heroicons/react/outline";

const conversations = [
  {
    id: 1,
    customer: "John Doe",
    company: "Acme Corp",
    agent: "Sarah",
    lastMessage: "I need help with my order #1234",
    time: "2 min ago",
    status: "Active",
    intent: "Support",
    sentiment: "Neutral",
  },
  {
    id: 2,
    customer: "Jane Smith",
    company: "TechStart",
    agent: "Alex",
    lastMessage: "Can you schedule a demo for next week?",
    time: "15 min ago",
    status: "Resolved",
    intent: "Sales",
    sentiment: "Positive",
  },
  {
    id: 3,
    customer: "Mike Johnson",
    company: "FinanceHub",
    agent: "Nora",
    lastMessage: "I want to cancel my subscription.",
    time: "1 hour ago",
    status: "Active",
    intent: "Retention",
    sentiment: "Negative",
  },
];

export default function ConversationsPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Conversations</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-surface/40 border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm w-60 focus:outline-none focus:border-brand-violet/50 transition-colors"
            />
          </div>
          <button className="btn-secondary !px-3 !py-2.5">
            <FilterIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border/50">
              <tr className="text-left text-white/40">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">AI Agent</th>
                <th className="p-4 font-medium">Last Message</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Intent</th>
                <th className="p-4 font-medium">Sentiment</th>
                <th className="p-4 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {conversations.map((conv) => (
                <tr
                  key={conv.id}
                  className="border-b border-border/30 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="p-4">
                    <div className="font-medium">{conv.customer}</div>
                    <div className="text-xs text-white/40">{conv.company}</div>
                  </td>
                  <td className="p-4">{conv.agent}</td>
                  <td className="p-4 max-w-xs truncate">{conv.lastMessage}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        conv.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {conv.status}
                    </span>
                  </td>
                  <td className="p-4">{conv.intent}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        conv.sentiment === "Positive"
                          ? "bg-green-500/20 text-green-400"
                          : conv.sentiment === "Negative"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {conv.sentiment}
                    </span>
                  </td>
                  <td className="p-4 text-white/40">{conv.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
