import { useMemo, useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SkeletonCard } from '../components/ui/Loader';
import { usePageLoader } from '../hooks/usePageLoader';

export default function ShopPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const loading = usePageLoader();
  const categories = ['All', 'Blended Masala', 'Basic Spices', 'Chocolates'];

  const filteredProducts = useMemo(() => {
    const base = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === 'low-high') return [...base].sort((a, b) => a.price - b.price);
    if (sort === 'high-low') return [...base].sort((a, b) => b.price - a.price);
    return base;
  }, [category, query, sort]);

  return (
    <div className="container-shell py-12 sm:py-16">
      <ScrollReveal>
        <SectionHeading eyebrow="Shop" title="Shop PINAK PANI masalas and chocolates" description="Browse the full range with working search, category filters, and a clean Indian FMCG-inspired product grid." />
      </ScrollReveal>
      <ScrollReveal className="mt-10">
        <div className="glass-panel rounded-[30px] p-5">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search masalas or chocolates" className="min-h-12 rounded-2xl border border-[#f1dfaa] bg-white px-4 text-sm text-brand-dark outline-none placeholder:text-brand-dark/35" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-12 rounded-2xl border border-[#f1dfaa] bg-white px-4 text-sm text-brand-dark outline-none">
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-12 rounded-2xl border border-[#f1dfaa] bg-white px-4 text-sm text-brand-dark outline-none">
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ScrollReveal key={index} delay={index * 0.03}>
                <SkeletonCard />
              </ScrollReveal>
            ))
          : filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.03}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
      </div>
    </div>
  );
}
