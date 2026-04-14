import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ZoomIn } from 'lucide-react';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import QuantityControl from '../components/ui/QuantityControl';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { formatCurrency } from '../utils/format';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const relatedProducts = useMemo(() => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3), [product]);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const gallery = [product.image, ...products.filter((item) => item.id !== product.id).slice(0, 2).map((item) => item.image)];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast({ title: 'Added to cart', message: `${quantity} x ${product.name} added successfully.` });
  };

  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <ScrollReveal>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[32px] border border-[#f1dfaa] bg-white">
              <button type="button" onClick={() => setZoomed((value) => !value)} className="absolute right-4 top-4 z-10 flex min-h-11 items-center gap-2 rounded-full bg-white/90 px-4 text-sm text-brand-dark shadow">
                <ZoomIn size={16} />
                {zoomed ? 'Reset' : 'Zoom'}
              </button>
              <img src={selectedImage} alt={product.name} className={`h-[420px] w-full object-cover transition duration-500 sm:h-[560px] ${zoomed ? 'scale-125' : 'scale-100'}`} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((image) => (
                <button key={image} type="button" onClick={() => setSelectedImage(image)} className={`overflow-hidden rounded-[20px] border bg-white ${selectedImage === image ? 'border-brand-red' : 'border-[#f1dfaa]'}`}>
                  <img src={image} alt={product.name} className="h-28 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[#ffe2de] px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand-red">{product.category}</span>
            <div>
              <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-base leading-8 text-brand-dark/72">{product.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-3xl font-semibold text-brand-dark">{formatCurrency(product.price)}</span>
              <span className="rounded-full bg-[#fff1c9] px-4 py-2 text-sm text-brand-dark">{product.weight}</span>
              <span className="rounded-full bg-[#e8f6e8] px-4 py-2 text-sm text-[#2f7d32]">{product.stock}</span>
            </div>
            <div className="glass-panel rounded-[28px] p-5">
              <h2 className="font-display text-2xl text-brand-dark">Ingredients</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.ingredients.map((item) => (
                    <span key={item} className="rounded-full bg-[#fff8e7] px-4 py-2 text-sm text-brand-dark/80">{item}</span>
                ))}
              </div>
              <h2 className="mt-6 font-display text-2xl text-brand-dark">Nutrition</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="rounded-2xl bg-white p-4 text-sm text-brand-dark shadow-sm">
                    <p className="text-brand-dark/45 capitalize">{key}</p>
                    <p className="mt-1 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#ffe2de] px-4 py-2 text-xs font-medium text-brand-red">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <QuantityControl value={quantity} onChange={setQuantity} />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
              <Button as={Link} to="/cart" variant="secondary">View Cart</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <section className="mt-16">
        <ScrollReveal>
          <SectionHeading eyebrow="Related Products" title="More from this category" description="A simple related-products rail that keeps the product page feeling complete and commerce-ready." />
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <ProductCard product={item} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
