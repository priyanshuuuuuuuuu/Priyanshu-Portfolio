import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      icon: "briefcase",
      title: "Web Development Intern",
      company: "VSM Pantnagar",
      period: "May 2025 - Aug 2025",
      description: "Redesigned a user-centric platform serving 2,700+ monthly visitors • Boosted digital outreach by 60% and improved performance by 40% • Balanced design, usability, and code efficiency for real users",
    },
    {
      type: "education",
      icon: "graduation",
      title: "B.Tech in Computer Science",
      company: "Indraprastha Institute of Information Technology (IIIT) Delhi",
      period: "2023 - 2027",
      description: "Computer Science & Engineering | Aspire Scholar (28 students across IITs, NITs & IIITs) | Student Council Member",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Newspaper Section Header */}
          <div className="border-y-4 border-double border-foreground py-4 mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-center uppercase tracking-tight">
              Professional Chronicle
            </h2>
            <p className="text-center font-serif text-xs tracking-widest text-muted-foreground mt-2">
              CAREER TIMELINE • EDUCATIONAL BACKGROUND • MILESTONES
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-sm leading-relaxed text-center italic mb-8 border-2 border-foreground p-4 bg-card/50"
          >
            "A journey of continuous learning, building, and professional growth"
          </motion.p>

          <div className="border-4 border-double border-foreground p-6 sm:p-8 bg-card/50">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  className="border-4 border-double border-foreground bg-background hover:bg-muted/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="grid md:grid-cols-4">
                    {/* Left Column - Icon & Date */}
                    <div className="md:col-span-1 border-b-4 md:border-b-0 md:border-r-4 border-double border-foreground p-4 bg-muted/30">
                      <div className="flex md:flex-col items-center md:items-start gap-3">
                        <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                          {exp.icon === "briefcase" ? (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="4" y="8" width="16" height="12" rx="1" />
                              <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="12" y1="12" x2="12" y2="16" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                              <polyline points="7.5 19.79 7.5 14.6 3 12" />
                              <polyline points="16.5 14.6 16.5 19.79" />
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                              <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                          )}
                        </div>
                        <div className="font-serif text-xs font-bold tracking-wider">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Content */}
                    <div className="md:col-span-3 p-4">
                      <h3 className="font-display text-xl font-bold uppercase mb-1 border-b-2 border-foreground pb-2">
                        {exp.title}
                      </h3>
                      <p className="font-serif font-bold text-sm mb-3 mt-2">{exp.company}</p>
                      <p className="font-serif text-xs leading-relaxed text-foreground/80">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
