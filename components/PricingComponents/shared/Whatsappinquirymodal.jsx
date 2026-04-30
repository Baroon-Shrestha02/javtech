"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  User,
  Building2,
  Phone,
  FileText,
} from "lucide-react";
import { useState } from "react";

/* ─────────────────────────────
   WHATSAPP INQUIRY MODAL
───────────────────────────── */
export function WhatsAppInquiryModal({
  isOpen,
  onClose,
  planName,
  whatsappNumber = "9779807128557",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactNumber: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Please provide some details about your inquiry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Construct WhatsApp message
    let message = `*New Inquiry*\n\n`;
    message += `*Plan Interested In:* ${planName || "General Inquiry"}\n\n`;
    message += `*Full Name:* ${formData.fullName}\n`;

    if (formData.companyName) {
      message += `*Company:* ${formData.companyName}\n`;
    }

    message += `*Contact Number:* ${formData.contactNumber}\n\n`;
    message += `*Details:*\n${formData.details}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({
      fullName: "",
      companyName: "",
      contactNumber: "",
      details: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-8 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Send Inquiry</h2>
                </div>

                {planName && (
                  <p className="text-white/80 text-sm">
                    Interested in{" "}
                    <span className="font-semibold">{planName}</span>
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="h-4 w-4" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Building2 className="h-4 w-4" />
                    Company Name{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="h-4 w-4" />
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+977 9801234567"
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all ${
                      errors.contactNumber
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />
                  {errors.contactNumber && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>

                {/* Details/Description */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="h-4 w-4" />
                    Details/Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, timeline, budget, or any specific questions..."
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none ${
                      errors.details ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.details && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-600/30"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-center text-gray-500">
                  You'll be redirected to WhatsApp with a pre-filled message
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
