"use client";

import { useState, type FormEvent } from "react";
import { Clock, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budgetRange: "",
    preferredDate: "",
    preferredTime: "",
    projectDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-100 text-center">
        <div className="w-16 h-16 rounded-full bg-brown/10 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-brown"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          Consultation Booked
        </h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for scheduling a consultation with Veylora Interiors.
          We&rsquo;ll review your project details and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <Reveal>
      <div className="bg-white rounded-3xl border border-brown-light p-8 shadow-sm">
        <h3 className="font-serif text-2xl text-foreground mb-2">
          Book Consultation
        </h3>
        <div className="w-10 h-px bg-brown mb-6" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              Personal Information
            </h4>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Full Name <span className="text-brown">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Email Address <span className="text-brown">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors"
                  placeholder="+234 802 256 7743"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              Project Details
            </h4>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Project Type <span className="text-brown">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground focus:outline-none focus:border-brown transition-colors appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Office">Office</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Project Location <span className="text-brown">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors"
                  placeholder="City, State"
                />
              </div>
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Budget Range <span className="text-brown">*</span>
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground focus:outline-none focus:border-brown transition-colors appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  <option value="₦500k–₦1M">₦500k–₦1M</option>
                  <option value="₦1M–₦5M">₦1M–₦5M</option>
                  <option value="₦5M–₦10M">₦5M–₦10M</option>
                  <option value="₦10M+">₦10M+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Preferred Consultation Date{" "}
                  <span className="text-brown">*</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground focus:outline-none focus:border-brown transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Preferred Time <span className="text-brown">*</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-xl border border-neutral-200 text-foreground focus:outline-none focus:border-brown transition-colors appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
                >
                  Project Description <span className="text-brown">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={5}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-14 bg-brown hover:bg-[#744C29] text-white rounded-xl text-sm tracking-[0.15em] uppercase transition-colors"
          >
            Book Consultation
          </button>
        </form>
        <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-3.5 h-3.5 text-brown" />
            Average response time: Under 24 hours
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-brown" />
            Initial consultation: 30–45 minutes
          </div>
          <p className="text-xs text-gray-400 italic mt-3">
            No obligation. We simply want to understand your vision.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
