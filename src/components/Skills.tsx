import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Network, Database, Layout, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Development",
    icon: <Code2 className="text-primary" />,
    skills: ["React", "Angular", "React Native", "Flask", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "IoT & Hardware",
    icon: <Cpu className="text-accent" />,
    skills: ["Arduino", "Raspberry Pi", "NodeMCU", "Sensors", "Actuators"]
  },
  {
    title: "Networking",
    icon: <Network className="text-secondary" />,
    skills: ["CCNA", "TCP/IP", "DNS", "VLAN", "Cisco Packet Tracer"]
  },
  {
    title: "Tools & Analytics",
    icon: <Database className="text-primary" />,
    skills: ["Supabase", "GitHub", "GitLab", "n8n", "Render", "Power BI"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
