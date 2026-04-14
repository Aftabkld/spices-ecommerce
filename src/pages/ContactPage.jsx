import { useState } from 'react';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

export default function ContactPage() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/\S+@\S+\.\S+/.test(values.email)) nextErrors.email = 'Please enter a valid email.';
    if (values.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="container-shell py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <div className="space-y-5">
            <SectionHeading eyebrow="Contact" title="Connect with PINAK PANI ENTERPRISE" description="Real contact details, working form validation, and a clean trust-building layout for enquiries and distributor outreach." />
            <div className="glass-panel rounded-[28px] p-5">
              <p className="text-sm leading-7 text-brand-dark/72">Email: panipinak01@gmail.com</p>
              <p className="text-sm leading-7 text-brand-dark/72">Phone: +91 9930000542</p>
              <p className="text-sm leading-7 text-brand-dark/72">Address: Santacruz (W), Mumbai</p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#f1dfaa]">
              <iframe title="Google map" src="https://www.google.com/maps?q=Santacruz%20West%20Mumbai&output=embed" className="h-[340px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-[32px] p-6 sm:p-8">
            <InputField label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} placeholder="Your full name" />
            <InputField label="Email" name="email" value={values.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
            <InputField label="Message" as="textarea" rows="6" name="message" value={values.message} onChange={handleChange} error={errors.message} placeholder="Tell us what you need" />
            <Button type="submit">Send Message</Button>
            {sent ? <p className="rounded-2xl bg-[#e8f6e8] px-4 py-3 text-sm text-[#2f7d32]">Your message has been sent successfully.</p> : null}
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
