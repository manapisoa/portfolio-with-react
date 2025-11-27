"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  // Vérifier le montage côté client
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Fonction pour basculer le thème
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    } else {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }
  
  // Ne rien afficher tant que le montage n'est pas terminé
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </header>
    )
  }

  const navItems = [
    { name: "À propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          MANA
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-t border-border px-4 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
