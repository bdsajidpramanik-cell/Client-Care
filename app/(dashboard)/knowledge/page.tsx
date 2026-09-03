"use client";
import { DocumentAddIcon, SearchIcon } from "@heroicons/react/outline";

const files = [
  { name: "Product Catalog 2025.pdf", type: "PDF", status: "Indexed", chunks: 120, date: "2 days ago" },
  { name: "FAQ_Support.docx", type: "DOCX", status: "Processing", chunks: 45, date: "1 hour ago" },
  { name: "Company Website", type: "URL", status: "Synced", chunks: 340, date: "5 days ago" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Knowledge Base</h1>
        <button className="btn-primary flex items-center gap-2"><DocumentAddIcon className="w-5 h-5" /> Add Document</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 text-center"><div className="text-2xl font-bold">1,284</div><div className="text-xs text-white/50">Indexed Chunks</div></div>
        <div className="glass-card p-4 text-center"><div className="text-2xl font-bold text-green-400">98%</div><div className="text-xs text-white/50">Processing Success</div></div>
        <div className="glass-card p-4 text-center"><div className="text-2xl font-bold text-yellow-400">3</div><div className="text-xs text-white/50">Pending Sync</div></div>
      </div>
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border/50 flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-white/30" />
          <input type="text" placeholder="Search knowledge base..." className="bg-transparent outline-none text-sm flex-1" />
        </div>
        {files.map((file, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 border-b border-border/30 hover:bg-white/5">
            <div><div className="font-medium">{file.name}</div><div className="text-xs text-white/40">{file.type} • {file.chunks} chunks</div></div>
            <div className="flex items-center gap-4">
              <span className={`px-2 py-1 rounded-full text-xs ${file.status === "Indexed" ? "bg-green-500/20 text-green-400" : file.status === "Processing" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`}>{file.status}</span>
              <span className="text-xs text-white/30">{file.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
