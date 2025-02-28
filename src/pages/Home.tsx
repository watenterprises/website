import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, TrendingUp, Smartphone, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Digital Partner for Success</h1>
            <p className="text-xl md:text-2xl mb-8">We create stunning digital experiences that drive growth and engagement for your business.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer comprehensive digital solutions to help your business thrive in the digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Design */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <Monitor className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Website Design</h3>
                <p className="text-gray-600 mb-6">Custom, responsive websites that look great on any device and drive conversions.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Digital Marketing</h3>
                <p className="text-gray-600 mb-6">Strategic marketing campaigns that increase visibility and drive qualified leads.</p>
                <Link to="/services" className="text-green-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* App Development */}
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card">
                <div className="bg-purple-100 p-4 rounded-full mb-6">
                  <Smartphone className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">App Development</h3>
                <p className="text-gray-600 mb-6">Native and cross-platform mobile applications that engage users and solve problems.</p>
                <Link to="/services" className="text-purple-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose wAt Enterprises?</h2>
              <p className="text-gray-600 mb-8">We combine creativity, technology, and strategy to deliver exceptional digital solutions that help your business grow.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg">Expert Team</h3>
                    <p className="text-gray-600">Our team of designers, developers, and marketers bring years of experience to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg">Tailored Solutions</h3>
                    <p className="text-gray-600">We create custom solutions designed specifically for your business needs and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg">Results-Driven Approach</h3>
                    <p className="text-gray-600">We focus on delivering measurable results that impact your bottom line.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-lg">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support and maintenance to ensure your digital assets perform optimally.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Take a look at some of our recent work that showcases our expertise and creativity.</p>
          </div>

          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="portfolio-item" data-aos="fade-up" data-aos-delay="100">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="E-commerce Website" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold text-white mb-2">E-commerce Website</h3>
                <p className="text-white text-center mb-4">A modern online store with seamless checkout experience</p>
                <Link to="/portfolio" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="portfolio-item" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mobile App" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold text-white mb-2">Fitness Tracking App</h3>
                <p className="text-white text-center mb-4">A cross-platform mobile app for fitness enthusiasts</p>
                <Link to="/portfolio" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="portfolio-item" data-aos="fade-up" data-aos-delay="300">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Campaign" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold text-white mb-2">Marketing Campaign</h3>
                <p className="text-white text-center mb-4">A comprehensive digital marketing strategy for a finance company</p>
                <Link to="/portfolio" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8">Let's work together to create a digital strategy that drives results for your business.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
                Get in Touch
              </Link>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;