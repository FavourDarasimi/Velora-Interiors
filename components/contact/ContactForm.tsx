"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
          Message Sent
        </h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for reaching out. We&rsquo;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  const fields = [
    { label: "Full Name", name: "name", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Phone", name: "phone", type: "tel", required: false },
  ];

  return (
    <Reveal>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-2">
            Send a Message
          </h3>
          <div className="w-10 h-px bg-brown mb-5" />
          <p className="text-gray-500 leading-relaxed">
            Have a question or want to start a project? Fill out the form and
            we&rsquo;ll be in touch.
          </p>
        </div>
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
            >
              {field.label}
              {field.required && <span className="text-brown ml-1">*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.required}
              className="w-full px-4 py-3 bg border border-gray-400 rounded-lg text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors"
              placeholder={`Your ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
          >
            Subject <span className="text-brown ml-1">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg border border-gray-400 rounded-lg text-foreground focus:outline-none focus:border-brown transition-colors appearance-none"
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Project Consultation">Project Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs tracking-widest uppercase text-gray-400 mb-2"
          >
            Message <span className="text-brown ml-1">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg border border-gray-400 rounded-lg text-foreground placeholder:text-gray-400 focus:outline-none focus:border-brown transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-brown text-white text-sm tracking-[0.15em] uppercase hover:bg-brown/90 transition-colors rounded-lg"
        >
          Send Message
        </button>
      </form>
    </Reveal>
  );
}
