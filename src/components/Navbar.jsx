import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ShoppingBag, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '/careers' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive ? 'text-brand-red' : 'text-brand-dark/75 hover:text-brand-red'}`;

  return (
    <header className={`sticky top-0 z-50 transition duration-300 ${scrolled ? 'bg-white/95 shadow-xl backdrop-blur-xl' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white">P</div>
            <div>
              <p className="font-display text-lg text-brand-dark sm:text-xl">PINAK PANI</p>
              <p className="text-[10px] uppercase tracking-[0.34em] text-brand-dark/50">Spices + Chocolates</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/auth" className="flex min-h-11 items-center gap-2 rounded-full border border-[#f1dfaa] px-4 text-sm text-brand-dark transition hover:bg-[#fff8e7]">
              <User size={16} />
              {isAuthenticated ? user.name : 'Login'}
            </Link>
            <Link to="/cart" className="relative flex min-h-11 items-center gap-2 rounded-full bg-brand-red px-5 text-sm font-medium text-white transition hover:bg-[#d7302c]">
              <ShoppingBag size={16} />
              Cart
              <span className="rounded-full bg-brand-yellow px-2 py-1 text-xs text-brand-dark">{cartCount}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/cart" className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full bg-brand-red text-white">
              <ShoppingBag size={18} />
              {cartCount ? <span className="absolute -right-1 -top-1 rounded-full bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold text-brand-dark">{cartCount}</span> : null}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#f1dfaa] bg-white text-brand-dark"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-[88%] max-w-sm bg-white p-6 shadow-2xl lg:hidden"
          >
            <div className="mt-20 flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-2xl px-4 py-4 text-base ${isActive ? 'bg-[#fff1c9] text-brand-red' : 'bg-[#fff8e7] text-brand-dark/80'}`}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/auth" onClick={() => setOpen(false)} className="rounded-2xl bg-[#fff8e7] px-4 py-4 text-base text-brand-dark/80">
                {isAuthenticated ? `Hi, ${user.name}` : 'Login / Register'}
              </NavLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
