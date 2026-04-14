import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import Button from './Button';
import { formatCurrency } from '../../utils/format';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addToCart(product, 1);
    showToast({
      title: 'Added to cart',
      message: `${product.name} is ready for checkout.`,
    });
  };

  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[28px] border border-[#f1dfaa] bg-white shadow-[0_18px_40px_rgba(34,34,34,0.08)]"
    >
      <Link to={`/shop/${product.slug}`} className="block overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-2 text-xs font-semibold text-brand-dark">
            {product.badge}
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-brand-dark/45">{product.category}</p>
            <Link to={`/shop/${product.slug}`} className="mt-2 block font-display text-2xl leading-tight text-brand-dark">
              {product.name}
            </Link>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-[#fff8e7] px-3 py-2 text-xs text-brand-red">
            <Star size={14} fill="currentColor" />
            {product.rating}
          </div>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-brand-dark/70">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[#fff8e7] px-3 py-1 text-xs font-medium text-brand-dark">{product.weight}</span>
          <span className="rounded-full bg-[#ffe2de] px-3 py-1 text-xs font-medium text-brand-red">{product.family}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-semibold text-brand-dark">{formatCurrency(product.price)}</span>
          <motion.div whileTap={{ scale: 0.92 }} animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 0.45 }}>
            <Button onClick={handleAdd} className="gap-2">
              <ShoppingBag size={16} />
              Add
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
