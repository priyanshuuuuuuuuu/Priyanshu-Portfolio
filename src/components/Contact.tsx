  import { motion } from "framer-motion";
  import { useInView } from "framer-motion";
  import { useRef, useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { useToast } from "@/hooks/use-toast";
  import { Github, Linkedin, Mail, Code2 } from "lucide-react";
  import emailjs from "@emailjs/browser";

  export function Contact() {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      setIsSubmitting(true);

      try {
        await emailjs.send(
          "service_0zn28e9", // ✅ your service ID
          "template_z8hqb4r", // ⚠️ replace this with your actual EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "z8FdCt5A0DeGxf_6X" // ✅ your public key
        );

        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });

        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error:", error || error);
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const socials = [
      { icon: Github, label: "GitHub", href: "https://github.com/priyanshuuuuuuuuu" },
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priyaanshuu/" },
      { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/priyanshuuuuuuuuu/" },
      { icon: Mail, label: "Email", href: "mailto:priyanshupandeynov18@gmail.com" },
    ];

    const contactInfo = {
      phone: "+91 8595076818",
      email: "priyanshupandeynov18@gmail.com",
    };

    return (
      <section id="contact" className="py-20 lg:py-32" ref={ref}>
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
                Contact Information
              </h2>
              <p className="text-center font-serif text-xs tracking-widest text-muted-foreground mt-2">
                CORRESPONDENCE WELCOME • INQUIRIES INVITED • CONNECTIONS ENCOURAGED
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-sm leading-relaxed text-center italic mb-12 border-2 border-foreground p-4 bg-card/50"
            >
              "Professional inquiries, collaborative opportunities, and general correspondence are warmly received"
            </motion.p>

            <div className="border-4 border-double border-foreground p-6 sm:p-8 bg-card/50">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="border-2 border-foreground p-6 bg-background"
                >
                  <h3 className="font-display text-xl font-bold uppercase mb-4 border-b-2 border-foreground pb-2">
                    Send Message
                  </h3>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-serif text-xs font-bold mb-1 tracking-wider"
                      >
                        YOUR NAME
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-none border-2 border-foreground font-serif text-sm"
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-serif text-xs font-bold mb-1 tracking-wider"
                      >
                        ELECTRONIC MAIL
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-none border-2 border-foreground font-serif text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-serif text-xs font-bold mb-1 tracking-wider"
                      >
                        MESSAGE
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-none border-2 border-foreground min-h-[120px] font-serif text-sm"
                        placeholder="State your business..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-none border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-serif text-sm font-bold uppercase tracking-wider"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Dispatching..." : "Send Correspondence"}
                    </Button>
                  </form>
                </motion.div>

                {/* Social Links & Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="border-2 border-foreground p-6 bg-background">
                    <h3 className="font-display text-xl font-bold uppercase mb-4 border-b-2 border-foreground pb-2">
                      Public Networks
                    </h3>
                    <p className="font-serif text-xs mb-4 leading-relaxed">
                      Available for professional engagement on the following platforms
                    </p>

                    <div className="space-y-3">
                      {socials.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors group"
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="font-serif text-sm font-bold">{social.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="border-2 border-foreground p-6 bg-background"
                  >
                    <h3 className="font-display text-lg font-bold uppercase mb-2 border-b-2 border-foreground pb-2">
                      Direct Contact
                    </h3>
                    <div className="font-serif text-xs leading-relaxed space-y-2">
                      <p className="border-l-2 border-foreground pl-2">
                        <span className="font-bold">Phone:</span> {contactInfo.phone}
                      </p>
                      <p className="border-l-2 border-foreground pl-2">
                        <span className="font-bold">Email:</span> {contactInfo.email}
                      </p>
                      <p className="mt-3 text-foreground/80 italic">
                        Correspondence typically acknowledged within twenty-four hours.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

