"use client";

import Hero from "@/components/Hero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main>
      <Hero title="Contact Us" subtitle="Get in touch with us today" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-school-red text-white rounded-full p-4">
                  <MapPin size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                Maji Moja Extension, Lusaka, Zambia
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-school-red text-white rounded-full p-4">
                  <Phone size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-2">Phone</h3>
              <p className="text-gray-600">0976 46 8933</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-school-red text-white rounded-full p-4">
                  <Mail size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-2">Email</h3>
              <p className="text-gray-600">info@barracksparkschool.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-school-blue mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-school-red"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-school-red"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-school-red"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-school-red"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-school-red resize-none"
                required
              ></textarea>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Business Hours */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-school-blue text-white rounded-full p-4">
                <Clock size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-school-blue mb-2">
              Business Hours
            </h3>
            <p className="text-gray-600 text-lg">
              Monday - Friday: 7:00 AM - 5:00 PM
            </p>
            <p className="text-gray-600 text-lg">
              Saturday: 8:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
