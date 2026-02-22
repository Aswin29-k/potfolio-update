import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';

const experiences = [
  {
    title: "Smart Vision Based RFL Coated Fabric Defect Detection System",
    company: "SRF Limited, Trichy",
    period: "July – Aug 2025",
    location: "Trichy, India",
    description: "Developed an automated defect detection system for RFL coated fabrics using computer vision and image processing techniques.",
    points: [
      "Implemented real-time monitoring to identify manufacturing defects.",
      "Optimized detection algorithms for high-speed production lines.",
      "Collaborated with the engineering team to integrate the system into existing workflows."
    ],
    tags: ["Computer Vision", "Python", "OpenCV", "Industrial Automation"],
    icon: <Briefcase size={120} />
  },
  {
    title: "Web Development Internship",
    company: "Marchello Tech",
    period: "1 Week",
    location: "Remote",
    description: "Intensive internship focused on modern web development technologies and responsive UI design.",
    points: [
      "Explored modern frontend frameworks and best practices.",
      "Built responsive components using HTML, CSS, and JavaScript.",
      "Gained hands-on experience with industry-standard development tools."
    ],
    tags: ["Web Development", "Frontend", "UI/UX", "JavaScript"],
    icon: <Code size={120} />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience & <span className="text-gradient">Internships</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {exp.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-slate-400">
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar size={16} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                    {tag}
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

