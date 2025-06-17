"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Team from "./components/Team"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const hasInitialized = useRef(false)

  useEffect(() => {
    // Only reset to system theme on the very first load
    if (!hasInitialized.current) {
      hasInitialized.current = true

      // Check if user has manually set a theme in this session
      const sessionTheme = sessionStorage.getItem("theme")

      if (sessionTheme) {
        // Use the session theme (user has manually toggled)
        const isDark = sessionTheme === "dark"
        setDarkMode(isDark)
        if (isDark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        // Use system theme for first visit
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setDarkMode(prefersDark)
        if (prefersDark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      sessionStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      sessionStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono text-sm transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Services />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
