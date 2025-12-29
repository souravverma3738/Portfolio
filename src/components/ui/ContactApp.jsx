import React, { useState } from 'react';
import { portfolioData } from '../../data/mock';
import { Send, MapPin, Mail, Phone, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactApp = () => {
  const { profile } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_kucrf63';
  const EMAILJS_TEMPLATE_ID = 'template_mexi77f';
  const EMAILJS_PUBLIC_KEY = 'Y5XHxeOnoXTPp3c12';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Template params that match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: profile.name, // Your name
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Mail className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a href={`mailto:${profile.email}`} className="text-white hover:text-orange-400 transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <a href={`tel:${profile.phone}`} className="text-white hover:text-orange-400 transition-colors">
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white">{profile.location}</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-green-400 mb-2">Message Sent!</h4>
              <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors text-white"
                    placeholder="Your nam12e"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors text-white resize-none"
                    placeholder="Your messag1e..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message1
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactApp;