import { motion } from 'motion/react';
import { User, Target, Lightbulb, Zap, Award, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 glass rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs mb-6">
              <User size={14} /> About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Solving problems through <span className="text-gradient">Practical Engineering.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              I am a passionate developer experienced in building web apps, IoT systems, and networking solutions. 
              My journey is driven by a deep curiosity for how things work, from the low-level protocols of a network 
              to the high-level interactions of a modern web application.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 glass rounded-2xl flex items-center gap-3">
                <Zap size={20} className="text-primary" />
                <span className="font-bold text-sm">Fast Learner</span>
              </div>
              <div className="px-6 py-3 glass rounded-2xl flex items-center gap-3">
                <Award size={20} className="text-secondary" />
                <span className="font-bold text-sm">Solution Driven</span>
              </div>
              <div className="px-6 py-3 glass rounded-2xl flex items-center gap-3">
                <Coffee size={20} className="text-accent" />
                <span className="font-bold text-sm">IoT Enthusiast</span>
              </div>
            </div>
          </motion.div>

          {/* Stats/Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass rounded-[2.5rem] p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">Goal Oriented</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skilled in solving real-world engineering problems through practical implementations and efficient code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass rounded-[2.5rem] p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Lightbulb className="text-accent" />
            </div>
            <h4 className="text-xl font-bold mb-4">IoT Enthusiast</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate about creating smart solutions that connect the physical and digital worlds seamlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 glass rounded-[2.5rem] p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-4xl font-black text-white">2+</div>
              <div className="text-xs font-bold tracking-widest text-primary uppercase">Years</div>
            </div>
            <h4 className="text-xl font-bold mb-2">Experience</h4>
            <p className="text-slate-200/60 text-sm leading-relaxed">
              Continuous learning and building across multiple domains of technology.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

