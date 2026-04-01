"use client";

import { platformFeatures } from "@/lib/data";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            Recursos que <span className="text-indigo-500">transformam</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo o que alunos e professores precisam para uma experiência
            acadêmica conectada e colaborativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

              <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 mb-4">
                <feature.icon className="w-5 h-5 text-indigo-500" />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
