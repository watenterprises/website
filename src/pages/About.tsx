import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">We're a team of digital experts passionate about creating exceptional digital experiences.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, wAt Enterprises began with a simple mission: to help businesses succeed in the digital world. What started as a small team of passionate designers and developers has grown into a full-service digital agency with expertise across web design, app development, and digital marketing.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that great digital experiences are built on a foundation of understanding our clients' businesses, their goals, and their users. This client-centered approach has allowed us to create digital solutions that not only look great but also deliver measurable results.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we're proud to have worked with clients across various industries, from startups to established enterprises, helping them transform their digital presence and achieve their business objectives.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn btn-primary">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The core principles that guide our work and relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Client Partnership</h3>
              <p className="text-gray-600">We view our clients as partners and work collaboratively to achieve their goals. Your success is our success.</p>
            </div>

            {/* Value 2 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">We're committed to delivering exceptional quality in everything we do, from design and development to client service.</p>
            </div>

            {/* Value 3 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-6">
                <Zap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">We stay at the forefront of digital trends and technologies to provide innovative solutions for our clients.</p>
            </div>

            {/* Value 4 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-yellow-100 p-4 rounded-full inline-block mb-6">
                <Target className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">We focus on delivering measurable results that impact our clients' business objectives and drive growth.</p>
            </div>

            {/* Value 5 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-red-100 p-4 rounded-full inline-block mb-6">
                <Clock className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Timeliness</h3>
              <p className="text-gray-600">We respect deadlines and deliver projects on time without compromising on quality or attention to detail.</p>
            </div>

            {/* Value 6 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-indigo-100 p-4 rounded-full inline-block mb-6">
                <CheckCircle className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">We operate with honesty, transparency, and ethical practices in all our client relationships and business dealings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The talented individuals who make the magic happen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="team-card">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="John Smith" 
                  className="team-image"
                />
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">With over 2 years of experience in digital strategy and business development.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="team-card">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Sarah Johnson" 
                  className="team-image"
                />
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">Creative Director</p>
                <p className="text-gray-600">Award-winning designer with a passion for creating beautiful and functional user experiences.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="team-card">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Michael Chen" 
                  className="team-image"
                />
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-3">Lead Developer</p>
                <p className="text-gray-600">Full-stack developer with expertise in building scalable and robust web applications.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="team-card">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Emily Rodriguez" 
                  className="team-image"
                />
                <h3 className="text-xl font-bold mb-1">Emily Rodriguez</h3>
                <p className="text-blue-600 mb-3">Marketing Strategist</p>
                <p className="text-gray-600">Digital marketing expert specializing in SEO, PPC, and social media campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We've had the privilege of working with amazing clients across various industries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Client logos would go here - using placeholder colored boxes for now */}
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-xl font-bold text-gray-400">Client 1</div>
            </div>
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-xl font-bold text-gray-400">Client 2</div>
            </div>
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-xl font-bold text-gray-400">Client 3</div>
            </div>
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="400">
              <div className="text-xl font-bold text-gray-400">Client 4</div>
            </div>
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="500">
              <div className="text-xl font-bold text-gray-400">Client 5</div>
            </div>
            <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="600">
              <div className="text-xl font-bold text-gray-400">Client 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with wAt Enterprises was a game-changer for our business. They completely transformed our website and digital marketing strategy, resulting in a 200% increase in leads within just three months."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JB</span>
                </div>
                <div>
                  <h3 className="font-bold">Jane Brown</h3>
                  <p className="text-gray-600 text-sm">Marketing Director, RetailPlus</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team at wAt Enterprises is incredibly talented and professional. They took the time to understand our business needs and delivered a website that exceeded our expectations. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card p-8" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">RK</span>
                </div>
                <div>
                  <h3 className="font-bold">Robert Kim</h3>
                  <p className="text-gray-600 text-sm">Founder, HealthApp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We hired wAt Enterprises to develop our mobile app, and they delivered a product that our users love. Their attention to detail and focus on user experience made all the difference."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">Let's discuss how we can help your business achieve its digital goals.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
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

export default About;