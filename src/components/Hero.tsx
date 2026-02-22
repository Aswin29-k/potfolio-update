import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Cpu, Globe, Network, Smartphone, Sparkles } from 'lucide-react';

const roles = [
  "Web Developer",
  "App Developer",
  "Network Engineer",
  "IoT Enthusiast"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y: y1, opacity }} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-primary uppercase mb-8"
          >
            <Sparkles size={14} className="animate-pulse" /> Available for new opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Hi, I'm <br />
            <span className="text-gradient">Aswin</span>
          </h1>
          
          <div className="h-16 md:h-20 mb-10">
            <p className="text-2xl md:text-4xl font-light text-slate-400 tracking-tight">
              Building <span className="text-slate-100 font-semibold">{text}</span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </p>
          </div>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium">
            Crafting <span className="text-white">Smart Digital & IoT Solutions</span>. 
            Bridging the gap between hardware precision and software elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all"
            >
              View My Work 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass glass-hover rounded-2xl font-bold transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Elements with more variety */}
        <div className="hidden lg:block">
          <FloatingCard icon={<Globe size={32} className="text-primary" />} top="15%" left="12%" delay={0} label="Web" />
          <FloatingCard icon={<Smartphone size={32} className="text-secondary" />} top="65%" left="8%" delay={1} label="App" />
          <FloatingCard icon={<Cpu size={32} className="text-accent" />} top="20%" right="12%" delay={0.5} label="IoT" />
          <FloatingCard icon={<Network size={32} className="text-primary" />} top="70%" right="8%" delay={1.5} label="Network" />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCard({ icon, top, left, right, delay, label }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1,
        scale: 1,
        y: [0, -25, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        delay,
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ position: 'absolute', top, left, right }}
      className="p-5 glass rounded-[2rem] flex flex-col items-center gap-3 shadow-2xl"
    >
      <div className="p-3 bg-white/5 rounded-2xl">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
    </motion.div>
  );
}

