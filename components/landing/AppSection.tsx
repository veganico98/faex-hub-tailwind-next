"use client";

import { appFeatures } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AppSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={ref} id="app" className="relative py-24 bg-white z-10 overflow-hidden dark:bg-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: textY }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-700 mb-6 dark:text-slate-200 dark:bg-stone-500/50 dark:!border-stone-600">
              <Smartphone className="w-4 h-4 text-indigo-500 dark:text-stone-200" />
              Aplicativo Mobile
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6 dark:text-slate-200">
              Tudo na palma <br />
              da sua <span className="text-indigo-500">mão</span>
            </h2>

            <p className="text-gray-600 dark:text-slate-200 text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Com o faexHUB, você acompanha novidades da turma, interage com
              conteúdos e se conecta com colegas e professores de qualquer
              lugar.
            </p>

            <div className="space-y-6">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.12, duration: 0.4 }}
                  className="flex items-start gap-4">

                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white shadow-sm dark:bg-stone-500/50 dark:!border-stone-600">
                    <feature.icon className="w-5 h-5 text-indigo-500 dark:text-stone-200" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-200 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: imgY, rotateZ: imgRotate }}
            className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative">

              <div className="absolute -inset-6 bg-indigo-200 dark:bg-stone-800 rounded-3xl blur-3xl opacity-20 pointer-events-none" />

              <Image
                src="/app-mockup.png"
                alt="Faex Hub mobile app interface"
                width={400}
                height={800}
                className="relative z-10 w-72 md:w-80 h-auto rounded-[1.5rem] drop-shadow-2xl"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
