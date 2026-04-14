import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug) ?? blogs[0];

  return (
    <div className="container-shell py-12 sm:py-16">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full bg-[#ffe2de] px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand-red">{blog.category}</span>
          <h1 className="mt-5 font-display text-4xl text-brand-dark sm:text-5xl">{blog.title}</h1>
          <img src={blog.image} alt={blog.title} className="mt-8 h-[320px] w-full rounded-[32px] object-cover sm:h-[500px]" />
          <div className="mt-8 rounded-[32px] border border-[#f1dfaa] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-9 text-brand-dark/78">{blog.content}</p>
            <p className="mt-6 text-base leading-9 text-brand-dark/78">
              This article layout keeps the reading experience clean and spacious while supporting the overall product storytelling of the brand.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
