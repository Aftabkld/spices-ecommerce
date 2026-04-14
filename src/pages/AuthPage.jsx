import { useState } from 'react';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const { login, logout, isAuthenticated, user } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (mode === 'register' && form.name.trim().length < 2) nextErrors.name = 'Enter your full name.';
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) login(form);
  };

  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal>
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#ffe2de] px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-red">Account</span>
            <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">Login or create an account</h1>
            <p className="text-base leading-8 text-brand-dark/72">This is a frontend-only login simulation with localStorage persistence so the signed-in state feels real on refresh.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="glass-panel rounded-[32px] p-6 sm:p-8">
            {isAuthenticated ? (
              <div className="space-y-5">
                <h2 className="font-display text-3xl text-brand-dark">Welcome back, {user.name}</h2>
                <p className="text-sm leading-7 text-brand-dark/72">Signed in as {user.email}</p>
                <Button onClick={logout}>Logout</Button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex rounded-full bg-[#fff8e7] p-1">
                  {['login', 'register'].map((item) => (
                    <button key={item} type="button" onClick={() => setMode(item)} className={`min-h-11 flex-1 rounded-full text-sm capitalize transition ${mode === item ? 'bg-brand-red text-white' : 'text-brand-dark/80'}`}>
                      {item}
                    </button>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {mode === 'register' ? <InputField label="Full Name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} error={errors.name} placeholder="Your full name" /> : null}
                  <InputField label="Email" type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} error={errors.email} placeholder="you@example.com" />
                  <InputField label="Password" type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} error={errors.password} placeholder="••••••••" />
                  <Button type="submit">{mode === 'login' ? 'Login' : 'Create Account'}</Button>
                </form>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
