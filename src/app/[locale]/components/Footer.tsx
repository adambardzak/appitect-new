"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="px-6 py-10 border-t border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} {t("copyright")}
        </div>
        <div className="flex items-center gap-6">
          <span>{t("location")}</span>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Github className="h-4 w-4 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-4 w-4 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
