import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-panel max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl text-brand-dark">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-full bg-[#fff8e7] p-3 text-brand-dark transition hover:bg-[#fff1c9]"
              >
                <X size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
