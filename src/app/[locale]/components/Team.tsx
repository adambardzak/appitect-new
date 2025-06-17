"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
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
      staggerChildren: 0.15,
    },
  },
};

export default function Team() {
  const t = useTranslations("team");

  const teamMembers = [
    {
      name: "Adam",
      color: "bg-blue-500",
      description: t("members.adam"),
    },
    {
      name: "Jan",
      color: "bg-green-500",
      description: t("members.jan1"),
    },
    {
      name: "Jan",
      color: "bg-purple-500",
      description: t("members.jan2"),
    },
    {
      name: "Lubos",
      color: "bg-orange-500",
      description: t("members.lubos"),
    },
    {
      name: "Vaclav",
      color: "bg-red-500",
      description: t("members.vaclav"),
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-16 bg-white dark:bg-gray-900"
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

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} className="space-y-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="flex gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.2 }}
                  className={`w-4 h-4 ${member.color} rounded-full mt-2 flex-shrink-0`}
                ></motion.div>
                <div className="flex items-center gap-2">
                  <strong className="text-2xl text-gray-900 dark:text-white">
                    {member.name}
                  </strong>
                  -
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInRight}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ borderColor: "rgb(107 114 128)" }}
            className="bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-400 dark:border-gray-600 p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-xl text-gray-900 dark:text-white">
                {t("howWeWork.title")}
              </span>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              <p>{t("howWeWork.description1")}</p>
              <p>{t("howWeWork.description2")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
