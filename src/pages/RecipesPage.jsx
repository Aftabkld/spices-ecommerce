import { useMemo, useState } from 'react';
import RecipeCard from '../components/ui/RecipeCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import { recipes } from '../data/recipes';

export default function RecipesPage() {
  const [category, setCategory] = useState('All');
  const filteredRecipes = useMemo(() => recipes.filter((recipe) => category === 'All' || recipe.category === category), [category]);

  return (
    <div className="container-shell py-12 sm:py-16">
      <ScrollReveal>
        <SectionHeading eyebrow="Recipes" title="Indian recipes built around the masala range" description="Browse simple recipe inspiration that connects directly to the exact products shown in the store." />
      </ScrollReveal>
      <div className="mt-8 flex flex-wrap gap-3">
        {['All', 'Veg', 'Non-Veg'].map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)} className={`min-h-11 rounded-full px-5 text-sm transition ${category === item ? 'bg-brand-red text-white' : 'border border-[#f1dfaa] bg-white text-brand-dark/80'}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRecipes.map((recipe, index) => (
          <ScrollReveal key={recipe.id} delay={index * 0.06}>
            <RecipeCard recipe={recipe} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
