import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Server error:', data.error, data.details);
        alert(`Error: ${data.details || 'Failed to send email'}`);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network or parsing error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <ContactInfo 
                icon={<Mail className="text-primary" />} 
                label="Email" 
                value="kaswin29062006@gmail.com" 
                href="mailto:kaswin29062006@gmail.com"
              />
              <ContactInfo 
                icon={<Linkedin className="text-secondary" />} 
                label="LinkedIn" 
                value="aswin-kathaperumal" 
                href="https://www.linkedin.com/in/aswin-kathaperumal-4a13a4328/"
              />
              <ContactInfo 
                icon={<Github className="text-slate-200" />} 
                label="GitHub" 
                value="Aswin29-k" 
                href="https://github.com/Aswin29-k"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <motion.button
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                  status === 'success' ? 'bg-accent text-white' : 
                  status === 'error' ? 'bg-red-500 text-white' : 
                  'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
                }`}
              >
                {status === 'idle' && <><Send size={20} /> Send Message</>}
                {status === 'loading' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {status === 'success' && <><CheckCircle2 size={20} /> Message Sent!</>}
                {status === 'error' && <><AlertCircle size={20} /> Failed to Send</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </a>
  );
}
