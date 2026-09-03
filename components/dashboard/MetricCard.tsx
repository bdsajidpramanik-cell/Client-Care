interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  icon: string;
}

export function MetricCard({ label, value, change, icon }: MetricCardProps) {
  const isPositive = change.startsWith('+');
  return (
    <div className="glass-card p-5 hover:border-brand-violet/30 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-white/50">{label}</div>
      </div>
    </div>
  );
}
