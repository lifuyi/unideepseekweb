import React from 'react';
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
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Unideepseek China</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Universities</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Programs</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Scholarships</a>
              <a href="#blog" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Blog</a>
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
            <a href="#" className="block text-base font-medium text-slate-600">Universities</a>
            <a href="#" className="block text-base font-medium text-slate-600">Programs</a>
            <a href="#" className="block text-base font-medium text-slate-600">Scholarships</a>
            <a href="#blog" className="block text-base font-medium text-slate-600">Blog</a>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Apply Now
            </button>
          </div>
        )}
      </nav>

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
              Unideepseek China is your ultimate guide to finding the perfect university, securing scholarships, and starting your educational journey in one of the world's fastest-growing economies.
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

      {/* Blog / News Section */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News & Guides</h2>
              <p className="text-slate-600">Stay updated with the latest information about studying and living in China.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
              View all articles <ArrowRight className="w-4 h-4" />
            </a>
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
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
                    Read more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700">
              View all articles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 p-1.5 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Unideepseek</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Your trusted partner for studying in China. We help international students find the right university, apply for scholarships, and prepare for their journey.
              </p>
              {/* Social Media Icons Placeholder */}
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
                <li><a href="#" className="hover:text-white transition-colors">Find a University</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Application Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Visa Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#blog" className="hover:text-white transition-colors">Blog & News</a></li>
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
            <p>&copy; {new Date().getFullYear()} Unideepseek China. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
