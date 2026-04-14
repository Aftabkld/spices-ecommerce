import { createContext, useContext, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Info, TriangleAlert, X } from 'lucide-react';

const ToastContext = createContext(null);

const icons = {
  success: CheckCircle2,
  info: Info,
  error: TriangleAlert,
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = ({ title, message, type = 'success' }) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, title, message, type }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 2800);
  };

  const removeToast = (id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-20 z-[80] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = icons[toast.type] ?? Info;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                transition={{ duration: 0.28 }}
                className="glass-panel rounded-2xl border border-[#f1dfaa] p-4 shadow-2xl"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-[#fff1c9] p-2 text-brand-red">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-dark">{toast.title}</p>
                    <p className="mt-1 text-xs leading-6 text-brand-dark/70">{toast.message}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Dismiss toast"
                    onClick={() => removeToast(toast.id)}
                    className="min-h-11 rounded-full p-2 text-brand-dark/60 transition hover:text-brand-red"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
}
