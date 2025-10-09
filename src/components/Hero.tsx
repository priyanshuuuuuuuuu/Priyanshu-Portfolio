import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Priyanshu_Pandey_Resume.pdf";
    link.download = "Priyanshu_Pandey_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Newspaper Masthead */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 border-y-4 border-double border-foreground py-6"
          >
            <div className="text-xs tracking-widest text-muted-foreground mb-2 font-serif">
              PROFESSIONAL PORTFOLIO • ESTABLISHED 2025 • DIGITAL EDITION
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-2">
              PRIYANSHU PANDEY
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm font-serif">
              <span className="text-muted-foreground">VOL. 1</span>
              <span className="w-2 h-2 bg-foreground rounded-full"></span>
              <span className="text-muted-foreground">COMPUTER SCIENCE CHRONICLES</span>
              <span className="w-2 h-2 bg-foreground rounded-full"></span>
              <span className="text-muted-foreground">NO. 1</span>
            </div>
          </motion.div>

          {/* Subheading Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-y-2 border-foreground py-3 mb-8 bg-foreground text-background"
          >
            <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
              WORLD NEWS • TECH STORIES • LATEST UPDATES
            </h2>
          </motion.div>

          {/* Main Article Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-4 border-double border-foreground p-6 bg-card/50">
            {/* Left Column - Photo Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="border-4 border-double border-foreground p-4 bg-background">
                {/* Circular Photo Frame */}
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <div className="absolute inset-0 border-8 border-double border-foreground rounded-full"></div>
                  <div className="absolute inset-2 border-4 border-foreground rounded-full overflow-hidden">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
                
                <div className="text-center border-t-2 border-b-2 border-foreground py-2 mb-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                    Priyanshu Pandey
                  </h3>
                </div>
                
                <p className="font-serif text-sm text-center italic border-b border-foreground pb-3 mb-3">
                  Computer Science Student at IIIT Delhi
                </p>
                
                <div className="space-y-2 text-xs font-serif leading-relaxed">
                  <p className="border-l-2 border-foreground pl-2">
                    <span className="font-bold">LOCATION:</span> IIIT Delhi
                  </p>
                  <p className="border-l-2 border-foreground pl-2">
                    <span className="font-bold">YEAR:</span> 2023 - 2027
                  </p>
                  <p className="border-l-2 border-foreground pl-2">
                    <span className="font-bold">ROLE:</span> Student Council Member
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Main Article */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-8"
            >
              {/* Article Headline */}
              <div className="border-b-4 border-double border-foreground pb-4 mb-4">
                <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight mb-2">
                  DIGITAL CHRONICLES OF A COMPUTER SCIENCE ENGINEER & PROBLEM SOLVER
                </h2>
                <p className="text-sm font-serif italic text-muted-foreground">
                  Exclusive Portfolio • Aspire Scholar • Future Tech Leader
                </p>
              </div>

              {/* Article Body in Columns */}
              <div className="columns-1 sm:columns-2 gap-6 font-serif text-sm leading-relaxed text-justify">
                <p className="mb-4">
                  <span className="font-bold text-5xl float-left mr-2 leading-none">न</span>
                  मस्कार! Priyanshu Pandey, a Computer Science student at IIIT Delhi, represents a new generation of developers who transform ideas into impactful digital experiences. For him, coding transcends mere syntax—it&apos;s about solving real problems creatively.
                </p>
                
                <p className="mb-4">
                  With over 500 Data Structures and Algorithms problems solved and multiple hackathon victories, his journey spans Web Development, Data Science, and Machine Learning. Proficient in C++, Python, and JavaScript, he builds clean, efficient, and scalable solutions.
                </p>
                
                <p className="mb-4">
                  During his internship at VSM Pantnagar, he redesigned a platform serving 2,700+ monthly visitors, boosting digital outreach by 60% and improving performance by 40%. This experience taught him the art of balancing design, usability, and code efficiency.
                </p>
                
                <p className="mb-4 font-bold border-t border-b border-foreground py-2 text-center not-italic">
                  "Aspire Scholarship Scholar - One of 28 Students Across IITs, NITs, and IIITs"
                </p>
                
                <p className="mb-4">
                  Beyond technical prowess, Priyanshu has cleared SSB interviews for the Indian Army and Navy, experiences that strengthened his discipline, leadership, and composure under pressure. He now seeks internship opportunities to apply his skills and contribute to projects that create real impact.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="mt-6 pt-6 border-t-2 border-foreground flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={scrollToProjects}
                    className="w-full sm:w-auto font-serif font-bold uppercase tracking-wider border-4 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Read Full Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleDownloadResume}
                    className="w-full sm:w-auto font-serif font-bold uppercase tracking-wider border-4 border-foreground bg-background hover:bg-foreground hover:text-background rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center mt-8 text-xs font-serif italic text-muted-foreground"
          >
            "All the Code That&apos;s Fit to Print" • Established in Excellence
          </motion.div>
        </div>
      </div>
    </section>
  );
}
