export default function QuantityControl({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#f1dfaa] bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="min-h-11 min-w-11 px-4 text-lg text-brand-dark transition hover:bg-[#fff8e7]"
      >
        -
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-brand-dark">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="min-h-11 min-w-11 px-4 text-lg text-brand-dark transition hover:bg-[#fff8e7]"
      >
        +
      </button>
    </div>
  );
}
