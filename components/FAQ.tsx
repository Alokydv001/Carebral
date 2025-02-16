

"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // ✅ Explicitly define type if using TypeScript

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Cerebral?",
      answer:
        "Cerebral is a mental health platform that provides convenient online consultations with licensed psychiatrists. Our mission is to help individuals manage and improve their mental well-being from the comfort of their homes.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Simply visit our website and click on 'Book Appointment.' Fill in your details, select a time slot, and confirm your booking. It's that easy!",
    },
    {
      question: "Do I need insurance to use Cerebral?",
      answer:
        "We accept most major insurances, but we also offer private pay options for those without insurance. Please contact us for more details on coverage.",
    },
    {
      question: "How long are the appointments?",
      answer:
        "Appointments typically last between 30 to 60 minutes, depending on the type of consultation. We ensure that each session is tailored to your specific needs.",
    },
    {
      question: "Can I switch providers if I'm not happy?",
      answer:
        "Yes! We understand the importance of the right fit. If you're not satisfied with your provider, you can request to switch to another psychiatrist easily.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center">Frequently Asked Questions</h2>
        <p className="mt-4 mb-8 text-center text-blue-200">
          Have questions? We’ve got answers! Here are some common inquiries from our patients.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 px-6 font-semibold text-lg text-white text-left hover:bg-white/20 rounded-t-2xl transition-all duration-300"
              >
                {faq.question}
                <FaChevronDown
                  className={`text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"
                } text-blue-200`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
