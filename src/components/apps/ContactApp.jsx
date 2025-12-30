import React, { useState } from "react";
import { portfolioData } from "../../data/mock";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  CheckCircle,
} from "lucide-react";

const ContactApp = () => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      access_key: "cac391cc-4b3f-40df-bed9-b7b609aa2874",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Mail className="w-5 h-5 text-orange-400" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-orange-400"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <Phone className="w-5 h-5 text-orange-400" />
              <a
                href={`tel:${profile.phone}`}
                className="hover:text-orange-400"
              >
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500/20 rounded-lg"
            >
              <Linkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/20 rounded-lg"
            >
              <Github />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-green-400 font-semibold">
                Message sent successfully!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactApp;
