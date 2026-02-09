
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, ChevronDown, MapPin, ExternalLink } from 'lucide-react';
import { z } from 'zod';
import Beams from './Beams';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: any = {};
        err.errors.forEach(e => {
          if (e.path[0]) formattedErrors[e.path[0] as string] = e.message;
        });
        setErrors(formattedErrors);
      } else {
        console.error('Submission error:', err);
        // show generic error or handle it in UI
        alert('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'palladium', name: 'Palladium Accounting' },
    { id: 'iqretail', name: 'IQ Retail' },
    { id: 'sage', name: 'Sage 200' },
    { id: 'xact', name: 'Xact ERP' },
    { id: 'medeilplus', name: 'Medeilplus' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Office Choice Solutions, I would like to inquire about your ERP solutions.");
    window.open(`https://wa.me/254721123536?text=${message}`, '_blank');
  };

  return (
    <article className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      {/* Visual Background Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            Let's <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto">
            Ready to revolutionize your business? Our certified implementation specialists are one message away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Direct Channels</h2>
              <div className="space-y-4">
                <address className="not-italic space-y-4">
                  <div className="flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Email Us</p>
                      <a href="mailto:info@officechoicesolutions.co.ke" className="text-lg font-medium hover:text-zinc-300">
                        info@officechoicesolutions.co.ke
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Call Support</p>
                      <a href="tel:+254721123536" className="text-lg font-medium hover:text-zinc-300">
                        +254 721 123 536
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Visit Office</p>
                      <p className="text-lg font-medium">Kiambu Road, Feruzi Towers, 6th Floor, Wing A–D</p>
                    </div>
                  </div>
                </address>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 border border-emerald-500/10 space-y-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl font-bold">Priority Support</h3>
              </div>
              <p className="text-zinc-400">
                Need an immediate response? Our technical team is available on WhatsApp for quick consultations.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Received</h3>
                  <p className="text-zinc-400 max-w-sm mx-auto mb-10">
                    Thank you for reaching out. One of our ERP implementation specialists will contact you within the next 4 business hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-all`}
                      />
                      {errors.name && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-all`}
                      />
                      {errors.email && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+254..."
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-all`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Inquiry Type</label>
                      <div className="relative">
                        <select
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          className={`w-full appearance-none bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:border-white transition-all cursor-pointer`}
                        >
                          <option value="" disabled className="bg-zinc-950">Select a topic</option>
                          {products.map(p => (
                            <option key={p.id} value={p.id} className="bg-zinc-950">{p.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-zinc-500" />
                      </div>
                      {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help your business thrive?"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-[1.5rem] px-6 py-4 focus:outline-none focus:border-white transition-all resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-white text-zinc-950 font-black rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        PROCESSING REQUEST...
                      </>
                    ) : (
                      <>
                        SEND INQUIRY
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
