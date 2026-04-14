import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919930000542"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}
