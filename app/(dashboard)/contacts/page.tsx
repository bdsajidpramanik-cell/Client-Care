"use client";
import { useState } from "react";
import { UserAddIcon } from "@heroicons/react/outline";

const contacts = [
  { id: 1, name: "Dr. Emily Carter", email: "emily@medcore.com", phone: "+1 555-0201", company: "MedCore", lastActivity: "1 day ago" },
  { id: 2, name: "Frank Wilson", email: "frank@buildright.com", phone: "+1 555-0202", company: "BuildRight", lastActivity: "3 hours ago" },
];

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <button className="btn-primary flex items-center gap-2">
          <UserAddIcon className="w-5 h-5" /> Add Contact
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((c) => (
          <div key={c.id} className="glass-card p-6 text-center hover:border-brand-violet/30 transition-all">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-violet to-brand-blue mx-auto flex items-center justify-center text-2xl font-bold mb-4">{c.name[0]}</div>
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <p className="text-sm text-white/50">{c.role || "Customer"}</p>
            <div className="mt-4 text-sm space-y-1 text-white/60">
              <p>{c.email}</p>
              <p>{c.phone}</p>
              <p className="text-xs text-white/30">Last activity: {c.lastActivity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
