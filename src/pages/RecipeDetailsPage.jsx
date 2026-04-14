import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { recipes } from '../data/recipes';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import ProductCard from '../components/ui/ProductCard';

export default function RecipeDetailsPage() {
  const { slug } = useParams();
  const recipe = recipes.find((item) => item.slug === slug) ?? recipes[0];
  const ingredients = products.filter((product) => recipe.spiceIds.includes(product.id));

  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <ScrollReveal>
          <img src={recipe.image} alt={recipe.title} className="h-[420px] w-full rounded-[32px] object-cover sm:h-[560px]" />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#fff1c9] px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand-red">{recipe.category}</span>
            <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">{recipe.title}</h1>
            <p className="text-base leading-8 text-brand-dark/74">{recipe.excerpt}</p>
            <div className="glass-panel rounded-[28px] p-5">
              <h2 className="font-display text-2xl text-brand-dark">Recipe Steps</h2>
              <div className="mt-5 space-y-4">
                {recipe.steps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">{index + 1}</div>
                    <p className="text-sm leading-7 text-brand-dark/75">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button as={Link} to="/shop">Buy Ingredients</Button>
          </div>
        </ScrollReveal>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-brand-dark">Buy Ingredients</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ingredients.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.06}>
              <ProductCard product={item} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
