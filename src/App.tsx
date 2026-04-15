import { useState, useEffect } from 'react'
import './App.css'

type Language = 'en' | 'fr'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        title: 'Full Stack Developer & Software Engineer',
        subtitle: 'Looking for an',
        internship: 'internship',
        availability: 'Available from April 2026',
        viewWork: 'View My Work',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        paragraph1: "I'm a passionate Full Stack Developer & Software Engineer currently in my Engineering Cycle at 3IL Ingénieurs (France), pursuing a Master's degree in Computer Science Engineering. With versatile expertise across multiple technology stacks including enterprise backend frameworks (Spring Boot, Laravel, Flask), modern frontend libraries (React, Angular, Ionic), and cloud infrastructure, I excel at building scalable, production-ready applications that solve real-world problems.",
        paragraph2: "Through my professional experience in the financial sector, I've delivered mission-critical enterprise applications serving thousands of users in production environments. My end-to-end development approach encompasses the complete software lifecycle: from design and development to rigorous testing, deployment, maintenance, and continuous improvement. Experienced with secure authentication systems, real-time monitoring solutions, microservices architecture, CI/CD pipelines, and comprehensive testing strategies. I thrive in challenging environments where code quality, system reliability, and innovative problem-solving make a tangible impact. Currently seeking an internship opportunity starting April 2026 to bring my technical versatility and production-focused expertise to a dynamic team.",
        yearsLabel: 'Years Coding',
        projectsLabel: 'Projects',
        internshipsLabel: 'Internships',
        dedicatedLabel: 'Dedicated'
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Technologies I work with',
        cloudDevOps: 'Cloud & DevOps',
        tools: 'Tools & Frameworks',
        methodologies: 'Methodologies'
      },
      projects: {
        title: 'Projects',
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        viewDemo: 'View Demo',
        viewCode: 'View Code',
        keyFeatures: 'Key Features',
        technologies: 'Technologies Used'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "I'm actively looking for internship opportunities. Let's work together!",
        downloadCV: 'Download My CV',
        location: 'Limoges, France'
      },
      footer: {
        madeWith: 'Made with ❤️ using React + Tailwind CSS',
        tagline: 'Full Stack Developer & Software Engineer | Available from April 2026'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Bonjour, je suis',
        title: 'Développeur Full Stack & Ingénieur Logiciel',
        subtitle: 'Recherche un',
        internship: 'stage',
        availability: 'Disponible à partir d\'avril 2026',
        viewWork: 'Voir mes projets',
        contactMe: 'Me contacter'
      },
      about: {
        title: 'À propos de moi',
        paragraph1: "Je suis un développeur Full Stack passionné et ingénieur logiciel, actuellement en Cycle Ingénieur à 3IL Ingénieurs (France), poursuivant un Master en Ingénierie Informatique. Avec une expertise polyvalente couvrant plusieurs stacks technologiques incluant les frameworks backend d'entreprise (Spring Boot, Laravel, Flask), les bibliothèques frontend modernes (React, Angular, Ionic), et l'infrastructure cloud, j'excelle dans la conception d'applications évolutives et prêtes pour la production qui résolvent des problèmes concrets.",
        paragraph2: "À travers mon expérience professionnelle dans le secteur financier, j'ai livré des applications d'entreprise critiques servant quotidiennement des milliers d'utilisateurs en environnement de production. Mon approche de développement de bout en bout englobe l'ensemble du cycle de vie logiciel : de la conception et du développement aux tests rigoureux, au déploiement, à la maintenance et à l'amélioration continue. Expérimenté avec les systèmes d'authentification sécurisés, les solutions de monitoring en temps réel, l'architecture microservices, les pipelines CI/CD, et les stratégies de tests complètes. Je m'épanouis dans des environnements stimulants où la qualité du code, la fiabilité des systèmes et la résolution innovante de problèmes ont un impact tangible. Je recherche actuellement une opportunité de stage à partir d'avril 2026 pour apporter ma polyvalence technique et mon expertise orientée production à une équipe dynamique.",
        yearsLabel: 'Années de code',
        projectsLabel: 'Projets',
        internshipsLabel: 'Stages',
        dedicatedLabel: 'Dévoué'
      },
      skills: {
        title: 'Compétences Techniques',
        subtitle: 'Technologies que je maîtrise',
        cloudDevOps: 'Cloud & DevOps',
        tools: 'Outils & Frameworks',
        methodologies: 'Méthodologies'
      },
      projects: {
        title: 'Projets',
        learnMore: 'En savoir plus',
        viewDetails: 'Voir les détails',
        viewDemo: 'Voir la démo',
        viewCode: 'Voir le code',
        keyFeatures: 'Fonctionnalités clés',
        technologies: 'Technologies utilisées'
      },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Je recherche activement des opportunités de stage. Travaillons ensemble !',
        downloadCV: 'Télécharger mon CV',
        location: 'Limoges, France'
      },
      footer: {
        madeWith: 'Fait avec ❤️ avec React + Tailwind CSS',
        tagline: 'Développeur Full Stack & Ingénieur Logiciel | Disponible à partir d\'avril 2026'
      }
    }
  }

  const t = translations[language]

  const skills = [
    { name: 'Java & Spring Boot', level: 95, color: 'bg-green-600', category: 'backend' },
    { name: 'PHP & Laravel', level: 85, color: 'bg-purple-500', category: 'backend' },
    { name: 'Python, Django & Flask', level: 85, color: 'bg-yellow-500', category: 'backend' },
    { name: 'Angular', level: 90, color: 'bg-red-500', category: 'frontend' },
    { name: 'React & Ionic', level: 85, color: 'bg-blue-500', category: 'frontend' },
    { name: 'TypeScript & JavaScript', level: 90, color: 'bg-blue-400', category: 'frontend' },
    { name: 'NLP & Machine Learning', level: 75, color: 'bg-purple-600', category: 'backend' },
    { name: 'PostgreSQL & MySQL', level: 85, color: 'bg-indigo-500', category: 'database' },
    { name: 'Docker & CI/CD', level: 80, color: 'bg-cyan-500', category: 'devops' },
    { name: 'GraphQL & REST APIs', level: 85, color: 'bg-pink-500', category: 'backend' },
    { name: 'Git & GitLab', level: 90, color: 'bg-orange-500', category: 'devops' },
  ]

  const skillCategories = {
    frontend: {
      title: language === 'en' ? 'Frontend Development' : 'Développement Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500'
    },
    backend: {
      title: language === 'en' ? 'Backend Development' : 'Développement Backend',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500'
    },
    database: {
      title: language === 'en' ? 'Databases' : 'Bases de données',
      icon: '🗄️',
      color: 'from-purple-500 to-pink-500'
    },
    devops: {
      title: language === 'en' ? 'DevOps & Tools' : 'DevOps & Outils',
      icon: '🚀',
      color: 'from-orange-500 to-red-500'
    }
  }

  const projects = [
    {
      title: 'JobTrackr - Job Application Management System',
      description: 'Comprehensive platform for tracking job applications, managing interviews, and organizing career search activities',
      tags: ['React', 'Laravel', 'PostgreSQL', 'Azure Cloud', 'REST API'],
      color: 'from-cyan-500 to-blue-500',
      demoUrl: 'https://job-trackr-six.vercel.app/',
      github: 'https://github.com/MRGUY10/JobTrackr',
      details: 'Full-stack job application tracking system designed to help job seekers organize their career search. Features include application status tracking, interview scheduling, company information management, document storage, and analytics dashboard. Built with React frontend, Laravel backend, PostgreSQL database, and deployed on Azure Cloud for scalability and reliability.',
      features: ['Application Status Tracking', 'Interview Scheduler', 'Company Database', 'Document Management', 'Analytics Dashboard', 'Cloud Deployment (Azure)']
    },
    {
      title: 'MediCare - Healthcare Mobile Platform',
      description: 'Revolutionary mobile health app connecting patients with doctors and providing AI-powered first aid assistance',
      tags: ['React Native', 'Python', 'AI/ML', 'Healthcare', 'Mobile App'],
      color: 'from-emerald-500 to-teal-500',
      demoUrl: '#',
      github: 'https://github.com/Mbungai-Francesco/MediCare',
      details: 'Innovative healthcare solution built with React Native and Python that bridges the gap between patients and medical professionals. The app features an intelligent AI assistant that provides immediate first aid guidance in emergency situations, real-time doctor consultations, appointment scheduling, and medical history tracking. Designed to make healthcare more accessible and responsive, particularly in critical situations where every second counts.',
      features: ['AI First Aid Assistant', 'Doctor-Patient Video Chat', 'Appointment Management', 'Emergency Response System', 'Medical Records Storage', 'Real-time Notifications']
    },
    {
      title: 'CRM - Student Application Management',
      description: 'Modular CRM solution with microservices architecture for managing admissions (Web & Mobile)',
      tags: ['Angular', 'Ionic', 'Spring Boot', 'MySQL', 'Docker', 'Azure'],
      color: 'from-blue-500 to-purple-500',
      demoUrl: '#',
      github: 'https://gitlab.com/Anthony-Feudjio/isj-isi4en-crm-group3',
      details: 'Complete CRM system with separate web interface for administrators and mobile app for students. Features include application tracking, document management, notifications, and automated workflows.',
      features: ['Microservices Architecture', 'Real-time Notifications', 'Document Management', 'Mobile & Web Apps']
    },
    {
      title: 'Plagiarism Detector System',
      description: 'AI-powered plagiarism detection tool with document comparison and similarity analysis',
      tags: ['Python', 'Flask', 'Angular', 'NLP', 'Machine Learning'],
      color: 'from-red-500 to-orange-500',
      demoUrl: 'https://plagiarismhecker.vercel.app/',
      github: 'https://github.com/MRGUY10/plagiarismchecker',
      details: 'Advanced plagiarism detection system using Natural Language Processing and machine learning algorithms. Features document upload, text comparison, similarity scoring, and detailed reports with highlighted matches.',
      features: ['NLP Algorithms', 'Document Comparison', 'Similarity Scoring', 'Detailed Reports']
    },
    {
      title: 'Banking Delegation Management System',
      description: 'Internal application for managing power delegations within banking network with Keycloak & GraphQL',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Keycloak', 'Docker'],
      color: 'from-green-500 to-teal-500',
      demoUrl: '#',
      github: 'private',
      details: 'Secure banking application for managing hierarchical power delegations across agency network. This project is private as it is currently being used in production by Afriland First Bank. Access can be granted upon request for professional purposes. Includes role-based access control, delegation tracking, and audit trails.',
      features: ['Keycloak Authentication', 'GraphQL API', 'Role Management', 'Audit System']
    },
    {
      title: 'Monitoring System - Afriland First Bank',
      description: 'Business process monitoring system with Grafana, Prometheus, ensuring real-time supervision',
      tags: ['Grafana', 'Prometheus', 'Docker', 'Spring Boot'],
      color: 'from-orange-500 to-pink-500',
      demoUrl: '#',
      github: 'private',
      details: 'Comprehensive monitoring solution for banking processes. This project is private as it is currently being used in production by Afriland First Bank. Access can be granted upon request for professional purposes. Real-time dashboards, alerting system, and performance metrics tracking for critical business operations.',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert Management', 'Performance Metrics']
    },
    {
      title: 'Student Tutoring Platform',
      description: 'Web platform connecting student tutors and tutees with messaging, scheduling, and rating system',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Azure'],
      color: 'from-purple-500 to-indigo-500',
      demoUrl: 'http://20.199.90.98/',
      github: 'https://gitlab.com/MRGUY10/tutorat_etudiants',
      details: 'Educational platform facilitating connections between tutors and students. Features profile management, session scheduling, integrated messaging, evaluations, and ranking system.',
      features: ['User Profiles', 'Session Booking', 'Messaging System', 'Rating & Reviews']
    },
    {
      title: 'SIMCO - Intelligent Metacognitive Observation System',
      description: 'AI-driven learning evaluation platform combining performance, confidence, and behavioral signals',
      tags: ['Python', 'Computer Vision', 'AI', 'Learning Analytics', 'Adaptive Learning'],
      color: 'from-teal-500 to-cyan-500',
      demoUrl: 'https://simco-three.vercel.app/',
      github: 'https://github.com/MRGUY10/SIMCO',
      details: 'SIMCO (System for Intelligent Metacognitive Observation) improves student learning evaluation by combining quiz performance, self-assessment confidence, response times, and non-verbal behavioral indicators extracted through computer vision. It analyzes metacognitive accuracy by comparing perceived confidence with real performance, detects patterns such as overconfidence and underconfidence, and generates personalized pedagogical feedback to improve learning strategies. The platform supports adaptive learning and student self-awareness through ethical and explainable AI-based analysis.',
      features: ['Metacognitive Accuracy Analysis', 'Confidence vs Performance Gap Detection', 'Response Time Analytics', 'Computer Vision Behavioral Signals', 'Personalized Pedagogical Feedback', 'Ethical & Explainable AI']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, animated portfolio showcasing my skills, projects, and professional journey',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
      color: 'from-indigo-500 to-purple-500',
      demoUrl: 'https://portfolio-five-brown-88.vercel.app/',
      github: 'https://github.com/MRGUY10/Portfolio',
      details: 'Fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphism design, bilingual support (EN/FR), mobile navigation, project modals, and skill categorization. Deployed on Vercel with optimized performance and modern UI/UX design patterns.',
      features: ['Smooth Animations', 'Glassmorphism Design', 'Bilingual Support (EN/FR)', 'Fully Responsive', 'Project Showcases', 'Skill Categories']
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass animate-slide-down">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gradient">Portfolio</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 relative group animate-fade-in ${
                    activeSection === item ? 'text-blue-400 font-bold' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {t.nav[item as keyof typeof t.nav]}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 ${
                    activeSection === item ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              {/* Language Toggle */}
              <div className="flex gap-2 ml-4 p-1 glass rounded-full animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    language === 'en' ? 'bg-blue-500 text-white scale-105' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    language === 'fr' ? 'bg-blue-500 text-white scale-105' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-4 bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-300 ${
                  activeSection === item 
                    ? 'bg-blue-500 text-white font-bold' 
                    : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="flex gap-2 pt-4 border-t border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                  language === 'en' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                  language === 'fr' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Animated Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="max-w-4xl text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
              {t.hero.greeting} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Guy Jordan Kamdem</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t.hero.title}
            </p>
            <p className="text-lg text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle} <span className="text-blue-400 font-semibold">{t.hero.internship}</span> {' '}
              <span className="text-purple-400 font-semibold">{t.hero.availability}</span>
            </p>
            <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50 animate-pulse-slow"
              >
                {t.hero.viewWork}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 glass rounded-full font-semibold hover:scale-110 transition-transform duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{t.hero.contactMe}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient animate-slide-up">{t.about.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image Card */}
            <div className="md:col-span-1 flex justify-center">
              <div className="glass rounded-3xl p-6 card-hover group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    src="/profile.jpeg"
                    alt="Guy Jordan Kamdem"
                    className="relative w-full rounded-2xl object-cover border-2 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gradient mb-2">Guy Jordan Kamdem</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                  <p className="text-blue-400 text-sm mt-1">📍 Limoges, France</p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="md:col-span-2">
              <div className="glass rounded-3xl p-8 md:p-12 card-hover">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t.about.paragraph1}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t.about.paragraph2}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-3xl font-bold text-blue-400">3+</div>
                    <div className="text-sm text-gray-400">{t.about.yearsLabel}</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-3xl font-bold text-purple-400">15+</div>
                    <div className="text-sm text-gray-400">{t.about.projectsLabel}</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-3xl font-bold text-green-400">2</div>
                    <div className="text-sm text-gray-400">{t.about.internshipsLabel}</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-3xl font-bold text-pink-400">100%</div>
                    <div className="text-sm text-gray-400">{t.about.dedicatedLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl font-bold mb-4 text-center text-gradient animate-slide-up">{t.skills.title}</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">{t.skills.subtitle}</p>
          
          {/* Skills by Category */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {Object.entries(skillCategories).map(([category, categoryInfo], categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category)
              return (
                <div
                  key={category}
                  className="glass rounded-3xl p-8 card-hover animate-slide-up group"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`text-5xl w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryInfo.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      {categoryInfo.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{categoryInfo.title}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Skills Progress Bars */}
                  <div className="space-y-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-gray-200 group-hover/skill:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              boxShadow: '0 0 10px currentColor'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Skills Tags */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass rounded-2xl p-6 card-hover animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <span>☁️</span> {t.skills.cloudDevOps}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins', 'SonarQube'].map(tech => (
                  <span key={tech} className="px-3 py-2 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 card-hover animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <span>🛠️</span> {t.skills.tools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'Bootstrap', 'Thymeleaf', 'Postman', 'Figma', 'VS Code', 'IntelliJ'].map(tech => (
                  <span key={tech} className="px-3 py-2 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 card-hover animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <span>🎯</span> {t.skills.methodologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Agile/Scrum', 'MVC', 'Microservices', 'REST API', 'UML', 'CI/CD', 'TDD'].map(tech => (
                  <span key={tech} className="px-3 py-2 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient animate-slide-up">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-3xl p-6 card-hover animate-scale-up group relative overflow-hidden transform hover:rotate-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                </div>

                <div className={`h-40 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="text-6xl animate-float group-hover:scale-125 transition-transform duration-500">🚀</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedProject(index)}
                      className="px-6 py-3 bg-white/90 text-gray-900 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-white hover:scale-110"
                    >
                      {t.projects.viewDetails}
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20 hover:border-blue-400 hover:bg-blue-400/20 transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20 animate-fade-in" style={{ animationDelay: `${(index * 0.1) + 0.15}s` }}>
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(index)}
                  className="w-full py-2 border border-blue-400/50 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/20"
                >
                  <span>{t.projects.learnMore}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-gradient">{projects[selectedProject].title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                ×
              </button>
            </div>

            <div className={`h-64 rounded-2xl bg-gradient-to-br ${projects[selectedProject].color} mb-6 flex items-center justify-center`}>
              <div className="text-8xl animate-float">🚀</div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{projects[selectedProject].details}</p>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-3 text-blue-400">{t.projects.keyFeatures}</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {projects[selectedProject].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-3 text-purple-400">{t.projects.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {projects[selectedProject].demoUrl !== '#' && (
                <a
                  href={projects[selectedProject].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-center"
                >
                  🎯 {t.projects.viewDemo}
                </a>
              )}
              {projects[selectedProject].github === 'private' ? (
                <div className="flex-1 px-6 py-3 glass rounded-full font-semibold text-center border border-yellow-500/50 bg-yellow-500/10">
                  🔒 {language === 'en' ? 'Private Repository - Contact for Access' : 'Dépôt Privé - Me contacter'}
                </div>
              ) : (
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 glass rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-center border border-white/20"
                >
                  💻 {t.projects.viewCode}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center text-gradient animate-slide-up">{t.contact.title}</h2>
          <div className="glass rounded-3xl p-8 md:p-12">
            <p className="text-center text-gray-300 mb-8 text-lg">
              {t.contact.subtitle}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:kamdemjordan59@gmail.com"
                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <span className="text-2xl">📧</span>
                <span>kamdemjordan59@gmail.com</span>
              </a>
              <a
                href="tel:+33746502440"
                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <span className="text-2xl">📱</span>
                <span>+33 07 46 50 24 40</span>
              </a>
              <a
                href="https://linkedin.com/in/MRGUY10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <span className="text-2xl">💼</span>
                <span>LinkedIn - MRGUY10</span>
              </a>
              <a
                href="https://github.com/MRGUY10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <span className="text-2xl">💻</span>
                <span>GitHub - MRGUY10</span>
              </a>
              <div className="flex items-center justify-center gap-3 p-4 glass rounded-xl">
                <span className="text-2xl">📍</span>
                <span>{t.contact.location}</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/Stage_kamdem_V1.2.pdf"
                download="Guy_Jordan_Kamdem_CV.pdf"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                📄 {t.contact.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2025 Guy Jordan Kamdem. {t.footer.madeWith}</p>
        <p className="mt-2 text-sm">{t.footer.tagline}</p>
      </footer>
    </div>
  )
}

export default App
