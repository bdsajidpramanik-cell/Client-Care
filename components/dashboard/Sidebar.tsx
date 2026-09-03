'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  PhoneIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'AI Employees', href: '/ai-employees', icon: UserGroupIcon },
  { name: 'Conversations', href: '/conversations', icon: QuestionMarkCircleIcon },
  { name: 'Leads', href: '/leads', icon: ChartBarIcon },
  { name: 'Contacts', href: '/contacts', icon: UserGroupIcon },
  { name: 'AI Calls', href: '/calls', icon: PhoneIcon },
  { name: 'Automations', href: '/automations', icon: PuzzlePieceIcon },
  { name: 'Knowledge Base', href: '/knowledge', icon: DocumentTextIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-brand-dark/80 backdrop-blur-sm border-r border-border flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-violet" />
          <span className="text-xl font-bold">Client Care</span>
        </div>
        <div className="text-xs text-white/40 mt-1">A Business Platform of Pramanik Group</div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              pathname === item.href
                ? 'bg-brand-violet/20 text-white border border-brand-violet/30'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-violet/30 flex items-center justify-center text-sm font-medium">
            SM
          </div>
          <div>
            <div className="text-sm font-medium">Sajid</div>
            <div className="text-xs text-white/40">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
