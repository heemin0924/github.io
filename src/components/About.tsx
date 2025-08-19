import React, { useState } from 'react';
import { CheckCircle, MapPin, Mail, Phone, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

const About: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioConfig.personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  };

  const skillCategories = {
    frontend: { title: 'Frontend', color: 'blue' },
    backend: { title: 'Backend', color: 'emerald' },
    tools: { title: 'Tools & DevOps', color: 'orange' },
    design: { title: 'Design', color: 'purple' }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      emerald: 'bg-emerald-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              {portfolioConfig.about.description}
            </p>

            <div className="space-y-3">
              {portfolioConfig.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{portfolioConfig.personal.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {portfolioConfig.personal.email}
                </a>
              </div>
              {portfolioConfig.personal.phone && (
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>{portfolioConfig.personal.phone}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                {Object.entries(portfolioConfig.social).map(([platform, url]) => {
                  if (!url) return null;
                  const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                  
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <img
                src={portfolioConfig.personal.avatar}
                alt={portfolioConfig.personal.name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-emerald-500/20"></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillCategories).map(([categoryKey, category]) => {
              const categorySkills = portfolioConfig.skills.filter(
                skill => skill.category === categoryKey
              );

              if (categorySkills.length === 0) return null;

              return (
                <div key={categoryKey} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    {category.title}
                  </h4>
                  <div className="space-y-3">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level 
                                  ? getColorClasses(category.color)
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;