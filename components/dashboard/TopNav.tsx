'use client';
import { BellIcon, SearchIcon } from '@heroicons/react/24/outline';

export function TopNav() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-brand-dark/30 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-surface/30 border border-border rounded-xl pl-10 pr-4 py-2 text-sm w-48 focus:outline-none focus:border-brand-violet/50 transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
          <BellIcon className="w-5 h-5 text-white/60" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-violet/30 flex items-center justify-center text-sm font-medium">
            SM
          </div>
        </div>
      </div>
    </header>
  );
}
