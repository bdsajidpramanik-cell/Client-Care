import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium text-white/70">{label}</label>}
        <select
          ref={ref}
          className={`w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-violet/50 transition-colors ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-brand-dark">
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
