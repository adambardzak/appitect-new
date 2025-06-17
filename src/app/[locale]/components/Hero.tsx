"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 mb-12 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-gray-900 dark:text-white items-center gap-6"
            >
              {t("title")}
            </motion.h1>
            <motion.div
              variants={staggerContainer}
              className="md:text-xl text-gray-700 dark:text-gray-300 space-y-6 max-w-4xl"
            >
              <motion.p variants={fadeInUp}>{t("description1")}</motion.p>
              <motion.p variants={fadeInUp}>{t("description2")}</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-mono text-base px-8 py-3 transition-all duration-200 hover:shadow-lg flex items-center">
                {t("cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 dark:text-gray-500">
                {t("or")}
              </span>
              <a
                href="#services"
                className="underline hover:bg-yellow-200 dark:hover:bg-yellow-600 px-2 py-1 rounded transition-all duration-200 text-base text-gray-900 dark:text-gray-100"
              >
                {t("seeServices")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
