import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && <label className="block text-sm font-medium text-white/70">{label}</label>}
        <input
          ref={ref}
          className={`w-full bg-surface/40 border ${error ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-violet/50 transition-colors ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
