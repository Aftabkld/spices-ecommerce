import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import QuantityControl from '../components/ui/QuantityControl';
import Modal from '../components/ui/Modal';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setCheckoutOpen(true);
  };

  if (!cartItems.length) {
    return (
      <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1c9] text-brand-red">
          <ShoppingBag size={30} />
        </div>
        <h1 className="font-display text-4xl text-brand-dark">Your cart is empty</h1>
        <p className="max-w-xl text-sm leading-7 text-brand-dark/70">Add a few masalas or chocolates to experience the fully interactive checkout flow.</p>
        <Button as={Link} to="/shop">Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <h1 className="font-display text-4xl text-brand-dark sm:text-5xl">Your Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="glass-panel rounded-[28px] p-5">
              <div className="flex flex-col gap-5 sm:flex-row">
                <img src={item.image} alt={item.name} className="h-32 w-full rounded-[24px] object-cover sm:w-36" />
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-display text-2xl text-brand-dark">{item.name}</h2>
                      <p className="mt-2 text-sm text-brand-dark/65">{item.category}</p>
                    </div>
                    <span className="text-lg font-semibold text-brand-dark">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <QuantityControl value={item.quantity} onChange={(value) => updateQuantity(item.id, value)} />
                    <button type="button" onClick={() => removeFromCart(item.id)} className="min-h-11 rounded-full border border-[#f1dfaa] bg-white px-5 text-sm text-brand-dark/80 transition hover:bg-[#fff8e7]">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel h-fit rounded-[32px] p-6 sm:p-8">
          <h2 className="font-display text-3xl text-brand-dark">Order Summary</h2>
          <div className="mt-6 space-y-4 text-sm text-brand-dark/75">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatCurrency(cartTotal)}</span></div>
            <div className="flex items-center justify-between"><span>Shipping</span><span>{formatCurrency(99)}</span></div>
            <div className="flex items-center justify-between border-t border-[#f1dfaa] pt-4 text-base font-semibold text-brand-dark"><span>Total</span><span>{formatCurrency(cartTotal + 99)}</span></div>
          </div>
          <Button onClick={handleCheckout} className="mt-6 w-full">Fake Checkout</Button>
        </div>
      </div>

      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} title="Order Confirmed">
        <p className="text-sm leading-7 text-brand-dark/75">
          Your checkout demo completed successfully. In a real app, this is where payment and order creation would happen.
        </p>
      </Modal>
    </div>
  );
}
