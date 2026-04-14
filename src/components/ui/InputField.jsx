export default function InputField({ label, error, as = 'input', className = '', ...props }) {
  const Component = as;

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-brand-dark">{label}</span>
      <Component
        className={`min-h-11 rounded-2xl border border-[#f1dfaa] bg-white px-4 py-3 text-sm text-brand-dark outline-none transition placeholder:text-brand-dark/35 focus:border-brand-red ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-[#ff9c8f]">{error}</span> : null}
    </label>
  );
}
