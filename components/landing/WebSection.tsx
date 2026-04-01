"use client";

import { webFeatures } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function WebSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} id="web" className="py-24 bg-[#f5f6f8] overflow-hidden dark:bg-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
  
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-xl">
            
              <div className="absolute -inset-6 bg-indigo-200 dark:bg-stone-800 rounded-3xl blur-3xl opacity-20 pointer-events-none" />

              <Image
                src="/app-desktop.png"
                alt="Faex Hub Web Dashboard"
                width={1200}
                height={750}
                className="relative z-10 w-full rounded-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: textY }} className="order-1 lg:order-2">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white dark:bg-stone-500/50 dark:!border-stone-600 shadow-sm text-sm font-medium text-gray-700  dark:text-slate-200 mb-6">
              <Monitor className="w-4 h-4 text-indigo-500 dark:text-stone-200" />
              Sistema Web
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-slate-200 leading-tight mb-6">
              Experiência completa <br />
              no <span className="text-indigo-500">navegador</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-10 max-w-md leading-relaxed dark:text-slate-200">
              No desktop, o faexHUB oferece uma experiência robusta com
              dashboard, gestão de turmas e relatórios para professores e
              alunos.
            </p>

            <div className="space-y-6">
              {webFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-start gap-4">

                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm dark:bg-stone-500/50 dark:!border-stone-600">
                    <feature.icon className="w-5 h-5 text-indigo-500 dark:text-stone-200" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-200">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
