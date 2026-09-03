'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register', { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="glass-card p-8 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-white/60 text-sm">Start your free trial of Client Care</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-violet/50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-violet/50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface/40 border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-violet/50"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Create Account
          </button>
          <p className="text-center text-sm text-white/40">
            Already have an account? <Link href="/login" className="text-brand-violet hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
