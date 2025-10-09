import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import projectFoodloop from "@/assets/project-foodloop.jpeg";
import projectSamridhi from "@/assets/project-samridhi.jpg";
import projectGreivX from "@/assets/project-greivx.jpg";
import projectAngryBirds from "@/assets/angry.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Foodloop",
    description: "Food Waste Management System connecting donors with recycling partners",
    image: projectFoodloop,
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js", "REST APIs"],
    highlights: [
      "Developed a scalable full-stack web application using HTML, CSS, JavaScript, and MySQL to connect food donors with recycling partners",
      "Enabled real-time tracking and reduced manual scheduling by 70% through automated transport logistics",
      "Integrated role-based access control (RBAC) and designed a relational MySQL database schema to streamline user workflows, ensure data integrity, and improve operational efficiency by 60%",
    ],
    github: "https://github.com/priyanshuuuuuuuuu/Food-Waste-Management-System",
    longDescription:
      "Foodloop is a comprehensive food waste management system that bridges the gap between food donors and recycling partners. The platform enables real-time tracking of food donations and automates transport logistics, reducing manual scheduling efforts by 70%. With role-based access control and a well-designed MySQL database schema, the system ensures data integrity while improving operational efficiency by 60% in simulated deployments.",
  },
  {
    id: 2,
    title: "Samridhi",
    description: "SHG Microfinance Platform with NLP-powered borrower-lender matching",
    image: projectSamridhi,
    tech: ["Python (Flask)", "HTML", "CSS", "JavaScript", "NLP embeddings", "sentence-transformers/OpenAI"],
    highlights: [
      "Deployed a full-stack financial platform with Python (Flask), HTML/CSS/JS, and an NLP embedding engine for real-time borrower–lender matching and recommendation",
      "Built a data pipeline to generate/store vector embeddings and serve ranked results via REST APIs, cutting query latency by ~35%",
    ],
    github: "https://github.com/priyanshuuuuuuuuu/FinPact",
    longDescription:
      "Samridhi is an innovative microfinance platform designed for Self-Help Groups (SHGs). Built with Python Flask and advanced NLP embeddings, it revolutionizes borrower-lender matching by providing intelligent recommendations based on real-time data analysis. The platform features a sophisticated data pipeline that processes and stores vector embeddings, serving ranked results through REST APIs with a 35% reduction in query latency. This enables faster, more accurate matching between borrowers and lenders.",
  },
  {
    id: 3,
    title: "GreivX",
    description: "Grievance Redressal Platform with automated complaint routing and classification",
    image: projectGreivX,
    tech: ["HTML", "CSS", "JavaScript", "Python (Flask)", "scikit-learn", "Google Maps API"],
    highlights: [
      "Built a web app using Flask and JavaScript to automate grievance submission and routing, reducing manual complaint processing by ~50%",
      "Implemented a Naive Bayes model to classify complaints into seven categories and integrated an open-source maps API for authority mapping",
    ],
    github: "https://github.com/priyanshuuuuuuuuu/group_CodeBusters",
    longDescription:
      "GreivX is an intelligent grievance redressal platform that streamlines the complaint management process. Using Flask and JavaScript, the system automates grievance submission and routing, cutting manual processing time by approximately 50%. The platform employs a Naive Bayes machine learning model to automatically classify complaints into seven distinct categories, ensuring they reach the appropriate authorities. Integration with Google Maps API enables precise authority mapping, making the complaint resolution process more efficient and transparent.",
  },
  {
    id: 4,
    title: "Angry Birds-inspired Game",
    description: "A physics-based game using Java and LibGDX framework using OOPs principles",
    image: projectAngryBirds,
    tech: ["Java", "LibGDX", "Box2D"],
    highlights: [
      "Developed a scalable full-stack web application using HTML, CSS, JavaScript, and MySQL to connect food donors with recycling partners",
      "Enabled real-time tracking and reduced manual scheduling by 70% through automated transport logistics",
      "Integrated role-based access control (RBAC) and designed a relational MySQL database schema to streamline user workflows, ensure data integrity, and improve operational efficiency by 60%",
    ],
    github: "https://github.com/priyanshuuuuuuuuu/AP_AngryBirds",
    longDescription:
      "Foodloop is a comprehensive food waste management system that bridges the gap between food donors and recycling partners. The platform enables real-time tracking of food donations and automates transport logistics, reducing manual scheduling efforts by 70%. With role-based access control and a well-designed MySQL database schema, the system ensures data integrity while improving operational efficiency by 60% in simulated deployments.",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Newspaper Section Header */}
            <div className="border-y-4 border-double border-foreground py-4 mb-8">
              <h2 className="font-display text-4xl sm:text-5xl font-black text-center uppercase tracking-tight">
                Portfolio of Works
              </h2>
              <p className="text-center font-serif text-xs tracking-widest text-muted-foreground mt-2">
                FEATURED PROJECTS • TECHNICAL ACHIEVEMENTS • DIGITAL SHOWCASE
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-sm leading-relaxed text-center italic mb-12 border-2 border-foreground p-4 bg-card/50"
            >
              "A curated collection of projects — each representing dedication, innovation, and countless hours of development"
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  className="border-4 border-double border-foreground bg-card/50 overflow-hidden group cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Vintage Photo Frame */}
                  <div className="relative border-b-4 border-double border-foreground">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 sepia-[0.3] contrast-[1.1]"
                        loading="lazy"
                      />
                      {/* Vintage photo grain overlay */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IGZpbHRlcj0idXJsKCNhKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-30" />
                    </div>
                    {/* Photo Caption Box */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t-2 border-foreground px-3 py-2">
                      <p className="font-serif text-[10px] italic text-center">
                        Fig. {index + 1}: {project.title}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-background">
                    <h3 className="font-display text-xl font-bold uppercase mb-2 border-b-2 border-foreground pb-2">
                      {project.title}
                    </h3>
                    <p className="font-serif text-xs leading-relaxed mb-4 text-foreground/80">
                      {project.description}
                    </p>

                    <div className="mb-4 border-t border-foreground pt-3">
                      <p className="font-serif text-[10px] font-bold mb-2 tracking-wider">TECHNOLOGIES EMPLOYED:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-foreground font-serif text-[10px] bg-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 font-serif text-xs border-2 border-foreground rounded-none hover:bg-foreground hover:text-background"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank");
                          }}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="flex-1 font-serif text-xs bg-foreground text-background border-2 border-foreground rounded-none hover:bg-background hover:text-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, "_blank");
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-4 border-double border-foreground rounded-none bg-card">
          {selectedProject && (
            <>
              <DialogHeader className="border-b-4 border-double border-foreground pb-4">
                <DialogTitle className="font-display text-3xl font-black uppercase tracking-tight text-center">
                  {selectedProject.title}
                </DialogTitle>
                <p className="font-serif text-xs text-center text-muted-foreground tracking-widest mt-2">
                  DETAILED PROJECT REPORT • TECHNICAL ANALYSIS
                </p>
              </DialogHeader>

              <div className="space-y-6 p-4">
                {/* Vintage Photo Frame */}
                <div className="border-4 border-double border-foreground">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover grayscale sepia-[0.3] contrast-[1.1]"
                  />
                  <div className="border-t-2 border-foreground bg-background px-4 py-2">
                    <p className="font-serif text-xs italic text-center">
                      Project Documentation Photograph: {selectedProject.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="border-2 border-foreground p-4 bg-background">
                  <p className="font-serif text-sm leading-relaxed text-justify">
                    <span className="font-bold text-4xl float-left mr-2 leading-none">T</span>
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="border-2 border-foreground bg-background">
                  <div className="border-b-2 border-foreground bg-foreground text-background py-2 px-4">
                    <h4 className="font-display font-bold uppercase tracking-wider text-center">
                      Notable Features
                    </h4>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 border-l-4 border-foreground pl-3 py-1 font-serif text-xs">
                          <span className="font-bold">{i + 1}.</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-2 border-foreground bg-background">
                  <div className="border-b-2 border-foreground bg-foreground text-background py-2 px-4">
                    <h4 className="font-display font-bold uppercase tracking-wider text-center">
                      Technologies Employed
                    </h4>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border-2 border-foreground font-serif text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t-2 border-foreground">
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      className="flex-1 rounded-none border-2 border-foreground font-serif font-bold uppercase tracking-wider hover:bg-foreground hover:text-background"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      className="flex-1 rounded-none border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-serif font-bold uppercase tracking-wider"
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demonstration
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
