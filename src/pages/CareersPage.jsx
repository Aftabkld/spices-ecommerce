import { useState } from 'react';
import { jobs } from '../data/jobs';
import Modal from '../components/ui/Modal';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', portfolio: '' });

  const closeModal = () => {
    setSelectedJob(null);
    setSuccess(false);
    setForm({ name: '', email: '', portfolio: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="container-shell py-12 sm:py-16">
      <ScrollReveal>
        <SectionHeading eyebrow="Careers" title="Join the team behind the brand" description="A simple careers section for sales, packaging, and marketing roles based in Mumbai." />
      </ScrollReveal>
      <div className="mt-10 grid gap-6">
        {jobs.map((job, index) => (
          <ScrollReveal key={job.id} delay={index * 0.06}>
            <div className="glass-panel rounded-[28px] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="font-display text-3xl text-brand-dark">{job.title}</h2>
                  <p className="mt-2 text-sm text-brand-dark/65">{job.location} • {job.type}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-dark/72">{job.description}</p>
                </div>
                <Button onClick={() => setSelectedJob(job)}>Apply</Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Modal open={Boolean(selectedJob)} onClose={closeModal} title={selectedJob ? `Apply for ${selectedJob.title}` : 'Apply'}>
        {success ? (
          <div className="rounded-[24px] bg-[#e8f6e8] p-5 text-sm leading-7 text-[#2f7d32]">
            Application submitted successfully. Our team will review your profile and get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField label="Full Name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Your name" required />
            <InputField label="Email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder="you@example.com" required />
            <InputField label="Portfolio / LinkedIn" value={form.portfolio} onChange={(event) => setForm((current) => ({ ...current, portfolio: event.target.value }))} placeholder="Link" required />
            <Button type="submit">Submit Application</Button>
          </form>
        )}
      </Modal>
    </div>
  );
}
