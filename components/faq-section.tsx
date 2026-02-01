"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./animations";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", subtitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>}
        </FadeInUp>

        <StaggerContainer staggerDelay={0.1} className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card rounded-xl overflow-hidden border-0 shadow-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
