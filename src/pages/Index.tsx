import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";
import portrait from "@/assets/morgan-lee-portrait.png";
import ProjectCard from "@/components/ProjectCard";
import ProjectImg1 from "@/assets/projects/project_img1.png";
import ProjectImg2 from "@/assets/projects/project_img2.png";
import ProjectImg3 from "@/assets/projects/project_img3.png";
import ProjectImg4 from "@/assets/projects/project_img4.png";
import ProjectImg5 from "@/assets/projects/project_img5.png";
import ProjectImg6 from "@/assets/projects/project_img6.png";
import ProjectImg7 from "@/assets/projects/project_img7.png";
import ProjectImg8 from "@/assets/projects/project_img8.png";
import ProjectImg9 from "@/assets/projects/project_img9.png";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Gamepad2, Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import TechStack from "@/components/TechStack";


const projects = [
  {
    title: "War Riders",
    description: "War Riders, a blockchain-based MMO where players mine Benzene (BZN) and battle with customizable NFT vehicles in a post-apocalyptic wasteland.",
    image: ProjectImg1,
    href: "https://warriders.com/",
    tags: ["NFT", "Web3", "JQuery"],
    githubUrl: "#",
  },
  {
    title: "Monsterra Free Play To Earn & Multi-chain NFT Game",
    description: "Free blockchain game , where you farm, build, and battle with cute monsters to earn NFTs on chains like BNB and Avalanche.",
    image: ProjectImg2,
    href: "https://monsterra.io",
    tags: ["NFT", "React", "Nginx", "Ubuntu"],
    githubUrl: "#",
  },
  {
    title: "MoonieNFT",
    description: "Play-to-earn platform where users can collect unique Moonie NFTs to participate in arcade games, space missions, and price races, earning $MNY tokens and prizes in the Moonieverse",
    image: ProjectImg3,
    href: "https://moonie.io/",
    tags: ["NFT", "Swiper", "OneSignal"],
    githubUrl: "#",
  },
  {
    title: "Revenant",
    description: "Decentralized blockchain gaming platform on the Metis Network where gamers, developers, and investors can play, earn $GAMEFI tokens, and engage with NFT-integrated games.",
    image: ProjectImg4,
    href: "https://revenant.io",
    tags: ["Wordpress", "PHP", "MySQL"],
    githubUrl: "#",
  },
  {
    title: "Avatly - Fashion Metaverse",
    description: "The world's first fashion metaverse mall, offering an immersive shopping experience with ultra-realistic avatars and virtual clothes on a tropical island, accessible across multiple platforms using Unreal Engine 5 and Magento.",
    image: ProjectImg5,
    href: "https://avatly.com/",
    tags: ["Web3", "React", "Next.js", "Swiper"],
    githubUrl: "",
  },
  {
    title: "Age Of Zalmoxis",
    description: "Website for Age of Zalmoxis, a play-to-earn MMORPG set in ancient Dacia, featuring NFT and blockchain integration for a fantasy adventure with historical elements.",
    image: ProjectImg6,
    href: "https://ageofzalmoxis.com/",
    tags: ["NFT", "React", "Vercel"],
    githubUrl: "",
  },
  {
    title: "Befitter",
    description: "Web3 FitnessFi and SocialFi app that rewards users with $FIU and $HEE tokens for activities like walking, running, and cycling, using NFT shoes and virtual pets to promote a healthier lifestyle.",
    image: ProjectImg7,
    href: "https://befitter.io/",
    tags: ["Web3", "React", "Next.js", "Mui", "Vercel"],
    githubUrl: "",
  },
  {
    title: "Tales of Elleria",
    description: "The website for Tales of Elleria, a play-to-earn RPG on Arbitrum where players minted heroes, earned $ELM and $MEDALS through quests, and crafted NFTs.",
    image: ProjectImg8,
    href: "https://www.talesofelleria.com/",
    tags: ["React", "Next.js", "Tailwind"],
    githubUrl: "",
  },
  {
    title: "Vulcano",
    description: "Website for Vulcano, an NFT-based play-to-earn game and metaverse featuring a battle between light and darkness.",
    image: ProjectImg9,
    tags: ["Web3", "React", "Next.js", "AngularJS","Vercel"],
    href: "https://www.vulcano.gg/",
    githubUrl: "",
  },
];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Morgan Lee",
    jobTitle: "Blockchain & Full-Stack Developer",
    url: "/",
    description: "Seasoned full‑stack developer specializing in blockchain and scalable applications.",
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@morganlee.dev?subject=${subject}&body=${body}`;
    toast({ title: "Opening email…", description: "Your email client will draft the message." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 bg-grid-neon opacity-40 -z-10" aria-hidden />
      <header className="sticky top-0 z-20 backdrop-blur border-b border-border/50 glass-panel">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <a href="#home" className="text-4xl font-semibold story-link">
            Morgan Lee
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="story-link">About</a>
            <a href="#stack" className="story-link">Tech Stack</a>
            <a href="#projects" className="story-link">Projects</a>
            <a href="#contact" className="story-link">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="relative overflow-hidden">
        <NetworkBackground />
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary">Blockchain Developer</span> & Full‑Stack Engineer
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              I build secure, scalable, and performance‑driven products. 7+ years across web, mobile, and blockchain — leading teams, mentoring devs, and shipping mission‑critical software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" className="hover-scale" asChild>
                <a href="#projects" aria-label="View projects">View Projects</a>
              </Button>
              <Button variant="secondary" className="hover-scale" asChild>
                <a href="#contact" aria-label="Contact Morgan">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <img
                src={portrait}
                alt="Portrait of Morgan Lee, blockchain & full‑stack developer"
                className="h-60 w-60 md:h-80 md:w-80 rounded-full object-cover card-elevated shadow-glow"
                loading="lazy"
              />
              <div className="absolute -inset-2 rounded-full bg-hero opacity-20 blur-2xl" aria-hidden />
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto py-16">
          <article className="max-w-3xl">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="mt-4 text-muted-foreground">
              I am a seasoned Full‑Stack Developer with over 7 years of experience building high‑quality web and mobile applications. My expertise spans Blockchain, PHP (Laravel), ASP.NET, C#, React, AngularJS, JavaScript, MySQL, MongoDB, PostgreSQL, Supabase, Firebase, and Android. I specialize in crafting scalable, secure, and performance‑driven solutions tailored to client requirements.
            </p>
            <p className="mt-4 text-muted-foreground">
              Throughout my career, I’ve led development teams, mentored junior developers, and delivered mission‑critical projects for enterprise and digital marketing clients. I write clean, maintainable code and follow best practices in architecture and development methodologies including Agile and CI/CD.
            </p>
          </article>
        </section>


        <section id="stack" className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold">Tech Stack</h2>
          <p className="text-muted-foreground mt-2">Technologies I work with daily, organized by category.</p>
          <div className="mt-6">
            <TechStack />
          </div>
        </section>

        <section id="projects" className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <br />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                image={p.image}
                tags={p.tags}
                githubUrl={p.githubUrl}
              />
            ))}
          </div>
          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="hover-scale"
              >
                {showAllProjects ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </section>

        <section id="contact" className="container mx-auto py-16">
          <div className="rounded-lg glass-panel neon-border p-8">
            <h2 className="text-3xl font-semibold">Let’s build something impactful</h2>
            <p className="text-muted-foreground mt-2">Available for blockchain, backend, and full‑stack engagements.</p>
            <form onSubmit={submitContact} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <div className="md:col-span-2 flex items-center gap-4">
                <Button variant="hero" className="hover-scale" type="submit">
                  <Mail className="size-4" /> Send Message
                </Button>
                <a href="https://github.com/" aria-label="GitHub" className="story-link inline-flex items-center gap-2">
                  <Github className="size-5" /> GitHub
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn" className="story-link inline-flex items-center gap-2">
                  <Linkedin className="size-5" /> LinkedIn
                </a>
              </div>
            </form>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <footer className="container mx-auto py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Morgan Lee · All rights reserved
      </footer>
    </div>
  );
};

export default Index;
