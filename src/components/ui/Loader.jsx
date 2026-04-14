import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="container-shell flex min-h-[50vh] items-center justify-center py-20">
      <div className="flex flex-col items-center gap-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          className="h-16 w-16 rounded-full border-4 border-brand-yellow/30 border-t-brand-red"
        />
        <p className="text-sm tracking-[0.3em] text-brand-dark/60 uppercase">Loading Products</p>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return <div className="h-80 animate-pulse rounded-[28px] border border-[#f4e4b5] bg-white/80" />;
}
