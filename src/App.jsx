import { useState,useEffect } from 'react';
import { Menu, X, ArrowRight, Download, Mail } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Barber Booking System",
      category: "Full-Stack Development",
      description: "Built a complete appointment scheduling platform with real-time availability, JWT authentication, and role-based access (customer, barber, admin). Deployed across frontend and backend with production-ready infrastructure.",
      tags: ["ASP.NET Core", "React", "Entity Framework Core", "SQL Server", "JWT"],
      link: "#"
    },
    {
      title: "Glampers — Mobile & Web Booking App",
      category: "Cross-Platform Development",
      description: "Developed responsive booking platform with location services and user ratings. Integrated Mendix low-code solutions with Azure infrastructure for scalability and 99.9% uptime.",
      tags: ["Mendix", "React", "Azure", "Location Services"],
      link: "#"
    },
    {
      title: "E-Commerce Platform with Advanced Search",
      category: "Full-Stack Development",
      description: "Led development of full-stack e-commerce platform featuring 100+ products, advanced search capabilities, and checkout flows. Increased user engagement by 20% through optimized UX.",
      tags: ["React", "Node.js", "MongoDB", "REST APIs"],
      link: "#"
    },
    {
      title: "Assembly Instructions AR Mobile App",
      category: "Mobile & AR Development",
      description: "Created cross-platform AR-enabled mobile prototype with Firebase backend. Validated through user testing and improved product functionality by 20%.",
      tags: ["React Native", "Flutter", "Firebase", "AWS", "AR"],
      link: "#"
    },
    {
      title: "Event Booking Web Application",
      category: "Full-Stack Development",
      description: "Delivered full React + Node.js event registration platform serving 100+ users with secure authentication and dynamic scheduling capabilities.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Authentication"],
      link: "#"
    },
    {
      title: "Dynamics AX Customization",
      category: "Enterprise Development",
      description: "Customized Dynamics AX Accounts modules for 150+ users using X++ and C#/.NET. Delivered 30% faster processing with automated deployments via Azure DevOps.",
      tags: ["Dynamics AX", "X++", "C#", ".NET", "Azure DevOps"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Languages", items: ["C#", "JavaScript/TypeScript", "X++", "SQL"] },
    { category: "Frontend", items: ["React", "React Native", "Vue.js", "Tailwind CSS", "Vite"] },
    { category: "Backend & Frameworks", items: [".NET Core", "Node.js", "Express", "Entity Framework Core", "Mendix"] },
    { category: "Databases & Cloud", items: ["SQL Server", "PostgreSQL", "MongoDB", "Azure", "DynamoDB"] },
    { category: "DevOps & Tools", items: ["CI/CD", "Azure DevOps", "GitHub Actions", "Git", "Agile/Scrum"] },
    { category: "Specializations", items: ["RESTful APIs", "JWT Authentication", "TDD", "Secure Coding", "Low-Code Solutions"] }
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Capgemini",
      period: "Jan 2021 – Dec 2025",
      description: "Developed scalable web applications using C#, .NET, React, and Mendix low-code, reducing manual processing by 30%. Maintained 99.9% uptime on production systems while collaborating with cross-functional Agile teams. Led full-stack e-commerce platform increasing engagement by 20%, built AR mobile prototypes, and customized Dynamics AX for 150+ users."
    },
    {
      role: "Junior Developer & Instructor",
      company: "Hello World",
      period: "Jan 2017 – Jan 2019",
      description: "Taught web development and Minecraft programming to 30 children (ages 6-11). Guided 15 students to independently complete and present their own coding projects, fostering foundational programming skills."
    }
  ];

  const testimonials = [
    {
      author: "Team Lead, Capgemini",
      role: "Direct Supervisor",
      text: "Irene is a standout engineer who consistently delivers production-grade solutions. Her ability to bridge low-code platforms with traditional development is invaluable."
    },
    {
      author: "Product Manager",
      role: "E-Commerce Platform",
      text: "Shipped the project 2 weeks early with clean, maintainable code. Her full-stack expertise and attention to performance was crucial to our 20% engagement improvement."
    },
    {
      author: "Cross-Functional Team",
      role: "Glampers Project",
      text: "Excellent communicator who thrives in Agile environments. Balances technical rigor with pragmatism, delivering solutions that work in the real world."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
                Irene Koech
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineer
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl">
                5+ years building scalable web applications and enterprise systems. Specializing in full-stack development with C#/.NET, React, and cloud platforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center gap-2 w-fit"
              >
                View My Work <ArrowRight size={18} />
              </button>
              <button
                className="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2 w-fit"
              >
                <Download size={18} /> Download CV
              </button>
            </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/ikoech" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors" title="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com/in/irene-koech" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors" title="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:ikoechdev@gmail.com" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors" title="Email">
              Email
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I'm a results-driven software engineer with 5+ years of experience building scalable web applications and enterprise systems. I specialize in full-stack development with C#/.NET and React, combining technical excellence with a passion for creating solutions that drive measurable business value.
              </p>
              <p className="text-slate-300 leading-relaxed">
                At Capgemini, I've worked across diverse technologies—from low-code platforms like Mendix to cloud infrastructure on Azure and AWS. I thrive in cross-functional Agile teams, maintaining 99.9% uptime on production systems while continuously optimizing performance and security.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Beyond development, I'm passionate about mentoring, contributing to technical communities, and staying ahead of emerging technologies. I hold certifications in Azure Administration and Mendix Development, and am currently pursuing a C# and AI diploma.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-8 border border-slate-700">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">Professional Experience</h3>
                  <p className="text-3xl font-bold text-white">5+ Years</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">Production Uptime</h3>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">Tech Stack Mastery</h3>
                  <p className="text-3xl font-bold text-white">10+</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-2">CVs Reviewed</h3>
                  <p className="text-3xl font-bold text-white">400+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="p-8 space-y-4">
                  <div className="text-sm text-blue-400 font-semibold">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-semibold mt-6 group-hover:gap-3 transition-all">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-blue-400">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-8 relative">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-blue-400 font-semibold">{exp.company}</p>
                <p className="text-slate-400 text-sm mb-3">{exp.period}</p>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-6 space-y-4 hover:border-blue-500 transition-colors">
                <p className="text-slate-300 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
            <p className="text-xl text-slate-300">
              Open to collaborating on impactful projects, consulting opportunities, and technical discussions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="mailto:ikoechdev@gmail.com" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center gap-2">
              <Mail size={18} /> Get In Touch
            </a>
            <a href="https://linkedin.com/in/irene-koech" className="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200">
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              📍 Helsingborg, Sweden · 📞 +46 76 710 93 38
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400">© 2024 Irene Koech. Software Engineer, Helsingborg Sweden.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://linkedin.com/in/irene-koech" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="mailto:ikoechdev@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
