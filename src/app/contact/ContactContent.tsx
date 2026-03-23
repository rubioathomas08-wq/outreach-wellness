"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Get In <span className="italic text-gold">Touch</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Have questions or ready to book? Reach out and we&apos;ll get back to
              you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {isSuccess ? (
              <div className="bg-dark-card border border-gold/30 rounded-sm p-10 text-center">
                <span className="text-gold text-4xl block mb-4">&#10003;</span>
                <h3 className="font-display text-xl text-off-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-text text-sm">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs text-gray-text tracking-wider uppercase block mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-off-white text-sm focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs text-gray-text tracking-wider uppercase block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-off-white text-sm focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs text-gray-text tracking-wider uppercase block mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-off-white text-sm focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="(615) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-xs text-gray-text tracking-wider uppercase block mb-2"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-off-white text-sm focus:border-gold/50 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="functional-health">Functional Health</option>
                    <option value="iv-therapy">IV Therapy</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="injectables">Injectables & Aesthetics</option>
                    <option value="hormone-replacement">
                      Hormone Replacement
                    </option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs text-gray-text tracking-wider uppercase block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-off-white text-sm focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your health goals or questions..."
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Visit Us
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                321 W. McKnight Dr, Suite C
                <br />
                Murfreesboro, TN 37129
              </p>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Call Us
              </h3>
              <a
                href="tel:6154177050"
                className="text-off-white text-sm hover:text-gold transition-colors"
              >
                (615) 417-7050
              </a>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Email Us
              </h3>
              <a
                href="mailto:Casey@outreachwellness.com"
                className="text-off-white text-sm hover:text-gold transition-colors"
              >
                Casey@outreachwellness.com
              </a>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
                Book Online
              </h3>
              <Button
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="text-xs"
              >
                Schedule Appointment
              </Button>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-sm p-6">
              <p className="text-gray-text text-xs leading-relaxed">
                Not sure which service is right for you? No worries — send us a
                message or book a consultation and Casey will help guide you to
                the best option.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
