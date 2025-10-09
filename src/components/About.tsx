import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Heart, Rocket } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Aspire Scholar",
      description: "Honored to be one of only 28 students across IITs, NITs, and IIITs to receive the prestigious Aspire Scholarship, driving me to push my limits.",
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "500+ DSA problems solved, multiple hackathons won. I approach every challenge with creativity and technical precision.",
    },
    {
      icon: Rocket,
      title: "Disciplined Leader",
      description: "Cleared SSB interviews for Indian Army and Navy, strengthening my discipline, leadership, and composure under pressure.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
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
              About the Developer
            </h2>
            <p className="text-center font-serif text-xs tracking-widest text-muted-foreground mt-2">
              EXCLUSIVE PROFILE • CHARACTER STUDY • INSIDE STORY
            </p>
          </div>

          {/* Main Article */}
          <div className="border-4 border-double border-foreground p-6 sm:p-8 bg-card/50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="columns-1 sm:columns-2 gap-8 font-serif text-sm leading-relaxed text-justify mb-8"
            >
              <p className="mb-4">
                <span className="font-bold text-5xl float-left mr-2 leading-none">A</span>
                passionate Computer Science student at IIIT Delhi, Priyanshu Pandey loves transforming ideas into impactful digital experiences. For him, coding is more than syntax — it&apos;s about solving real problems creatively. With over 500 Data Structures and Algorithms problems solved, multiple hackathon victories, and expertise in Web Development, Data Science, and Machine Learning, he builds clean, efficient, and scalable solutions.
              </p>
              <p className="mb-4">
                Working comfortably with C++, Python, JavaScript, and tools like Node.js, Pandas, TensorFlow, and Scikit-learn, Priyanshu&apos;s journey is marked by continuous learning and real-world impact. During his internship at VSM Pantnagar, he redesigned a platform serving 2,700+ monthly visitors, boosting digital outreach by 60% and improving performance by 40% — teaching him the art of balancing design, usability, and code efficiency.
              </p>
            </motion.div>

            {/* Feature Cards as Newspaper Columns */}
            <div className="grid md:grid-cols-3 gap-6 border-t-2 border-foreground pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="border-2 border-foreground p-4 bg-background"
                >
                  <div className="flex items-center gap-3 mb-3 border-b-2 border-foreground pb-2">
                    <feature.icon className="w-6 h-6 text-foreground" />
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-serif text-xs leading-relaxed text-foreground/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
