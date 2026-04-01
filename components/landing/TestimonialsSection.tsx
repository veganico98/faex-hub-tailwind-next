"use client";

import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-[#f5f6f8] dark:bg-stone-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-slate-200">
            Quem usa, <span className="text-indigo-500">recomenda</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto dark:text-slate-200">
            Descubra o que alunos e professores estão dizendo sobre sua
            experiência com o FAEX HUB.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition dark:bg-stone-500/50 dark:!border-stone-600">

              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400 dark:text-white dark:fill-white"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-slate-200 leading-relaxed mb-6">
                “{item.content}”
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={`/depoimentos-0${index + 1}.png`}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-slate-300">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-slate-200">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
