import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, ChevronDown, Code, Database, Palette, Zap } from 'lucide-react';

const PersonalWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'React', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Database },
    { name: 'Python', level: 75, icon: Code },
    { name: 'UI/UX Design', level: 70, icon: Palette },
    { name: 'Data Visualization', level: 85, icon: Zap }
  ];

  const projects = [
    {
      title: 'Interactive Chart Builder',
      description: 'A powerful data visualization tool that creates beautiful, interactive charts from CSV data.',
      tech: ['React', 'D3.js', 'Node.js', 'Recharts'],
      image: '/api/placeholder/400/250',
      demo: '#',
      code: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory and payment processing.',
      tech: ['React', 'Express', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      demo: '#',
      code: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: '/api/placeholder/400/250',
      demo: '#',
      code: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        <div className={`text-center z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
                YN
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I create beautiful, interactive web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all flex items-center gap-2 justify-center">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hi, I'm a passionate developer!</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                modern, scalable applications using cutting-edge technologies. I love turning 
                complex problems into simple, beautiful solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={20} className="text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a href={project.code} className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:your.email@example.com" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              
              <a 
                href="#" 
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
