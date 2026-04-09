import ContactForm from "@/components/ContactForm";
import Journey from "@/components/Journey";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  Terminal,
  X,
  Copy,
  Check,
  ArrowUp
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export default function DeveloperImranPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ["home", "about", "skills", "projects", "journey", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => {
        setCopied(false);
        setToastVisible(false);
      }, 3000);
    });
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = {
    Frontend: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Next.js"],
    Backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Firebase Auth", "Mongoose"],
    Tools: ["Git & GitHub", "Vite", "Postman", "Framer Motion", "Vercel", "Netlify"],
  };

  const projects = [
    {
      title: "BloodBond — Blood Donation Network",
      description: "A comprehensive MERN stack platform connecting blood donors with recipients. Features real-time coordination, verified matching, and a robust admin dashboard for tracking donations.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba7d?auto=format&fit=crop&w=1200&q=80",
      live: "https://blood-donation-roan.vercel.app/",
      github: "https://github.com/imranhossain2024",
      accent: "from-red-500 to-rose-600"
    },
    {
      title: "Dragon News Web Application",
      description: "A responsive React based news web application that loads dynamic news from API. The project includes Firebase authentication for login and registration, category-based news filtering, and a fully mobile responsive UI.",
      stack: ["React.js", "JavaScript", "Firebase Auth", "REST API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
      live: "https://dragon-news-355a7.firebaseapp.com/category/01",
      github: "https://github.com/imranhossain2024",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Job Apply Task Project",
      description: "A task project demonstrating JavaScript and React logic to manage job applications and handle dynamic UI behavior. The project focuses on problem solving, component logic, and practical frontend development skills.",
      stack: ["React.js", "JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      live: "https://github.com/imranhossain2024/job-apply",
      github: "https://github.com/imranhossain2024/job-apply",
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full blob" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-500/10 blur-[120px] rounded-full blob [animation-delay:2s]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full blob [animation-delay:4s]" />
      </div>

      {/* Navigation */}
      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass h-16 py-0 flex items-center" : "h-20 py-4 flex items-center"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
              <span className="font-bold text-lg italic">DI</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Developer Imran</div>
              <div className="text-base font-bold tracking-tight">Imran Hossain</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1) || (item.href === "#about" && activeSection === "home");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg relative group",
                    isActive 
                      ? "text-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl w-10 h-10"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="premium" className="hidden sm:flex h-10 rounded-xl">
              <a href="#contact">Start a Project</a>
            </Button>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full glass border-x-0 border-b p-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="p-3 text-lg font-medium hover:bg-accent rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border mt-2">
                  <Button variant="premium" className="w-full h-12 rounded-xl">
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero / About Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <div id="about" className="absolute" style={{ top: '0', height: '10%' }}></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge variant="premium" className="mb-6 py-2 px-4 text-sm animate-bounce">
                <Sparkles className="mr-2 h-4 w-4" /> Open for Remote Collaboration
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
                Crafting <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-500 bg-clip-text text-transparent">Digital Excellence</span> with Code.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-[1.6] font-medium">
                I'm Imran Hossain, a <span className="text-primary">Frontend / MERN Stack Developer</span> obsessed with building performant, 
                high-fidelity web applications that users love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="premium" size="lg" className="rounded-2xl group h-14 px-8 text-lg">
                  <a href="#projects" className="flex items-center">
                    Explore My Work <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl group h-14 px-8 text-lg">
                  <a href="https://drive.google.com/file/d/18pYsr3IqYLhpWjJKDw4u9_zHpiT7dRq6/view?usp=sharing" target="_blank" className="flex items-center">
                    <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" /> View Resume
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                 <div className="flex flex-col">
                   <div className="text-3xl font-bold">12+</div>
                   <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Successful Projects</div>
                 </div>
                 <div className="w-[1px] h-10 bg-border" />
                 <div className="flex flex-col">
                   <div className="text-3xl font-bold">MERN</div>
                   <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Core Expertise</div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
              <Card className="relative overflow-hidden group perspective-1000">
                <CardContent className="p-0">
                  <div className="bg-slate-900 dark:bg-black p-4 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase font-bold">developer-imran-portfolio — 80×24</span>
                    </div>
                  </div>
                  <div className="p-8 font-mono text-sm space-y-4 bg-slate-950/90 h-[400px]">
                    <div className="flex gap-3">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-cyan-400">portfolio</span>
                      <span className="text-white">git:(main)</span>
                      <span className="text-yellow-400">✗</span>
                      <span className="text-white">npm run dev</span>
                    </div>
                    <div className="text-slate-500 animate-pulse">
                      &gt; vite @ v6.0.0
                    </div>
                    <div className="text-emerald-400">
                      ✓ Ready in 245ms
                    </div>
                    <div className="space-y-1">
                      <div className="text-indigo-400">➜  Local:   http://localhost:5173/</div>
                      <div className="text-indigo-400">➜  Network: use --host to expose</div>
                    </div>
                    <div className="pt-4 text-white">
                      const <span className="text-pink-400">Developer</span> = {"{"}
                    </div>
                    <div className="pl-4 text-white">
                      name: <span className="text-emerald-400">'Imran Hossain'</span>,
                    </div>
                    <div className="pl-4 text-white">
                      focus: <span className="text-emerald-400">'Premium MERN Solutions'</span>,
                    </div>
                    <div className="pl-4 text-white">
                      passion: <span className="text-emerald-400">'Clean Code & Performance'</span>
                    </div>
                    <div className="text-white">{"}"}</div>
                    <div className="flex gap-1 pt-4 text-white">
                      <span className="animate-blink w-2 h-5 bg-white inline-block" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <Journey />

        {/* Skills Section */}
        <section id="skills" className="py-24">
           <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Capabilities</Badge>
               <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Cutting-edge Tech Stack</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                I leverage the latest tools to build scalable and maintainable applications.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                   <Card className="h-full border-b-4 border-b-primary/50 group hover:border-b-primary transition-all duration-500">
                    <CardContent className="pt-10">
                       <div className="mb-8 flex items-center justify-between">
                         <h3 className="text-3xl font-extrabold tracking-tight">{category}</h3>
                         <Terminal className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                       </div>
                       <div className="flex flex-wrap gap-3">
                          {items.map(item => (
                            <Badge key={item} variant="secondary" className="px-4 py-2 text-sm bg-secondary/80 hover:bg-primary hover:text-primary-foreground cursor-default transition-all duration-300 font-semibold shadow-sm">
                              {item}
                            </Badge>
                          ))}
                       </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <Badge variant="outline" className="mb-4 px-4 py-1">Portfolio</Badge>
                <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">Selected Works</h2>
              </div>
             <Button variant="outline" className="rounded-xl group h-12">
                <a href="https://github.com/imranhossain2024" target="_blank" className="flex items-center">
                  View My GitHub Profile <Github className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                </a>
             </Button>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden group flex flex-col h-full hover:scale-[1.02] transition-transform duration-500">
                    <div className="relative aspect-video overflow-hidden">
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity z-10", project.accent)} />
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg text-white">
                            <ExternalLink className="h-4 w-4" />
                         </div>
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col">
                       <div className="flex flex-wrap gap-2 mb-4">
                          {project.stack.map(s => <span key={s} className="text-[10px] uppercase tracking-wider font-bold text-primary">{s}</span>)}
                       </div>
                       <h3 className="text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                       <p className="text-muted-foreground text-base leading-[1.7] mb-8 font-medium">
                         {project.description}
                       </p>
                       <div className="mt-auto flex gap-4">
                         <Button size="lg" className="rounded-xl flex-1 font-bold">
                           <a href={project.live} target="_blank" className="w-full">
                             {project.live.includes("github.com") ? "GitHub Repo" : "Live Demo"}
                           </a>
                         </Button>
                         {project.github && !project.live.includes(project.github) && (
                           <Button variant="outline" size="lg" className="rounded-xl flex-1 font-bold">
                             <a href={project.github} target="_blank" className="w-full">View Code</a>
                           </Button>
                         )}
                       </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
           <Card className="bg-primary/5 border-primary/20 p-8 lg:p-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div>
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">Let’s build something <span className="text-primary italic">amazing</span> together.</h2>
                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                      I'm currently available for freelance work and full-time remote opportunities. 
                      Let's chat about your next big idea.
                    </p>
                    
                    <div className="space-y-6">
                       <div 
                          className="flex items-center gap-4 group cursor-pointer"
                          onClick={() => copyToClipboard("trximran775@gmail.com")}
                       >
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-active:scale-95 shadow-lg shadow-primary/5">
                             {copied ? <Check className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-widest flex items-center justify-between gap-2">
                              <span>{copied ? 'Copied to Clipboard!' : 'Email me'}</span>
                              {!copied && <Copy className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />}
                            </div>
                            <div className="text-lg font-bold group-hover:text-primary transition-colors">trximran775@gmail.com</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                             <Github className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">GitHub</div>
                            <div className="text-lg font-bold">github.com/imranhossain2024</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-4 group">
                          <Button variant="outline" className="w-full rounded-2xl h-12 border-primary/20 hover:border-primary">
                             <a href="https://drive.google.com/file/d/18pYsr3IqYLhpWjJKDw4u9_zHpiT7dRq6/view?usp=sharing" target="_blank" className="flex items-center justify-center w-full">
                                <Download className="mr-2 h-5 w-5" /> View Resume / CV
                             </a>
                          </Button>
                       </div>
                    </div>
                 </div>

                 <div className="bg-background shadow-2xl p-8 rounded-3xl border border-primary/10">
                    <ContactForm />
                 </div>
              </div>
           </Card>
        </section>
      </main>

      <footer className="py-12 border-t mt-12 bg-accent/30">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold italic">DI</div>
                  <span className="font-bold text-lg tracking-tight">Imran Hossain</span>
               </div>
               
               <div className="flex items-center gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Github className="h-5 w-5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"><Mail className="h-5 w-5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"><MessageCircle className="h-5 w-5" /></a>
               </div>
               
               <div className="text-sm text-muted-foreground font-medium">
                  © {new Date().getFullYear()} • Handcrafted by Developer Imran
               </div>
            </div>
         </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-8 right-8 z-[60]"
          >
            <Button
              variant="premium"
              size="icon"
              className="w-14 h-14 rounded-2xl shadow-2xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed top-12 left-1/2 z-[100] bg-slate-900 border border-primary/30 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Check className="h-4 w-4" />
            </div>
            <span className="font-bold text-sm text-foreground">Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
