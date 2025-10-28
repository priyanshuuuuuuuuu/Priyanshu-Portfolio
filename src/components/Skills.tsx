import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "Node.js", "C++", "C", "React.js", "Next.js", "Express.js"],
    },
    {
      title: "Tools & Platforms",
      skills: ["IntelliJ", "Eclipse", "Jupyter Notebook", "Git", "GitHub", "VS Code", "Linux", "REST APIs", "API Integration", "Testing", "Postman", "Figma"],
    },
    {
      title: "Data Science & ML",
      skills: ["Google Colab", "Flask", "LibGDX", "LATEX", "Matplotlib", "Pandas", "NumPy", "PostgreSQL", "VIM", "Django", "LLM Integration", "NoSQL", "Scikit-learn", "OpenCV", "PyTorch",],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
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
              Technical Arsenal
            </h2>
            <p className="text-center font-serif text-xs tracking-widest text-muted-foreground mt-2">
              COMPREHENSIVE SKILLS DIRECTORY • TOOLS OF THE TRADE
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-4 border-double border-foreground p-6 sm:p-8 bg-card/50 mb-6"
          >
            <p className="font-serif text-sm leading-relaxed text-center italic border-b-2 border-foreground pb-4 mb-6">
              "A curated toolkit built over countless hours of dedicated learning and practical application"
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + categoryIndex * 0.15, duration: 0.5 }}
                  className="border-2 border-foreground bg-background"
                >
                  <div className="border-b-2 border-foreground bg-foreground text-background py-3 px-4">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-center">
                      {category.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.4 + categoryIndex * 0.15 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                          className="border-l-4 border-foreground pl-3 py-2 font-serif text-sm hover:bg-muted/50 transition-colors"
                        >
                          • {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
