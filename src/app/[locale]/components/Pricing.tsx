"use client";

import { motion } from "framer-motion";
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

export default function Pricing() {
  const t = useTranslations("pricing");

  const pricingTiers = [
    {
      title: t("simple.title"),
      price: t("simple.price"),
      description: t("simple.description"),
      color: "blue",
      features: [
        t("simple.features.0"),
        t("simple.features.1"),
        t("simple.features.2"),
        t("simple.features.3"),
      ],
    },
    {
      title: t("mobile.title"),
      price: t("mobile.price"),
      description: t("mobile.description"),
      color: "green",
      features: [
        t("mobile.features.0"),
        t("mobile.features.1"),
        t("mobile.features.2"),
        t("mobile.features.3"),
      ],
    },
    {
      title: t("complex.title"),
      price: t("complex.price"),
      description: t("complex.description"),
      color: "purple",
      features: [
        t("complex.features.0"),
        t("complex.features.1"),
        t("complex.features.2"),
        t("complex.features.3"),
      ],
    },
  ];

  return (
    <motion.section
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
          <span className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">
            {t("title")}
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-500 group ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3
                className={`font-semibold mb-4 text-lg md:text-xl transition-colors duration-200 text-gray-900 dark:text-white ${
                  tier.color === "blue"
                    ? "group-hover:text-blue-600"
                    : tier.color === "green"
                    ? "group-hover:text-green-600"
                    : "group-hover:text-purple-600"
                }`}
              >
                {tier.title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                {tier.price}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-base">
                {tier.description}
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        tier.color === "blue"
                          ? "bg-blue-500"
                          : tier.color === "green"
                          ? "bg-green-500"
                          : "bg-purple-500"
                      }`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
