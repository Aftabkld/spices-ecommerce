import { motion } from 'framer-motion';

export default function Button({
  children,
  className = '',
  variant = 'primary',
  as: Component = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-[#d7302c] shadow-[0_10px_24px_rgba(229,57,53,0.22)]',
    secondary: 'bg-white text-brand-dark border border-[#f2d47a] hover:bg-[#fff7dd]',
    accent: 'bg-brand-yellow text-brand-dark hover:bg-[#ffcd2f]',
    outline: 'border border-[#f1dfaa] bg-transparent text-brand-dark hover:bg-[#fff8e7]',
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Component
        className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
