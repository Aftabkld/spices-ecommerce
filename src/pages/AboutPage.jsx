import { Award, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

export default function AboutPage() {
  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal>
          <SectionHeading eyebrow="About" title="A growing Mumbai brand for masalas and chocolates" description="PINAK PANI ENTERPRISE is presented as a clean, trustworthy Indian FMCG brand with strong category clarity and product confidence." />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <img src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80" alt="Spice assortment" className="h-[420px] w-full rounded-[32px] object-cover sm:h-[520px]" />
        </ScrollReveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: Sparkles, title: 'Shelf Ready Branding', body: 'Bright, bold visual presentation inspired by trusted Indian spice brands.' },
          { icon: ShieldCheck, title: 'Quality Focus', body: 'Hygienically packed and laboratory-tested messaging is built directly into the product story.' },
          { icon: Award, title: 'Everyday Utility', body: 'The catalogue is designed around practical masalas used in daily Indian cooking.' },
          { icon: Leaf, title: 'Expanded Range', body: 'Spices and chocolates together create a broader and more giftable retail proposition.' },
        ].map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.06}>
            <div className="glass-panel rounded-[28px] p-6">
              <item.icon className="text-brand-red" size={28} />
              <h2 className="mt-5 font-display text-2xl text-brand-dark">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-dark/70">{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
