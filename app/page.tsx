import ContactForm from "./components/ContactForm";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "LesFlow",
      description: "Mobile aggregator app for forestry industry — 'Uber for logging trucks', connecting truck owners with logging companies",
      tags: ["Next.js", "Mobile", "Logistics", "AI"]
    },
    {
      title: "AI Email Assistant",
      description: "Intelligent email automation assistant: email classification, automated responses, task prioritization",
      tags: ["n8n", "AI", "Claude", "Automation"]
    },
    {
      title: "AI HR/Recruiting",
      description: "Personnel recruitment automation system: resume screening, candidate communication, vacancy matching assessment",
      tags: ["AI", "HR Tech", "n8n", "Automation"]
    },
    {
      title: "Error Handler & Self-Healer",
      description: "Centralized error handling system in n8n with Knowledge Base logging, automatic solution search, and Telegram notifications",
      tags: ["n8n", "DevOps", "Monitoring", "AI"]
    },
    {
      title: "Astra Marine",
      description: "AI assistant for marine tourism automation: booking, competitive analysis, AI implementation strategy",
      tags: ["n8n", "AI", "Tourism", "Chatbot"]
    },
    {
      title: "Apple SpB Pro",
      description: "Chatbot for Apple service center — request processing and technical support automation",
      tags: ["Chatbot", "Support", "Telegram", "n8n"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
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
                I design AI-powered workflows on no-code platforms. Building multi-agent systems with centralized error handling and automatic workflow healing for logistics, real estate, and tourism businesses.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 duration-300"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="border-2 border-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all transform hover:scale-110 hover:border-purple-300 duration-300"
                >
                  Projects
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/30">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 duration-300 cursor-pointer group"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm group-hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Tech Stack
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Automation & No-Code</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["n8n", "Make", "Zapier", "Supabase", "Google Sheets", "Airtable"].map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-lg text-white font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 duration-300 cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">AI Models & APIs</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Claude", "OpenAI", "Gemini", "Grok", "Llama", "DeepSeek", "Qwen", "Perplexity AI", "Telegram API"].map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-lg text-white font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30 duration-300 cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Vector Databases</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Qdrant", "Pinecone"].map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg text-white font-semibold hover:from-orange-500/30 hover:to-red-500/30 transition-all transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30 duration-300 cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Development</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Node.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "SQL", "Bash"].map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-blue-500/30 rounded-lg text-white font-semibold hover:from-green-500/30 hover:to-blue-500/30 transition-all transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30 duration-300 cursor-pointer"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 duration-300 cursor-pointer group">
              <div className="text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Completed Projects</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 duration-300 cursor-pointer group">
              <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Industries</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 duration-300 cursor-pointer group">
              <div className="text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">AI-powered Solutions</p>
            </div>
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
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@kronlain.ru"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="text-3xl">📧</div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white group-hover:text-blue-400 transition-colors">
                        info@kronlain.ru
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/kronlain_neuroboost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="text-3xl">✈️</div>
                    <div>
                      <div className="text-sm text-gray-400">Telegram</div>
                      <div className="text-white group-hover:text-purple-400 transition-colors">
                        @kronlain_neuroboost
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
                <p className="text-gray-400 mb-2">
                  📱 Telegram: within 1 hour
                </p>
                <p className="text-gray-400 mb-2">
                  📧 Email: within 24 hours
                </p>
                <p className="text-gray-400">
                  📝 Website inquiry: within 2 hours
                </p>
              </div>

              <div className="text-gray-500 text-center lg:text-left">
                <p className="text-sm">GK Kronline | Neuroboost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026 Pavel Lipin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
