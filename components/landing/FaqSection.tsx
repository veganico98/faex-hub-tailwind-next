"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import type { FaqItem as FaqItemType } from "@/lib/data";

function FaqItem({ q, a, index }: FaqItemType & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="text-sm font-semibold text-gray-900">{q}</span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gray-500">
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden">
            <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} id="faq" className="py-24 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Perguntas <span className="text-indigo-500">frequentes</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o FAEX HUB e comece a aproveitar tudo que a
            plataforma oferece.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, index) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
