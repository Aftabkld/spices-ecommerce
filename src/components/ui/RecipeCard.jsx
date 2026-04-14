import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.25 }} className="overflow-hidden rounded-[28px] border border-[#f1dfaa] bg-white shadow-[0_18px_35px_rgba(34,34,34,0.06)]">
      <Link to={`/recipes/${recipe.slug}`} className="block">
        <div className="h-64 overflow-hidden">
          <img src={recipe.image} alt={recipe.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#fff0cf] px-3 py-2 text-xs uppercase tracking-[0.2em] text-brand-red">{recipe.category}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-brand-dark/45">{recipe.time}</span>
        </div>
        <Link to={`/recipes/${recipe.slug}`} className="font-display text-2xl text-brand-dark">
          {recipe.title}
        </Link>
        <p className="line-clamp-3 text-sm leading-6 text-brand-dark/70">{recipe.excerpt}</p>
      </div>
    </motion.div>
  );
}
