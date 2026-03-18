import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose this payment platform?",
      answer: "It offers fast onboarding, reliable infrastructure, and seamless integrations to help businesses scale efficiently."
    },
    {
      question: "How can I get started?",
      answer: "Sign up, complete verification, and integrate APIs or SDKs to start accepting payments quickly."
    },
    {
      question: "How long does activation take?",
      answer: "Most accounts are activated within a few hours depending on verification requirements."
    },
    {
      question: "How is it different from other solutions?",
      answer: "It focuses on high success rates, intelligent routing, and developer-friendly APIs."
    },
    {
      question: "Can I accept international payments?",
      answer: "Yes, you can accept payments globally in multiple currencies with seamless settlement."
    },
    {
      question: "What are payouts?",
      answer: "Payouts allow you to send money instantly to vendors, employees, or customers."
    },
    {
      question: "Is custom pricing available?",
      answer: "Yes, pricing can be tailored based on your business scale and requirements."
    }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-zinc-900 text-white px-20 py-24">

      <div className="flex gap-20">

        {/* LEFT SIDE */}
        <div className="w-1/3">
          <h1 className="text-5xl font-semibold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-zinc-400 mb-6">
            Still have questions? Explore more details or reach out for support.
          </p>

          <div className="text-green-400 cursor-pointer mb-2">
            Visit Support →
          </div>

          <div className="text-zinc-500 text-sm">
            *Terms & Conditions apply
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-700 py-6">

              {/* QUESTION */}
              <div 
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-xl font-medium">
                  {faq.question}
                </h2>

                <span className="text-2xl text-green-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 mt-4 pr-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default FAQ;