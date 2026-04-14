import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#f1dfaa] bg-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-display text-3xl text-brand-dark">PINAK PANI ENTERPRISE</h3>
          <p className="text-sm leading-7 text-brand-dark/65">
            Premium Indian masalas and chocolates from Mumbai, crafted for everyday kitchens and festive gifting.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.24em] text-brand-red">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-brand-dark/70">
            <Link to="/shop">Shop</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.24em] text-brand-red">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-brand-dark/70">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/auth">Account</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.24em] text-brand-red">Reach Us</h4>
          <p className="text-sm text-brand-dark/70">panipinak01@gmail.com</p>
          <p className="text-sm text-brand-dark/70">+91 9930000542</p>
          <p className="text-sm text-brand-dark/70">Santacruz (W), Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
