
"use client";
import { FaUserMd, FaShieldAlt, FaCalendarCheck, FaMoneyCheckAlt, FaLock, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Expert-Led Psychiatric Care",
      description: "Talkiatry is powered by board-certified psychiatrists who provide compassionate, personalized mental health care tailored to your needs.",
    },
    {
      icon: <FaMoneyCheckAlt size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Insurance-Friendly & Affordable",
      description: "We accept most major insurance plans, making high-quality mental health care accessible and stress-free with transparent pricing.",
    },
    {
      icon: <FaCalendarCheck size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Flexible, Hassle-Free Appointments",
      description: "Choose virtual or in-person sessions at your convenience. Book in minutes and get the support you need—when you need it.",
    },
    {
      icon: <FaLock size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Confidential & Secure Sessions",
      description: "Your privacy is our priority. All sessions are HIPAA-compliant, encrypted, and 100% confidential—so you can feel safe opening up.",
    },
    {
      icon: <FaShieldAlt size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Personalized Treatment Plans",
      description: "Mental health isn’t one-size-fits-all. Our psychiatrists create customized treatment plans designed specifically for your well-being.",
    },
    {
      icon: <FaStar size={45} className="text-white group-hover:text-blue-300 transition-all duration-300" />,
      title: "Trusted by Thousands",
      description: "With thousands of patients and countless success stories, Talkiatry is redefining mental health care—one patient at a time.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">Why Choose Cerebral?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          We are committed to providing top-tier mental health care that is accessible, personalized, and secure.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-500 p-4 rounded-full mb-4 group-hover:bg-blue-700 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
