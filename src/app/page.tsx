"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  MapPin,
  Calendar,
  Star,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  function DarkOn() {
    setDark(true);
    document.documentElement.classList.add("dark");
  }
  function DarkOff() {
    setDark(false);
    document.documentElement.classList.remove("dark");
  }

  const [activeSection, setActiveSection] = useState("home");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projects = [
    {
      title: "Short-Url",
      description:
        "A full-stack URL shortening application that allows users to generate, manage, and track shortened links with custom aliases and analytics.",
      longDescription:
        "Developed a scalable URL shortening service where users can create short links with unique identifiers, monitor click statistics, and manage their links via a responsive dashboard. Implemented authentication for secure access and integrated analytics to provide real-time usage insights.",
      tech: ["React", "Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      image: "/short-url.png",
      liveUrl: "https://short-url-umber.vercel.app/",
      githubUrl: "https://github.com/Badralbb/own-projects",
      featured: true,
    },
    {
      title: "Instagram",
      description: "Instagram clone web site",
      longDescription:
        "Features include create account, login-in, real-time collaboration, follow and unfollow.It's like instagram",
      tech: [
        "Next.js",
        "TypeScript",
        "Rest-Api",
        "MongoDB",
        "Tailwind CSS",
        "Vercel",
      ],
      image: "/instagram.png",
      liveUrl: "https://instagram-sage-rho.vercel.app/instagram",
      githubUrl: "https://github.com/Badralbb/own-projects",
      featured: true,
    },
    {
      title: "Pinecone Dashboard Monorepo",
      description: "There are many projects more than 10 of company.",
      longDescription: "I contiributed all of them.",
      tech: ["CI/CD", "Graphql", "React", "D1", "Cloudflare", "Monorepo"],
      image: "/dash-pinecone.png",
      liveUrl: "https://dash.pinecone.mn/",
      githubUrl: "https://github.com/Badralbb/own-projects",
      featured: true,
    },
    {
      title: "Bid-Scape",
      description:
        "A real-time auction platform where users can place bids, track live updates, and explore diverse product categories.",
      longDescription:
        "Developed a scalable full-stack auction system enabling real-time bidding with instant updates powered by WebSockets/Ably. Implemented user authentication, product listings with categories, bid history tracking, and secure payment integration. Designed an intuitive UI for bidders and an admin dashboard for managing auctions and users.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Ably",
        "Monorepo",
      ],
      image: "/bid-scape.png",
      liveUrl: "https://superduper-sigma.vercel.app/client",
      githubUrl: "https://github.com/Badralbb",
      featured: true,
    },
    {
      title: "UBFix",
      description:
        "Comprehensive social media monitoring and analytics platform for businesses and content creators.",
      longDescription:
        "Track engagement metrics, analyze audience demographics, schedule posts, and generate detailed reports across multiple social media platforms.",
      tech: [
        "React",
        "Next.js",
        "MongoDB",
        "Mongoose",
        "Rest Api",
        "Framer-motion",
      ],
      image: "/UBFix.png",
      liveUrl: "https://hackoton.vercel.app/",
      githubUrl: "https://github.com/Badralbb/hackoton",
      featured: true,
    },
    {
      title: "E-Commerce",
      description:
        "A full-stack e-commerce platform with secure authentication, product management, and seamless checkout experience.",
      longDescription:
        "Built a scalable online store featuring user authentication, product catalog with categories, shopping cart, and order management system. Integrated secure payment gateway, implemented responsive UI for both desktop and mobile, and developed an admin dashboard for managing inventory, users, and sales analytics.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: "/e-commerce.png",
      liveUrl: "https://e-commerceee-web.vercel.app/",
      githubUrl: "https://github.com/24L-MP1D/hawks",
      featured: true,
    },
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", icon: Code },
        { name: "TypeScript/Javascript", icon: Code },
        { name: "HTML/CSS", icon: Code },
        { name: "Tailwind CSS", icon: Globe },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: Database },
        { name: "Java basic", icon: Database },
        { name: "Express.js", icon: Database },
        { name: "JWT / OAuth authentication", icon: Database },
        { name: "PostgreSQL/MongoDB", icon: Database },
        { name: "GraphQL/REST APIs", icon: Globe },
      ],
    },
    {
      category: "Mobile & Cloud",
      skills: [
        { name: "React Native", icon: Smartphone },
        { name: "Cloudflare (Workers, D1)", icon: Smartphone },
        { name: "Vercel", icon: Globe },
        { name: "CI/CD Pipelines", icon: Code },
      ],
    },
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Pinecone LLC",
      period: "2023 - Present",
      location: "Mongolia, Ulaanbaatar",
      description:
        "Build scalable sub systems. Architected microservices and microfrontends.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Code refactor team of developers",
        "Understood CI/CD pipeline and learned to work on CI/CD",
      ],
    },
    {
      title: "Coding Teacher",
      company: "Pinecone Academy",
      period: "2022 - Present",
      location: "Ulaanbaatar, Mongolia",
      description:
        "Instructed students in web development, programming fundamentals, and modern frameworks. Designed and implemented interactive projects to enhance learning outcomes.",
      achievements: [
        "Developed and delivered comprehensive coding curricula for 150+ students",
        "Guided students through building full-stack web applications and responsive interfaces",
        "Mentored students in problem-solving, debugging, and best coding practices",
      ],
    },
    {
      title: "Shop Assistant",
      company: "Dorj Zandan LLC",
      period: "2019 - 2021",
      location: "Ulaanbaatar, Mongolia",
      description:
        "Provided excellent customer service, managed sales transactions, and maintained store organization in a fast-paced retail environment.",
      achievements: [
        "Assisted over 100 customers daily, ensuring high satisfaction and repeat business",
        "Managed inventory and restocked merchandise efficiently, reducing stockouts by 20%",
        "Trained new staff on store procedures and customer service best practices",
      ],
    },
  ];

  const Navigation = () => (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 
             bg-background/80 dark:bg-slate-900/80 
             backdrop-blur-md border-b 
             border-slate-200 dark:border-slate-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold text-foreground dark:text-slate-100"
            whileHover={{ scale: 1.05 }}
          >
            Badral
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground dark:text-slate-300 
                       hover:text-foreground dark:hover:text-white 
                       transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </motion.a>
              )
            )}
            {dark ? (
              <Sun
                onClick={DarkOff}
                className="cursor-pointer text-slate-800 dark:text-slate-100"
              />
            ) : (
              <Moon
                onClick={DarkOn}
                className="cursor-pointer text-slate-800 dark:text-slate-100"
              />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background text-foreground transition-colors duration-300"
      >
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-border bg-gradient-to-br from-accent to-secondary">
              <img
                src="bdrl.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground dark:text-white/90 muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Badral
          </motion.h1>

          {/* Role */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 dark:text-white font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Specializing in React, Node.js, and Next.js. I build scalable
            applications and webs that serve many users, with 2+ years of
            experience turning complex problems into elegant solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="text-white bg-black hover:bg-slate-900 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 dark:text-white/90">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 dark:text-white/90">
                2+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 dark:text-white/90">
                400+
              </div>
              <div className="text-sm text-muted-foreground">
                Leetcode Problems
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2 dark:text-white/90">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-background text-foreground transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-12"
          >
            {/* Text Side */}
            <motion.div variants={fadeInUp} className="flex-1">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                About Me
              </h2>

              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                I'm a passionate full-stack developer with over 2 years of
                experience building scalable web applications and mobile
                solutions. My journey started from Pinecone Academy.
              </p>

              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                I specialize in modern JavaScript frameworks, API services, and
                agile development practices. My approach combines technical
                excellence with user-centered design, ensuring that every
                project not only functions flawlessly but also provides an
                intuitive user experience.
              </p>

              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                When I'm not coding, I contribute to open-source projects,
                mentor aspiring developers through coding bootcamps. I believe
                in continuous learning and sharing knowledge with other
                developers.
              </p>

              {/* Social Buttons */}
              <div className="flex gap-4">
                <a href="https://github.com/Badralbb" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/badralbaigalmaa/"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  target="_blank"
                  href="https://leetcode.com/u/badralbaigalmaa/"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <img
                      src="leetcode.png"
                      className="w-5 h-5"
                      alt="Leetcode"
                    />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Skills Side */}
            <motion.div
              variants={fadeInUp}
              className="flex-1 flex flex-col items-center"
            >
              <div>
                {skillCategories.map((category, _categoryIndex) => (
                  <div key={category.category} className="mb-8">
                    <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                      {category.category}
                    </h3>
                    <div className="space-y-4 mt-2">
                      {category.skills.map((skill, _index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Work Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              My professional journey building impactful software solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="w-fit bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {exp.company}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                              <Star className="h-3 w-3 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my recent work demonstrating technical expertise and
              creative problem-solving
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Featured Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div key={project.title} variants={fadeInUp}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <Button
                            className="bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            size="sm"
                            variant="secondary"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            className="bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            size="sm"
                            variant="outline"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                        <Badge className="absolute top-2 right-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                          {project.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              className="text-xs bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to chat about
              technology, I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Image Card */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden shadow-sm">
                <img
                  src="/bdrl.jpeg"
                  className="w-full h-full object-cover rounded-md"
                  alt="Badral"
                />
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        Email
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        badralbaigalmaa7@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        Location
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Mongolia, UB
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        Availability
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Open to new opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-gray-900 dark:text-gray-100">
                  Follow me
                </h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Badralbb" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/badralbaigalmaa/"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://leetcode.com/u/badralbaigalmaa/"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      <img
                        src="leetcode.png"
                        className="w-5 h-5"
                        alt="Leetcode"
                      />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
