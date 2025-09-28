// src/pages/projects/club/ContactClub.jsx
import React, { useState, useEffect } from "react";

export default function ContactClub() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mouse movement effect for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      title: "General Inquiries",
      email: "info@redridersclub.com",
      icon: "📧",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Event & Tournament Queries",
      email: "events@redridersclub.com", 
      icon: "🏆",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Membership & Community",
      email: "members@redridersclub.com",
      icon: "👥",
      color: "from-green-500 to-green-600"
    }
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      handle: "facebook.com/RedRidersClub",
      icon: "📘",
      color: "from-blue-600 to-blue-700"
    },
    {
      platform: "Instagram", 
      handle: "instagram.com/RedRidersClub",
      icon: "📸",
      color: "from-pink-500 to-purple-600"
    },
    {
      platform: "Twitter",
      handle: "twitter.com/RedRidersClub", 
      icon: "🐦",
      color: "from-blue-400 to-blue-500"
    },
    {
      platform: "YouTube",
      handle: "youtube.com/RedRidersClub",
      icon: "▶️",
      color: "from-red-600 to-red-700"
    }
  ];

  const officeHours = [
    { day: "Monday - Saturday", time: "10:00 AM – 7:00 PM", available: true },
    { day: "Sunday", time: "Closed (open during special events)", available: false }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`,
          transition: 'background-image 0.1s ease-out'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-600/10"></div>
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pointer-events-auto">
        {/* Floating Contact Icons */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-red-600 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-5 h-5 bg-yellow-500 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Main Content */}
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          {/* Communication Icons with Floating Animation */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {['📞', '✉️', '💬', '🌐'].map((icon, index) => (
              <div 
                key={index}
                className="text-4xl transform hover:scale-125 transition-all duration-500 animate-bounce"
                style={{animationDelay: `${index * 200}ms`, animationDuration: '3s'}}
              >
                {icon}
              </div>
            ))}
          </div>
          
          {/* Main Title with Gradient Text */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              CONTACT
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              RED RIDERS
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Let's Connect & Build Memories Together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-500/30 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-semibold">We're Here to Help!</span>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get <span className="text-red-500">In Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question, want to join an event, or looking to collaborate? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                  <a 
                    href={`mailto:${info.email}`}
                    className="text-red-400 hover:text-red-300 transition-colors duration-300 font-medium break-all"
                  >
                    {info.email}
                  </a>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700`}></div>
              </div>
            ))}
          </div>

          {/* Location & Phone */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Location</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Red Riders Sports Club<br />
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    +91-XXXXXXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-red-900/5 pointer-events-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Office <span className="text-red-500">Hours</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
                🕒
              </div>
            </div>
            
            <div className="space-y-6">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-gray-700/50">
                  <span className="text-white font-semibold text-lg">{schedule.day}</span>
                  <span className={`font-medium ${schedule.available ? 'text-green-400' : 'text-red-400'}`}>
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="text-red-500">Connected</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Follow us on social media for the latest updates, live scores, and event highlights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={`#`}
                className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{social.platform}</h3>
                <p className="text-gray-400 text-sm break-all">{social.handle}</p>
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick <span className="text-red-500">Contact Form</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Drop us a message and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message / Query *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-10 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-2xl'}`}
                  style={{
                    boxShadow: '0 20px 40px rgba(239,68,68,0.4)'
                  }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? '📤 Sending...' : '📩 Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 px-6 pointer-events-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12">
            <div className="text-6xl mb-6">⚡</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the <span className="text-red-500">Revolution?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Whether you're a passionate player, a fan, or a partner, Red Riders Sports Club is just a message away. 
              Let's build memories and celebrate sports together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                🚀 Join Our Community
              </button>
              <button className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                📅 View Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
