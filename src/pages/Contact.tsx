import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">Get in touch with our team to discuss your project or ask any questions.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="card p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:watenterprisesglobal@gmail.com" className="text-blue-600 font-medium hover:underline">watenterprisesglobal@gmail.com</a>
            </div>

            {/* Phone */}
            <div className="card p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 9am to 5pm.</p>
              <a href="tel:+1234567890" className="text-green-600 font-medium hover:underline">+91 8972947446</a>
            </div>

            {/* Office */}
            <div className="card p-8 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <MapPin className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come say hello at our office.</p>
              <p className="text-purple-600 font-medium">No 187, 8th Main 2nd Cross, Prakruthi Layout Srikantapura, Bangalore North, Bengaluru,
              Karnataka, 560073</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8" role="alert">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p><strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="label">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="label">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Select a subject</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary flex items-center">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Calendly Integration */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Schedule a Meeting</h2>
              <p className="text-gray-600 mb-8">Book a time slot that works for you using our online scheduling tool.</p>
              
              <div className="h-[600px] border border-gray-200 rounded-lg overflow-hidden">
                <InlineWidget url="https://calendly.com/watenterprisesglobal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our services and process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="card p-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-3">How long does it take to complete a website?</h3>
              <p className="text-gray-600">The timeline for a website project depends on its complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months or more.</p>
            </div>

            {/* FAQ Item 2 */}
            <div className="card p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font- bold mb-3">What is your pricing structure?</h3>
              <p className="text-gray-600">We offer customized pricing based on the specific needs of each project. Contact us for a detailed quote tailored to your requirements.</p>
            </div>

            {/* FAQ Item 3 */}
            <div className="card p-6" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-3">Do you offer ongoing maintenance?</h3>
              <p className="text-gray-600">Yes, we offer website maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.</p>
            </div>

            {/* FAQ Item 4 */}
            <div className="card p-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-3">Can you help with content creation?</h3>
              <p className="text-gray-600">Absolutely! We offer content creation services including copywriting, photography, and video production to help tell your brand's story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your project and take the first step towards digital success.</p>
            <a href="mailto:info@watenterprises.com" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;