import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Youtube, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

const SocialLink = ({ icon: Icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-500"
  >
    <Icon size={14} strokeWidth={1} />
    {label}
    <ArrowUpRight size={10} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
  </a>
);

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT SIDE: Contact Cards */}
        <div className="space-y-6">
          <h2 className="text-[10px] tracking-[0.6em] text-white/20 uppercase mb-8 font-light">Available for collaborations</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/8801794078825"
              target="_blank"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
              className="p-8 bg-[#080808] border border-white/5 rounded-sm group transition-all duration-500 block"
            >
              <MessageCircle strokeWidth={1} className="text-white/40 mb-12 group-hover:text-white transition-colors" size={28} />
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">WhatsApp</p>
              <h3 className="text-white font-light text-sm uppercase tracking-tighter">+880 1794 078825</h3>
            </motion.a>

            {/* Email Card - Forced Protocol Trigger */}
            <motion.a
              href="mailto:xaninstudio@gmail.com?subject=Project Inquiry"
              target="_top"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
              className="p-8 bg-[#080808] border border-white/5 rounded-sm group transition-all duration-500 block cursor-pointer"
            >
              <Mail 
                strokeWidth={1} 
                className="text-white/40 mb-12 group-hover:text-white transition-colors" 
                size={28} 
              />
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Email</p>
              <h3 className="text-white font-light text-sm uppercase tracking-tighter">
                xaninstudio@gmail.com
              </h3>
            </motion.a>
          </div>

          {/* Social Links Sub-row */}
          <div className="flex flex-wrap gap-8 pt-8">
            <SocialLink icon={Youtube} label="Youtube" href="https://www.youtube.com/@XaninKaizo" />
            <SocialLink icon={Instagram} label="Instagram" href="https://instagram.com/xanin.kaizo" />
            <SocialLink icon={Facebook} label="Facebook" href="https://facebook.com/profile.php?id=61584262988971" />
          </div>
        </div>

        {/* RIGHT SIDE: Closing Statement */}
        <div className="lg:pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <h4 className="text-3xl md:text-5xl font-light text-white tracking-tighter leading-tight">
              Let’s build something <span className="italic opacity-50">quietly extraordinary.</span>
            </h4>
            <p className="text-white/40 font-light text-lg max-w-md leading-relaxed">
              Currently accepting new projects and creative experiments. Based in Dhaka, working globally. If you have an idea that challenges the norm, reach out.
            </p>
            <div className="pt-12">
               <p className="text-[9px] text-white/10 uppercase tracking-[0.5em]">© 2025 XK — SCULPTED INTERFACES</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}