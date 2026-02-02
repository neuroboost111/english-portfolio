import ContactForm from "./components/ContactForm";
import Image from "next/image";

export default function Home() {
  // Key metrics for impact section
  const keyMetrics = [
    { value: "40-60%", label: "Cost Reduction", description: "Average operational savings" },
    { value: "99.7%", label: "System Uptime", description: "Production-grade reliability" },
    { value: "3+ Years", label: "AI Automation", description: "Building production systems" },
    { value: "$150K+", label: "Client Savings", description: "Total value delivered" }
  ];

  // Detailed case studies with Problem → Solution → Result
  const caseStudies = [
    {
      title: "LesFlow",
      subtitle: "Full-Stack Logistics Platform",
      problem: "Forestry companies struggled to find available trucks for timber transport. Manual coordination led to 30% vehicle downtime and delayed deliveries.",
      solution: "Built 'Uber for logging trucks' — a mobile aggregator connecting truck owners with logging companies. Implemented real-time GPS tracking, automated dispatching, and AI-powered route optimization.",
      results: [
        "35% reduction in vehicle downtime",
        "25% faster delivery times",
        "$45K+ annual operational savings",
        "Scaled to 50+ active trucks in first 3 months"
      ],
      tags: ["Next.js", "React Native", "Supabase", "AI"],
      icon: "🚛"
    },
    {
      title: "Astra Marine",
      subtitle: "AI Competitive Intelligence System",
      problem: "Marine tourism company spent 15+ hours weekly manually tracking 8 competitors' pricing, promotions, and market moves.",
      solution: "Developed automated competitive intelligence system using Perplexity AI and Tavily for data collection, with weekly PDF reports delivered via email. Integrated market analysis for strategic decision-making.",
      results: [
        "35% increase in booking conversion rate",
        "$60K+ additional annual revenue",
        "15 hours/week saved (~$30K/year in labor)",
        "Real-time competitor price tracking"
      ],
      tags: ["n8n", "Perplexity AI", "Google Docs API", "Automation"],
      icon: "⛵"
    },
    {
      title: "Error Handler & Self-Healer",
      subtitle: "Production-Grade Monitoring System",
      problem: "n8n workflows failed silently, causing data loss and requiring manual debugging. Average resolution time: 4+ hours.",
      solution: "Built centralized error handling with Knowledge Base logging, automatic solution search via RAG, and instant Telegram alerts with context-rich error reports.",
      results: [
        "99.7% system uptime achieved",
        "80% of errors auto-resolved",
        "MTTR reduced from 4 hours to 15 minutes",
        "$40K+ saved in developer time annually"
      ],
      tags: ["n8n", "Qdrant", "RAG", "DevOps"],
      icon: "🛡️"
    }
  ];

  // Technical proficiency matrix
  const skillMatrix = [
    {
      category: "Automation Platforms",
      skills: [
        { name: "n8n", level: 95 },
        { name: "Make (Integromat)", level: 85 },
        { name: "Zapier", level: 75 }
      ]
    },
    {
      category: "AI & LLMs",
      skills: [
        { name: "Claude API", level: 95 },
        { name: "OpenAI/GPT", level: 90 },
        { name: "Perplexity AI", level: 85 },
        { name: "LangChain", level: 80 }
      ]
    },
    {
      category: "Development",
      skills: [
        { name: "TypeScript/JavaScript", level: 85 },
        { name: "Next.js/React", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "SQL/PostgreSQL", level: 75 }
      ]
    },
    {
      category: "Infrastructure",
      skills: [
        { name: "Supabase", level: 90 },
        { name: "Vector DBs (Qdrant)", level: 85 },
        { name: "VPS/Linux", level: 80 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Reduced our manual work by 70% in 2 months",
      author: "Logistics Company CEO",
      role: "",
      placeholder: false
    },
    {
      text: "Best ROI we've seen from any automation project",
      author: "Tourism Business Owner",
      role: "",
      placeholder: false
    },
    {
      text: "The error handling system alone saved us countless hours of debugging",
      author: "Tech Startup CTO",
      role: "",
      placeholder: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0 animate-fade-in-left">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse group-hover:animate-spin-slow transition-all duration-500"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full"></div>
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <Image
                    src="/images/pavel.jpg"
                    alt="Pavel Lipin"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left text-white flex-1 animate-fade-in-right">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
                Pavel Lipin
              </h1>
              <p className="text-xl md:text-3xl mb-4 text-gray-300 animate-fade-in-up animation-delay-200">
                Automation Engineer & AI Integration Specialist
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-400">
                I help international businesses save <span className="text-green-400 font-semibold">40-60% on operational costs</span> through AI-powered automation. Building production-grade systems with <span className="text-blue-400 font-semibold">99.7% uptime</span> for logistics, tourism, and service industries.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <a
                  href="#case-studies"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 duration-300"
                >
                  See Results
                </a>
                <a
                  href="#skills"
                  className="border-2 border-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all transform hover:scale-110 hover:border-purple-300 duration-300"
                >
                  Tech Stack
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all transform hover:scale-110 hover:border-blue-300 duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 duration-300 text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-gray-500 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Case Studies
            </h2>
            <p className="text-xl text-gray-400">Real projects with measurable results</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 border-b border-purple-500/20">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{study.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <p className="text-purple-400">{study.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm">1</span>
                        <h4 className="text-lg font-semibold text-red-400">Problem</h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{study.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">2</span>
                        <h4 className="text-lg font-semibold text-blue-400">Solution</h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold text-sm">3</span>
                        <h4 className="text-lg font-semibold text-green-400">Results</h4>
                      </div>
                      <ul className="space-y-2">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2 text-gray-300">
                            <span className="text-green-400 mt-1">+</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-700">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Architecture",
                description: "Designing scalable AI-powered solutions for business process automation",
                icon: "🏗️"
              },
              {
                title: "Development",
                description: "Creating workflows in n8n/Make and developing chatbots with AI integration",
                icon: "⚙️"
              },
              {
                title: "AI Integration",
                description: "Implementing Claude, Gemini, Perplexity AI into company business processes",
                icon: "🤖"
              },
              {
                title: "Deployment",
                description: "Launching production solutions on VPS with monitoring and automatic healing",
                icon: "🚀"
              },
              {
                title: "Support",
                description: "Technical support, automation development, and system updates",
                icon: "🛠️"
              },
              {
                title: "Consulting",
                description: "AI implementation strategy and optimal solution selection for your business",
                icon: "💡"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 duration-300 cursor-pointer group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Proficiency Matrix */}
      <section id="skills" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Technical Proficiency
            </h2>
            <p className="text-xl text-gray-400">Skills and expertise levels</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillMatrix.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Tags */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Also Working With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Google APIs", "Telegram API", "Airtable", "Google Sheets", "Gemini", "DeepSeek", "Llama", "Pinecone", "Docker", "Bash", "Git"].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-gray-400 text-sm hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400">What partners say about working together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border transition-all hover:transform hover:scale-105 hover:-translate-y-2 duration-300 ${
                  testimonial.placeholder
                    ? 'border-dashed border-slate-600 opacity-60'
                    : 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20'
                }`}
              >
                <div className="text-4xl mb-4 text-purple-400">&ldquo;</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.placeholder ? '[Your Name Here]' : testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.placeholder ? '[Your Company]' : testimonial.role}
                  </div>
                </div>
                {testimonial.placeholder && (
                  <div className="mt-4 text-xs text-purple-400/60 text-center">
                    Testimonial placeholder
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to discuss your project and offer AI solutions for business automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Request</h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Download CV & Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

                {/* Download CV Button */}
                <a
                  href="/resume/Pavel_Lipin_CV.pdf"
                  download
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 mb-4 bg-gradient-to-r from-green-600/20 to-emerald-500/20 border border-green-500/30 rounded-xl hover:border-green-400 hover:bg-green-500/30 transition-all group"
                >
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-white font-semibold group-hover:text-green-300 transition-colors">Download CV</span>
                </a>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/pavellipin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-xl hover:border-blue-400 hover:bg-blue-500/30 transition-all group"
                  >
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/neuroboost111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 rounded-xl hover:border-slate-400 hover:bg-slate-600/50 transition-all group"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-white font-semibold group-hover:text-gray-300 transition-colors">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Direct Contact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-300 mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:plnivl79@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="text-2xl">📧</div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white group-hover:text-blue-400 transition-colors">
                        plnivl79@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/kronlain_neuroboost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="text-2xl">✈️</div>
                    <div>
                      <div className="text-sm text-gray-400">Telegram</div>
                      <div className="text-white group-hover:text-purple-400 transition-colors">
                        @kronlain_neuroboost
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Availability</h4>
                <p className="text-gray-400 mb-2">
                  🌍 Remote (EU timezones available)
                </p>
                <p className="text-gray-400 mb-2">
                  📧 Email/LinkedIn: within 1 hour
                </p>
                <p className="text-gray-400">
                  📱 Telegram: available for urgent matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 Pavel Lipin. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/pavellipin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/neuroboost111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://t.me/kronlain_neuroboost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
