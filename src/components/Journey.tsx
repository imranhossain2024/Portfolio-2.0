import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";

const timelineData = [
  {
    title: "Started learning web development",
    description: "Initiated my journey into the digital world, driven by curiosity and a desire to build things.",
    icon: <Globe className="h-5 w-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Learned HTML, CSS and responsive design",
    description: "Mastered the structural and stylistic foundations of the web, ensuring pixel-perfect layouts across devices.",
    icon: <Layers className="h-5 w-5" />,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Learned JavaScript and DOM manipulation",
    description: "Breathed life into static pages with dynamic interactions and complex logic.",
    icon: <Zap className="h-5 w-5" />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Started working with React.js",
    description: "Embraced component-based architecture to build scalable and maintainable user interfaces.",
    icon: <Code2 className="h-5 w-5" />,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Built projects using React and Tailwind CSS",
    description: "Combined modern styling with declarative UI patterns to create stunning, high-performance web apps.",
    icon: <Sparkles className="h-5 w-5" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Integrated APIs and Firebase authentication",
    description: "Connected applications to the real world with secure auth and seamless data integration.",
    icon: <Cpu className="h-5 w-5" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Learning MERN stack development",
    description: "Mastering the full stack to build robust, end-to-end web applications with MongoDB and Node.js.",
    icon: <Layers className="h-5 w-5" />,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Preparing for remote developer jobs",
    description: "Polishing skills and portfolio to collaborate with international teams and contribute to impactful products.",
    icon: <Rocket className="h-5 w-5" />,
    gradient: "from-rose-500 to-orange-500",
  },
];

const currentLearning = [
  { tech: "Advanced React", level: 85 },
  { tech: "API Integration", level: 90 },
  { tech: "TypeScript", level: 70 },
  { tech: "Portfolio Projects", level: 95 },
];

const futureGoals = [
  "Work with international remote teams",
  "Build scalable web applications",
  "Contribute to real world products",
  "Become a strong MERN stack developer",
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1">My Story</Badge>
          <h2 className="text-4xl lg:text-7xl font-extrabold mb-6 tracking-tight">My Developer Journey</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-[1.6] font-medium">
            From writing my first line of HTML to architecting full-stack MERN applications. 
            A timeline of continuous growth, learning, and passion for the digital craft.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-indigo-500 to-transparent opacity-30" />

          {timelineData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0",
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-primary/50 flex items-center justify-center z-10 shadow-lg shadow-primary/20 bg-background">
                <div className={cn("w-3 h-3 rounded-full bg-gradient-to-tr", item.gradient)} />
              </div>

              {/* Content Card */}
              <div className="md:w-1/2 pl-12 md:pl-0">
                <Card className="overflow-hidden group hover:border-primary/50 transition-all duration-500 border-l-4" style={{ borderLeftColor: `var(--${item.gradient.split('-')[1]})` }}>
                  <CardContent className="p-8 md:p-10">
                    <div className={cn("w-12 h-12 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-br shadow-xl", item.gradient)}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors tracking-tight text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground dark:text-slate-300 text-base leading-[1.7] font-medium">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Empty Space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Current Focus & Growth Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-12">
          {/* Skills Evolution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">Current Learning</h3>
            </div>
            
            <div className="space-y-6">
              {currentLearning.map((item) => (
                <div key={item.tech} className="space-y-2">
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-extrabold text-sm tracking-widest uppercase text-foreground">{item.tech}</span>
                     <span className="text-sm font-bold text-primary">{item.level}% Proficiency</span>
                  </div>
                  <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shadow-inner">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">Future Goals</h3>
            </div>

            <div className="grid gap-4">
              {futureGoals.map((goal, idx) => (
                <Card key={idx} className="bg-accent/30 border-none group hover:bg-accent/50 transition-colors">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-extrabold text-base">
                      0{idx + 1}
                    </div>
                    <p className="font-bold text-lg text-muted-foreground group-hover:text-foreground transition-colors leading-tight">{goal}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
