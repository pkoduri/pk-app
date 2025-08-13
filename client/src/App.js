import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, Download, ChevronDown, Award, Users, TrendingUp, 
  Briefcase, GraduationCap, Target, Building2, Globe, Zap, 
  BarChart3, Lightbulb, Brain, Rocket, DollarSign, Star,
  CheckCircle, ArrowUpRight, Clock, Eye, Layers, ArrowRight,
  Compass, Sparkles, Network
} from 'lucide-react';

const PKGrowthLeaderWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const growthMetrics = [
    { 
      icon: Rocket, 
      value: '0→1', 
      label: 'Market Creation',
      color: 'text-emerald-400'
    },
    { 
      icon: TrendingUp, 
      value: '8%+', 
      label: 'Market Share Growth',
      color: 'text-blue-400'
    },
    { 
      icon: Zap, 
      value: '5→1wk', 
      label: 'Cycle Time Reduction',
      color: 'text-purple-400'
    },
    { 
      icon: Globe, 
      value: 'Global', 
      label: 'Scale Experience',
      color: 'text-cyan-400'
    }
  ];

  const coreCapabilities = [
    { 
      icon: Compass, 
      title: 'Market Foresight', 
      description: 'Anticipate shifts and align product roadmaps to emerging trends (AI, robotics, additive manufacturing)',
      context: 'Strategic Thinking'
    },
    { 
      icon: Rocket, 
      title: 'Execution Agility', 
      description: 'Apply design sprints and agile methods to compress go-to-market timelines',
      context: 'Rapid Scaling'
    },
    { 
      icon: Network, 
      title: 'Influence & Alignment', 
      description: 'Gain consensus among founders, boards, technical teams, and customers',
      context: 'Cross-Functional Leadership'
    },
    { 
      icon: Sparkles, 
      title: 'Commercial Creativity', 
      description: 'Differentiate offerings in commoditized markets through narrative and positioning',
      context: 'Growth Innovation'
    }
  ];

  const growthAchievements = [
    {
      icon: Building2,
      stage: 'Market Creation',
      title: 'Cross-Divisional IVF Launch',
      challenge: 'Enter crowded fertility tech market with differentiated positioning',
      execution: 'Led unified campaign across two divisions with "future family success" narrative',
      impact: 'Accelerated market entry, became template for internal collaboration'
    },
    {
      icon: TrendingUp,
      stage: 'Portfolio Scaling',
      title: 'Visceral Endograft Turnaround',
      challenge: 'Underperforming $250M+ portfolio losing market share',
      execution: 'Multi-pronged repositioning with physician input and targeted adoption strategy',
      impact: '~8% market share increase in 12 months, millions in incremental revenue'
    },
    {
      icon: Zap,
      stage: 'Tech Transformation',
      title: 'AI-Enabled Marketing',
      challenge: 'Manual processes taking 5+ weeks, limiting agility',
      execution: 'Pioneered AI "Copilot" implementation with change management framework',
      impact: 'Reduced cycles to 1-2 weeks, external consultant recognition'
    },
    {
      icon: Globe,
      stage: 'Global Expansion',
      title: 'Thought Leadership Platform',
      challenge: 'Establish credibility in new cardiac device market segment',
      execution: 'Created VLEEM webinar with global KOLs, 200+ physician engagement',
      impact: 'Significant increase in product inquiries, annual recurring event'
    }
  ];

  const idealRoles = [
    {
      category: 'Early to Growth-Stage Ventures',
      stage: 'Seed to Series C',
      roles: [
        'Director, Product Marketing',
        'Director, Growth & Commercial Strategy',
        'Head of Strategic Partnerships & Market Development',
        'Entrepreneur-in-Residence (Venture Studio)'
      ]
    },
    {
      category: 'Midsize & Established Companies',
      stage: 'Entrepreneurial Mandates',
      roles: [
        'General Manager / Business Unit Leader',
        'Director, Corporate Innovation & Strategic Initiatives',
        'Director, New Ventures & Emerging Markets',
        'Head of Commercial Transformation'
      ]
    }
  ];

  const valueProposition = [
    'Proven at "zero to one" and "one to ten" — from concept validation to global scaling',
    'Cross-context adaptability — equally effective in startups and innovation labs',
    'Network capital — access to KOLs, industry partners, and global commercial contacts',
    'Execution under pressure — navigates complex launches without derailing budgets or timelines'
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Growth-Focused Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Rocket size={24} className="text-purple-400" />
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                P.K. Koduri
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'capabilities', 'growth', 'leadership', 'connect'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors font-medium ${
                    activeSection === section
                      ? 'text-purple-400'
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

      {/* Growth Leader Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        
        <div className={`text-center z-10 max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-cyan-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <Rocket size={28} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                P.K. Koduri
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
              Strategic Growth Leader | Market Creator | Agile Innovator | Startup & Scale-up Ready
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Strategic marketing and growth leader with 15+ years scaling innovative products in high-stakes, regulated markets. 
            Operating at the intersection of <strong className="text-purple-400">strategy, technology, and execution</strong> — 
            equally suited to founder-led startups, scale-ups, and intrapreneurial ventures.
          </p>
          
          {/* Growth Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {growthMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <Icon size={24} className={`${metric.color} mx-auto mb-2`} />
                  <div className="text-lg font-bold mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-400">{metric.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => scrollToSection('growth')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 justify-center"
            >
              <TrendingUp size={18} />
              Growth Track Record
            </button>
            <a 
              href="mailto:pkoduri@gmail.com"
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all flex items-center gap-2 justify-center"
            >
              <Mail size={18} />
              Let's Build Together
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-400" />
              <span>Bloomington, IN</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-cyan-400" />
              <span>Currently: Cook Medical | Open to Growth Opportunities</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Growth Leadership Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combining market foresight with execution agility to drive sustainable growth 
              in both emerging and established contexts.
            </p>
          </div>
          
          {/* Core Growth Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl">
                      <Icon size={32} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-gray-300 mb-3 leading-relaxed">{capability.description}</p>
                      <div className="flex items-center gap-2">
                        <Star size={14} className="text-yellow-400" />
                        <span className="text-sm text-cyan-400 font-medium">{capability.context}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Growth Challenge Matrix */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Growth Challenge → Solution Matrix</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-purple-400 mb-3">Early-Stage Market Entry</h4>
                <p className="text-gray-300 text-sm">Rapid segmentation, positioning, and launch execution with compressed timelines</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-cyan-400 mb-3">Scaling Beyond Beachhead</h4>
                <p className="text-gray-300 text-sm">Build repeatable frameworks for sales-marketing integration and portfolio growth</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-emerald-400 mb-3">Innovation in Regulated Environments</h4>
                <p className="text-gray-300 text-sm">Pilot emerging technologies while ensuring compliance and adoption</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="font-bold text-yellow-400 mb-3">Global Expansion</h4>
                <p className="text-gray-300 text-sm">Design channel strategies that adapt locally without diluting brand value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Track Record */}
      <section id="growth" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Growth Track Record
          </h2>
          
          <div className="space-y-8">
            {growthAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl">
                      <Icon size={32} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                          {achievement.stage}
                        </span>
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-red-300 font-medium">Challenge:</span>
                          <p className="text-gray-300 mt-1">{achievement.challenge}</p>
                        </div>
                        
                        <div>
                          <span className="text-yellow-300 font-medium">Execution:</span>
                          <p className="text-gray-300 mt-1">{achievement.execution}</p>
                        </div>
                        
                        <div>
                          <span className="text-green-300 font-medium">Impact:</span>
                          <p className="text-cyan-400 font-semibold mt-1">{achievement.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <Target size={28} className="text-purple-400" />
              Why Founders, Boards & Executives Choose P.K.
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {valueProposition.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Opportunities */}
      <section id="leadership" className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ideal Leadership Opportunities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {idealRoles.map((context, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg">
                    {index === 0 ? <Rocket size={24} className="text-purple-400" /> : <Building2 size={24} className="text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{context.category}</h3>
                    <p className="text-gray-400 text-sm">{context.stage}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {context.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-start gap-3">
                      <ArrowRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Current Foundation */}
          <div className="bg-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Current Foundation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <Building2 size={32} className="text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Cook Medical LLC</h4>
                <p className="text-sm text-gray-300">Divisional Marketing Manager</p>
                <p className="text-xs text-gray-400 mt-1">Joint MedSurg & Vascular</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <GraduationCap size={32} className="text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Academic Foundation</h4>
                <p className="text-sm text-gray-300">MBA + Engineering</p>
                <p className="text-xs text-gray-400 mt-1">Strategy + Technical Depth</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg">
                <Network size={32} className="text-purple-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Network Capital</h4>
                <p className="text-sm text-gray-300">Global KOL Access</p>
                <p className="text-xs text-gray-400 mt-1">Industry + Commercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect for Growth */}
      <section id="connect" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Drive Growth Together
          </h2>
          
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Whether you're validating a new market, scaling beyond your beachhead, or driving innovation 
              within an established company — let's discuss how proven growth strategies can accelerate your vision.
            </p>
            
            <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Mail size={40} className="text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Strategic Discussions</h3>
                  <a href="mailto:pkoduri@gmail.com" className="text-purple-400 hover:text-purple-300 text-lg">
                    pkoduri@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Growth opportunities & partnerships</p>
                </div>
                <div className="text-center">
                  <Rocket size={40} className="text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Growth Readiness</h3>
                  <p className="text-gray-300">Available for immediate impact</p>
                  <p className="text-gray-400 text-sm mt-2">Ready to mobilize</p>
                </div>
              </div>
            </div>
            
            <a 
              href="mailto:pkoduri@gmail.com?subject=Growth Leadership Discussion - P.K. Koduri" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-2xl text-lg"
            >
              <Rocket size={20} />
              Start the Growth Conversation
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Growth-Focused Footer */}
      <footer className="py-8 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket size={20} className="text-purple-400" />
            <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              P.K. Koduri
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Strategic Growth Leader | Market Creator | Agile Innovator | Startup & Scale-up Ready
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PKGrowthLeaderWebsite;
