import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Define project categories
type Category = 'all' | 'web' | 'app' | 'marketing';

// Define project interface
interface Project {
  id: number;
  title: string;
  category: 'web' | 'app' | 'marketing';
  image: string;
  description: string;
  client: string;
  technologies: string[];
  link?: string;
}

const Portfolio: React.FC = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  // Sample portfolio projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern e-commerce platform with a seamless shopping experience, integrated payment gateways, and inventory management.',
      client: 'FashionHub',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A cross-platform mobile application that helps users track workouts, set goals, and monitor their fitness progress.',
      client: 'FitLife',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive digital marketing strategy that increased brand awareness and lead generation for a financial services company.',
      client: 'FinanceGrow',
      technologies: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
      link: '#'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A responsive website for a high-end restaurant featuring online reservations, menu display, and event booking.',
      client: 'Gourmet Bistro',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'Travel Booking App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A mobile application that allows users to book flights, hotels, and activities for their travel destinations.',
      client: 'TravelEase',
      technologies: ['Flutter', 'Firebase', 'RESTful APIs'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A viral social media campaign that increased engagement and followers for a consumer brand.',
      client: 'EcoProducts',
      technologies: ['Instagram', 'Facebook', 'TikTok', 'Influencer Marketing'],
      link: '#'
    },
    {
      id: 7,
      title: 'Corporate Website Redesign',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A complete redesign of a corporate website to improve user experience, modernize the brand, and increase conversions.',
      client: 'TechCorp',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
      link: '#'
    },
    {
      id: 8,
      title: 'Healthcare App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A healthcare application that allows patients to book appointments, access medical records, and consult with doctors remotely.',
      client: 'MediCare',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
      link: '#'
    },
    {
      id: 9,
      title: 'Email Marketing Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A targeted email marketing campaign that increased customer retention and sales for an online retailer.',
      client: 'ShopSmart',
      technologies: ['Mailchimp', 'A/B Testing', 'Analytics'],
      link: '#'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (category: Category) => {
    setActiveFilter(category);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl mb-8">Explore our recent projects and see how we've helped businesses achieve their digital goals.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <button 
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange('web')}
            >
              Web Design
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === 'app' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange('app')}
            >
              App Development
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === 'marketing' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange('marketing')}
            >
              Digital Marketing
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="card overflow-hidden group"
                data-aos="fade-up"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.client}</p>
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's work together to create a digital solution that meets your business needs and exceeds your expectations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;