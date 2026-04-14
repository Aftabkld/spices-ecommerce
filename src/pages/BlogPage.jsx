import { useMemo, useState } from 'react';
import { blogs } from '../data/blogs';
import BlogCard from '../components/ui/BlogCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { SkeletonCard } from '../components/ui/Loader';
import { usePageLoader } from '../hooks/usePageLoader';
import { getUniqueValues } from '../utils/format';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const loading = usePageLoader();
  const categories = getUniqueValues(blogs, 'category');
  const filteredBlogs = useMemo(
    () =>
      blogs.filter((blog) => {
        const matchesQuery = blog.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === 'All' || blog.category === category;
        return matchesQuery && matchesCategory;
      }),
    [category, query],
  );

  return (
    <div className="container-shell py-12 sm:py-16">
      <ScrollReveal>
        <SectionHeading eyebrow="Blog" title="Stories behind the products" description="Brand content that helps the storefront feel credible, useful, and close to a real FMCG website." />
      </ScrollReveal>
      <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="min-h-12 rounded-2xl border border-[#f1dfaa] bg-white px-4 text-sm text-brand-dark outline-none placeholder:text-brand-dark/35" />
        <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-12 rounded-2xl border border-[#f1dfaa] bg-white px-4 text-sm text-brand-dark outline-none">
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <SkeletonCard />
              </ScrollReveal>
            ))
          : filteredBlogs.map((blog, index) => (
              <ScrollReveal key={blog.id} delay={index * 0.06}>
                <BlogCard blog={blog} />
              </ScrollReveal>
            ))}
      </div>
    </div>
  );
}
