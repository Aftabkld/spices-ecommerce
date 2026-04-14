import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="page-shell">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.35 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
