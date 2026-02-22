import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Cpu, Globe, Smartphone, Database, Network, Code, Layers } from 'lucide-react';

const categories = ["All", "Hardware", "Web", "App", "Python", "Networking", "Data"];

const projects = [
  // Hardware
  { title: "IoT Smart Home", category: "Hardware", icon: <Cpu />, description: "Automated home system using IoT sensors for smart living." },
  { title: "Solar Tracking System", category: "Hardware", icon: <Cpu />, description: "Dual-axis solar tracking to maximize energy capture." },
  { title: "Smart Parking System", category: "Hardware", icon: <Cpu />, description: "IoT-based real-time parking slot monitoring and booking." },
  { title: "Tri Source Energy System", category: "Hardware", icon: <Cpu />, description: "Hybrid renewable energy system combining solar, wind, and hydro." },
  { title: "Anti-Illegal Mining System", category: "Hardware", icon: <Cpu />, description: "Seismic sensor network to detect and alert illegal mining activities." },
  { title: "Renewable Energy Grid", category: "Hardware", icon: <Cpu />, description: "Smart grid monitoring for distributed renewable energy sources." },
  
  // Web
  { title: "Food Website", category: "Web", icon: <Globe />, description: "High-performance restaurant landing page with online ordering." },
  { title: "Furniture Website", category: "Web", icon: <Globe />, description: "Modern e-commerce platform for luxury furniture." },
  { title: "OTP Generator", category: "Web", icon: <Code />, description: "Secure utility for generating time-based one-time passwords." },
  { title: "BMI Fetcher", category: "Web", icon: <Code />, description: "Health analytics tool for tracking body mass index." },
  
  // App
  { title: "CRM App (Flutter)", category: "App", icon: <Smartphone />, description: "Mobile client for managing customer relationships on the go." },
  { title: "Food Delivery App", category: "App", icon: <Smartphone />, description: "Cross-platform app for real-time food tracking and delivery." },
  
  // Python
  { title: "Grocery Management", category: "Python", icon: <Database />, description: "Inventory and sales management system for retail." },
  { title: "Café Management", category: "Python", icon: <Database />, description: "Point-of-sale and kitchen management for cafés." },
  { title: "ANPR System", category: "Python", icon: <Cpu />, description: "License plate recognition using deep learning and OpenCV." },
  
  // Networking
  { title: "Company Network", category: "Networking", icon: <Network />, description: "Enterprise-grade network architecture with VLANs and OSPF." },
  
  // Data
  { title: "Bank Transactions", category: "Data", icon: <Database />, description: "Interactive financial dashboard built with Power BI." },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4"
            >
              <Layers size={14} /> My Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <p className="text-slate-400 text-lg">
              A collection of projects spanning hardware, software, and everything in between.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === cat 
                    ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                    : 'glass glass-hover text-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -12 }}
      className="group glass rounded-[2.5rem] p-8 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
          {project.icon}
        </div>
        <div className="flex gap-2">
          <a href="#" className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <Github size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
      
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          {project.category}
        </span>
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 text-primary text-xs font-bold"
        >
          Details <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ArrowRight({ size, className }: any) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

