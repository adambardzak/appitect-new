"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({
  darkMode,
  toggleDarkMode,
}: NavigationProps) {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const currentLocaleInPath = segments[0];

    let newPathname;
    if (["en", "cs", "de"].includes(currentLocaleInPath)) {
      newPathname = "/" + [locale, ...segments.slice(1)].join("/");
    } else {
      newPathname = `/${locale}${pathname}`;
    }
    router.push(newPathname);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-4 border-b border-dashed border-gray-300 dark:border-gray-600 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-base font-semibold text-gray-900 dark:text-white">
          {t("brand")}
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="hidden md:block hover:bg-yellow-200 dark:hover:bg-yellow-600 px-3 py-2 rounded transition-colors duration-200 text-gray-900 dark:text-gray-100"
          >
            {t("services")}
          </a>
          <a
            href="#contact"
            className="hidden md:block hover:bg-yellow-200 dark:hover:bg-yellow-600 px-3 py-2 rounded transition-colors duration-200 text-gray-900 dark:text-gray-100"
          >
            {t("contact")}
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLanguageChange("en")}
              className="hover:bg-yellow-200 dark:hover:bg-yellow-600 px-2 py-1 rounded transition-colors duration-200 text-gray-900 dark:text-gray-100"
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange("cs")}
              className="hover:bg-yellow-200 dark:hover:bg-yellow-600 px-2 py-1 rounded transition-colors duration-200 text-gray-900 dark:text-gray-100"
            >
              CS
            </button>
            <button
              onClick={() => handleLanguageChange("de")}
              className="hover:bg-yellow-200 dark:hover:bg-yellow-600 px-2 py-1 rounded transition-colors duration-200 text-gray-900 dark:text-gray-100"
            >
              DE
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
