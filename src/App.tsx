import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import { 
  GraduationCap, 
  Globe, 
  BookOpen, 
  ArrowRight, 
  Youtube, 
  Instagram, 
  MessageCircle, 
  Video,
  MapPin,
  Calendar,
  Search,
  Menu,
  X,
  Users,
  Award,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Target,
  TrendingUp,
  Star,
  Send,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <span className="font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="p-5 bg-white border-t border-slate-200"
        >
          <p className="text-slate-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Unideepmate China</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/#services" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Services</Link>
            <Link to="/#universities" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Universities</Link>
            <Link to="/#faq" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">FAQ</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${isBlogPage ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}>Blog</Link>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 shadow-lg">
          <Link to="/" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#services" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/#universities" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Universities</Link>
          <Link to="/#faq" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link to="/blog" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/shanghai/1920/1080?blur=2" 
            alt="Shanghai Skyline" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
            >
              Unlock Your Future in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">China</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-10"
            >
              Unideepmate China is your ultimate guide to finding the perfect university, securing scholarships, and starting your educational journey in one of the world's fastest-growing economies.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                <Search className="w-5 h-5" />
                Find a Program
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all shadow-sm">
                Free Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News & Guides</h2>
              <p className="text-slate-600">Stay updated with the latest information about studying and living in China.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://picsum.photos/seed/beijing/800/600",
                category: "Guide",
                date: "March 15, 2026",
                title: "How to Apply for the Chinese Government Scholarship (CSC)",
                desc: "A complete step-by-step guide to securing full funding for your studies in China."
              },
              {
                img: "https://picsum.photos/seed/student/800/600",
                category: "Student Life",
                date: "March 10, 2026",
                title: "Top 10 Apps You Must Have When Living in China",
                desc: "From WeChat to Alipay, discover the essential apps that will make your life in China easier."
              },
              {
                img: "https://picsum.photos/seed/university/800/600",
                category: "News",
                date: "March 5, 2026",
                title: "New Visa Regulations for International Students in 2026",
                desc: "Everything you need to know about the latest updates to the X1 and X2 student visas."
              }
            ].map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {post.desc}
                  </p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Study in China */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Study in China?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Experience a unique blend of ancient history and cutting-edge technology while receiving a world-class education.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-red-600" />,
                title: "World-Class Education",
                desc: "Join universities consistently ranked among the top globally, offering state-of-the-art facilities and renowned faculty."
              },
              {
                icon: <Globe className="w-8 h-8 text-red-600" />,
                title: "Cultural Immersion",
                desc: "Learn Mandarin and immerse yourself in a rich, 5,000-year-old culture while living in modern, vibrant cities."
              },
              {
                icon: <MapPin className="w-8 h-8 text-red-600" />,
                title: "Career Opportunities",
                desc: "Build a global network and tap into the immense career opportunities in the world's second-largest economy."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive support for your journey to study in China, from application to arrival.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-red-600" />,
                title: "University Application",
                desc: "Personalized guidance for applying to top Chinese universities. We help you choose the right program and maximize your chances of acceptance.",
                price: "From $199",
                features: ["University Selection", "Application Review", "Interview Prep", "Document Translation"]
              },
              {
                icon: <Award className="w-8 h-8 text-red-600" />,
                title: "Scholarship Strategy",
                desc: "Maximize your chances of securing full funding including CSC, provincial, and university scholarships.",
                price: "From $149",
                features: ["Scholarship Matching", "Essay Review", "Interview Coaching", "Funding Negotiation"]
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-red-600" />,
                title: "Visa & Pre-Departure",
                desc: "Complete support for visa application and preparation for your new life in China.",
                price: "From $99",
                features: ["Visa Documentation", "Travel Planning", "Housing Setup", "Airport Pickup"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-lg font-bold text-red-600">{service.price}</span>
                  <button className="text-sm font-medium text-slate-900 hover:text-red-600 flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Trusted By Students From</h2>
            <p className="text-slate-600">Partner universities and organizations worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {[
              { name: "Tsinghua University", color: "bg-red-600" },
              { name: "Peking University", color: "bg-blue-600" },
              { name: "Fudan University", color: "bg-red-500" },
              { name: "Zhejiang University", color: "bg-green-600" },
              { name: "Shanghai Jiao Tong", color: "bg-blue-800" },
            ].map((uni, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-12 h-12 ${uni.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                  {uni.name.split(' ').map(w => w[0]).join('')}
                </div>
                <span className="text-slate-700 font-medium">{uni.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about studying in China</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "How do I apply for a Chinese student visa (X1/X2)?",
                a: "After receiving your university admission notice and JW202 form, you can apply for a student visa at the Chinese embassy/consulate in your country. We'll guide you through the entire process."
              },
              {
                q: "What scholarships are available for international students?",
                a: "The main scholarships are: Chinese Government Scholarship (CSC), Provincial Scholarships, and University Scholarships. We help you find and apply for the best options based on your profile."
              },
              {
                q: "How much does it cost to study in China?",
                a: "Tuition ranges from $2,000-$10,000/year depending on the university and program. Living costs are around $300-600/month. Many scholarships cover tuition and provide monthly stipends."
              },
              {
                q: "Do I need to know Mandarin to study in China?",
                a: "Many programs are offered in English, especially for graduate studies. For Chinese-taught programs, you'll need HSK 4-5 level. We also offer Mandarin prep courses."
              },
              {
                q: "How long does the application process take?",
                a: "Typically 3-6 months from start to enrollment. Early preparation is key. We recommend starting at least 6 months before your intended入学 date."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Advisors</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our team consists of former admissions officers, scholarship experts, and alumni from top Chinese universities.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Li Wei", role: "Founder & CEO", uni: "Tsinghua University", bio: "Former admissions committee member with 15+ years experience." },
              { name: "Sarah Chen", role: "Scholarship Director", uni: "Harvard Alumni", bio: "Helped students secure over $5M in scholarships." },
              { name: "Michael Zhang", role: "Application Coach", uni: "Fudan University", bio: "PhD graduate with expertise in STEM programs." },
              { name: "Emma Liu", role: "Visa Specialist", uni: "Beijing Language University", bio: "99% visa success rate with 10+ years of experience." }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-xs mb-3">{member.uni}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Connect with thousands of students, get expert advice, and stay updated on scholarships and admissions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, name: "WeChat Group", desc: "8,000+ members. Get instant answers and connect with current students.", color: "bg-green-500", action: "Join WeChat" },
              { icon: Video, name: "YouTube Channel", desc: "Exam guides, university tours, and student interviews.", color: "bg-red-600", action: "Subscribe" },
              { icon: Instagram, name: "Instagram", desc: "Daily updates, student stories, and life in China.", color: "bg-pink-600", action: "Follow" }
            ].map((platform, i) => (
              <motion.a 
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-slate-400 mb-4">{platform.desc}</p>
                <span className="inline-flex items-center gap-2 text-white font-medium hover:underline">
                  {platform.action} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Unideepmate</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Your trusted partner for studying in China. We help international students find the right university, apply for scholarships, and prepare for their journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors" aria-label="TikTok">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/#universities" className="hover:text-white transition-colors">Find a University</Link></li>
              <li><Link to="/#scholarships" className="hover:text-white transition-colors">Scholarships</Link></li>
              <li><Link to="/#programs" className="hover:text-white transition-colors">Application Process</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & News</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Cost of Living Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learn Basic Mandarin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>Email: info@unideepseek.cn</li>
              <li>Phone: +86 10 1234 5678</li>
              <li>Address: Chaoyang District, Beijing, China</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Unideepmate China. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
