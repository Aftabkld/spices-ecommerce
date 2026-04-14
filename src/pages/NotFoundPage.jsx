import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center gap-5 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-yellow">404</p>
      <h1 className="font-display text-5xl text-brand-dark">Page not found</h1>
      <p className="max-w-xl text-sm leading-7 text-brand-dark/70">The page you're looking for isn't here, but the store is still very much alive.</p>
      <Button as={Link} to="/">Back Home</Button>
    </div>
  );
}
