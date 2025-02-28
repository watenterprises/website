import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  TrendingUp, 
  Smartphone, 
  Palette, 
  Search, 
  ShoppingCart, 
  Code, 
  BarChart, 
  Share2 
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">We offer comprehensive digital solutions to help your business thrive in the digital landscape.</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-24">
            {/* Website Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Website Design" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div data-aos="fade-left">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <Monitor className="text-blue-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Website Design & Development</h2>
                <p className="text-gray-600 mb-6">We create stunning, responsive websites that not only look great but also drive conversions and deliver results for your business.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Custom website design tailored to your brand</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Responsive design for all devices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">User experience (UX) optimization</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Content management systems (WordPress, etc.)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">E-commerce solutions</p>
                  </div>
                </div>
                
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
                <p className="text-gray-600 mb-6">We develop and execute comprehensive digital marketing strategies that increase your online visibility and drive qualified leads to your business.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Search Engine Optimization (SEO)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Pay-Per-Click (PPC) advertising</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Social media marketing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Email marketing campaigns</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-green-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Content marketing strategy</p>
                  </div>
                </div>
                
                <Link to="/contact" className="btn btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500">
                  Get Started
                </Link>
              </div>
              <div className="order-1 lg:order-2" data-aos="fade-left">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Marketing" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>

            {/* App Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="App Development" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div data-aos="fade-left">
                <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                  <Smartphone className="text-purple-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">App Development</h2>
                <p className="text-gray-600 mb-6">We build native and cross-platform mobile applications that engage users, solve problems, and help your business reach new audiences.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">iOS and Android app development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">Cross-platform development (React Native, Flutter)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">UI/UX design for mobile applications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">App maintenance and updates</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                    </div>
                    <p className="text-gray-700">App Store optimization</p>
                  </div>
                </div>
                
                <Link to="/contact" className="btn btn-primary bg-purple-600 hover:bg-purple-700 focus:ring-purple-500">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer a wide range of digital services to meet all your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UI/UX Design */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card">
                <div className="bg-pink-100 p-4 rounded-full mb-6">
                  <Palette className="text-pink-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
                <p className="text-gray-600">User-centered design that creates intuitive, engaging, and accessible digital experiences.</p>
              </div>
            </div>

            {/* SEO */}
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">
                <div className="bg-yellow-100 p-4 rounded-full mb-6">
                  <Search className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">SEO Optimization</h3>
                <p className="text-gray-600">Improve your search engine rankings and drive organic traffic to your website.</p>
              </div>
            </div>

            {/* E-commerce */}
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <ShoppingCart className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">E-commerce Solutions</h3>
                <p className="text-gray-600">Custom online stores with secure payment processing and inventory management.</p>
              </div>
            </div>

            {/* Web Development */}
            <div className="card" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">
                <div className="bg-indigo-100 p-4 rounded-full mb-6">
                  <Code className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600">Custom web applications and content management systems tailored to your needs.</p>
              </div>
            </div>

            {/* Analytics */}
            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <div className="service-card">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <BarChart className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Analytics & Reporting</h3>
                <p className="text-gray-600">Data-driven insights to measure performance and optimize your digital strategy.</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="card" data-aos="fade-up" data-aos-delay="600">
              <div className="service-card">
                <div className="bg-red-100 p-4 rounded-full mb-6">
                  <Share2 className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Social Media Marketing</h3>
                <p className="text-gray-600">Strategic social media campaigns to build brand awareness and engage your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a proven methodology to ensure the success of your digital projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-200"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and target audience to understand your needs.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-200"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-gray-600">We develop a tailored strategy and roadmap to achieve your digital objectives.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-200"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-600">We execute the strategy with our expert team, keeping you involved throughout.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">4</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-600">We continuously monitor, analyze, and optimize to ensure ongoing success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your project and how we can help your business grow.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
              </Link>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;