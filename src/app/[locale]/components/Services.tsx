"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Wrench } from "lucide-react";
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

export default function Services() {
  const t = useTranslations("services");

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-6xl mx-auto"
        >
          <span className="text-2xl font-light text-gray-900 dark:text-white">
            {t("title")}
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-900 p-8 border-l-4 border-blue-400 hover:border-blue-500 transition-all duration-500 hover:shadow-lg group"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Terminal className="h-6 w-6 mt-1 text-blue-600 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-gray-900 dark:text-white">
                  {t("webApps.title")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("webApps.description")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-900 p-8 border-l-4 border-purple-400 hover:border-purple-500 transition-all duration-500 hover:shadow-lg group"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Code className="h-6 w-6 mt-1 text-purple-600 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-gray-900 dark:text-white">
                  {t("websites.title")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("websites.description")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-900 p-8 border-l-4 border-green-400 hover:border-green-500 transition-all duration-500 hover:shadow-lg group"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Wrench className="h-6 w-6 mt-1 text-green-600 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-gray-900 dark:text-white">
                  {t("mobileApps.title")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("mobileApps.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-8 max-w-5xl mx-auto hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-500"
        >
          <div className="text-red-800 dark:text-red-300 font-semibold mb-3 text-lg">
            {t("dontDo.title")}
          </div>
          <p className="text-red-700 dark:text-red-400 text-base">
            {t("dontDo.description")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
