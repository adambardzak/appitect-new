"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Contact() {
  const t = useTranslations("contact");

  const goodFitItems = [
    t("goodFit.items.0"),
    t("goodFit.items.1"),
    t("goodFit.items.2"),
    t("goodFit.items.3"),
  ];

  const badFitItems = [
    t("badFit.items.0"),
    t("badFit.items.1"),
    t("badFit.items.2"),
    t("badFit.items.3"),
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <span className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">
            {t("title")}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16 max-w-5xl mx-auto">
          <motion.div variants={fadeInLeft} transition={{ duration: 0.7 }}>
            <h3 className="font-semibold mb-6 text-green-700 dark:text-green-400 text-lg md:text-xl">
              {t("goodFit.title")}
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="space-y-4 text-gray-700 dark:text-gray-300 text-base"
            >
              {goodFitItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInLeft}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                  ></motion.div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeInRight} transition={{ duration: 0.7 }}>
            <h3 className="font-semibold mb-6 text-red-700 dark:text-red-400 text-lg md:text-xl">
              {t("badFit.title")}
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="space-y-4 text-gray-700 dark:text-gray-300 text-base"
            >
              {badFitItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInRight}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.2 }}
                    className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"
                  ></motion.div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="bg-black dark:bg-gray-800 text-white p-10 max-w-4xl mx-auto hover:bg-gray-900 dark:hover:bg-gray-700 transition-all duration-700 group"
        >
          <div className="mb-6">
            <span className="text-xl md:text-2xl">{t("cta.title")}</span>
          </div>
          <div className="mb-8 md:text-lg">
            {t("cta.email")}{" "}
            <span className="bg-white dark:bg-gray-200 text-black px-3 py-2 hover:bg-yellow-200 dark:hover:bg-yellow-300 transition-colors duration-200 cursor-pointer">
              {t("cta.emailAddress")}
            </span>{" "}
            {t("cta.tellUs")}
          </div>
          <ul className="space-y-3 mb-10 text-gray-300 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              {t("cta.requirements.0")}
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              {t("cta.requirements.1")}
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              {t("cta.requirements.2")}
            </li>
          </ul>
          <div className="text-gray-400 dark:text-gray-500 md:text-base">
            {t("cta.response")}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
