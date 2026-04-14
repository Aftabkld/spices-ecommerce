import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Droplets, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { products } from '../data/products';
import { recipes } from '../data/recipes';
import BlogCard from '../components/ui/BlogCard';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import RecipeCard from '../components/ui/RecipeCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

const testimonials = [
  { name: 'Ritika Shah', quote: 'The masalas feel exactly like a trusted Indian FMCG shelf brand, but with a fresher and cleaner presentation.' },
  { name: 'Javed Khan', quote: 'Chicken Masala and Meat Masala both have a very balanced taste. The UI also makes the brand feel real and ready to launch.' },
  { name: 'Naina Patel', quote: 'The chocolate section is a nice touch for gifting. It makes the whole catalogue feel more complete.' },
];

const categories = [
  { title: 'Blended Masala', body: 'Ready blends for meat, chicken, fish and daily curries.', color: 'bg-[#ffe2de]' },
  { title: 'Basic Spices', body: 'Kitchen essentials like coriander, chilli and turmeric.', color: 'bg-[#fff1c9]' },
  { title: 'Chocolates', body: 'Sweet premium bars for gifting, retail and festive occasions.', color: 'bg-[#fce7df]' },
];

export default function HomePage() {
  const featuredMasalas = products.filter((product) => product.family === 'Spices').slice(0, 8);
  const chocolateProducts = products.filter((product) => product.family === 'Chocolates');

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[#f1dfaa] bg-[linear-gradient(135deg,#fff8e7_0%,#ffffff_50%,#fff2c7_100%)]">
        <div className="container-shell grid min-h-[84vh] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="space-y-6">
            <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="inline-flex rounded-full bg-[#ffe2de] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
              Mumbai Based FMCG Brand
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="font-display text-5xl leading-tight text-brand-dark sm:text-6xl lg:text-7xl">
              Har Khane ka Asli Swad
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.14 }} className="max-w-2xl text-base leading-8 text-brand-dark/75 sm:text-lg">
              Premium Indian Masalas for Every Kitchen. PINAK PANI ENTERPRISE brings bold spice blends, daily basics, and festive chocolates together in one clean, product-first brand experience.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/shop" className="gap-2">
                Shop Now
                <ChevronRight size={16} />
              </Button>
              <Button as={Link} to="/recipes" variant="secondary">
                Explore Recipes
              </Button>
            </motion.div>
            <div className="grid gap-3 sm:grid-cols-3">
              {['100% Pure', 'Hygienically Packed', 'Lab Tested'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#f1dfaa] bg-white px-4 py-4 text-sm font-medium text-brand-dark shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.18 }} className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] border border-[#f1dfaa] bg-white shadow-[0_18px_38px_rgba(34,34,34,0.08)] sm:col-span-2">
              <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80" alt="Indian food hero" className="h-72 w-full object-cover sm:h-80" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#f1dfaa] bg-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?auto=format&fit=crop&w=900&q=80" alt="Fish curry" className="h-48 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#f1dfaa] bg-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" alt="Spice assortment" className="h-48 w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-shell py-16">
        <ScrollReveal>
          <SectionHeading eyebrow="Categories" title="Built like a trusted Indian shelf brand" description="Simple, bold and product-first sections inspired by FMCG packaging logic and strong category merchandising." />
        </ScrollReveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {categories.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className={`rounded-[28px] border border-[#f1dfaa] p-6 shadow-sm ${item.color}`}>
                <h3 className="font-display text-2xl text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-dark/75">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <ScrollReveal>
          <SectionHeading eyebrow="Featured Products" title="Our masala range" description="These are the exact PINAK PANI masalas, presented with clean product storytelling, bold pricing, and fast add-to-cart interactions." />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredMasalas.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <ScrollReveal>
            <SectionHeading eyebrow="Chocolate Section" title="A sweet premium category for gifting and retail shelves" description="Separate product cards for chocolates keep the assortment broader and more commercially realistic." />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {chocolateProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.06}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <ScrollReveal>
              <SectionHeading eyebrow="Recipes" title="Cook with the right masala" description="Chicken curry, fish curry and daily veg gravies styled for a real consumer-facing food brand." />
            </ScrollReveal>
            <div className="mt-8 grid gap-6">
              {recipes.slice(0, 3).map((recipe, index) => (
                <ScrollReveal key={recipe.id} delay={index * 0.06}>
                  <RecipeCard recipe={recipe} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <SectionHeading eyebrow="Why Choose Us" title="Clear trust signals that matter to Indian buyers" description="The homepage keeps quality proof front and center, just like a strong FMCG product brand should." />
            </ScrollReveal>
            {[
              { icon: ShieldCheck, title: '100% Pure', body: 'Selected ingredients and consistent blending for dependable taste.' },
              { icon: Droplets, title: 'Hygienically Packed', body: 'Packed with care to maintain freshness, aroma and shelf confidence.' },
              { icon: CheckCircle2, title: 'Lab Tested', body: 'Quality-checked to communicate trust, safety and brand reliability.' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.07}>
                <div className="glass-panel rounded-[28px] p-6">
                  <item.icon className="text-brand-red" size={28} />
                  <h3 className="mt-4 font-display text-2xl text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-dark/72">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <ScrollReveal>
          <SectionHeading eyebrow="Testimonials" title="What customers notice first" align="center" description="Taste, trust, and a familiar Indian product feel are the key selling points highlighted in the UI." />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.06}>
              <div className="rounded-[28px] border border-[#f1dfaa] bg-white p-6 shadow-sm">
                <Star className="text-brand-yellow" fill="currentColor" size={22} />
                <p className="mt-4 text-sm leading-7 text-brand-dark/75">{item.quote}</p>
                <p className="mt-4 font-semibold text-brand-dark">{item.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <ScrollReveal>
              <SectionHeading eyebrow="From Our Blog" title="Helpful content that supports the product story" description="Recipes, quality messaging and category storytelling make the demo feel more launch-ready." />
            </ScrollReveal>
            <div className="mt-8 grid gap-6">
              {blogs.map((blog, index) => (
                <ScrollReveal key={blog.id} delay={index * 0.06}>
                  <BlogCard blog={blog} />
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal>
            <div className="rounded-[34px] border border-[#f1dfaa] bg-[linear-gradient(135deg,#fff1c9_0%,#ffffff_55%,#ffe2de_100%)] p-8 shadow-sm sm:p-10">
              <span className="rounded-full bg-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                PINAK PANI ENTERPRISE
              </span>
              <h2 className="mt-5 font-display text-4xl text-brand-dark sm:text-5xl">Spices and chocolates designed to sell on first impression</h2>
              <p className="mt-4 text-sm leading-8 text-brand-dark/75 sm:text-base">
                This frontend demo is intentionally bright, clean, and product-led so it feels immediately familiar to Indian buyers while still looking premium and current.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button as={Link} to="/contact">Contact Us</Button>
                <Button as={Link} to="/shop" variant="secondary">View All Products</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
