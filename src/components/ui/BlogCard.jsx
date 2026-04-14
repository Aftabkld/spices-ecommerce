import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <motion.article whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.25 }} className="overflow-hidden rounded-[28px] border border-[#f1dfaa] bg-white shadow-[0_18px_35px_rgba(34,34,34,0.06)]">
      <Link to={`/blog/${blog.slug}`} className="block">
        <div className="h-56 overflow-hidden">
          <img src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <span className="rounded-full bg-[#ffe2de] px-3 py-2 text-xs uppercase tracking-[0.24em] text-brand-red">{blog.category}</span>
        <Link to={`/blog/${blog.slug}`} className="block font-display text-2xl text-brand-dark">
          {blog.title}
        </Link>
        <p className="line-clamp-3 text-sm leading-6 text-brand-dark/70">{blog.excerpt}</p>
      </div>
    </motion.article>
  );
}
