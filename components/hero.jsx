"use client"

import { motion } from "framer-motion"
import ProfileFrame from "./profile-frame"
import { ArrowRight } from "lucide-react"
import dynamic from 'next/dynamic'

// Chargement dynamique du composant 3D
const Background3DWrapper = dynamic(
  () => import('@/components/3d/Background3DWrapper'),
  { ssr: false }
)

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-4">
      {/* Background 3D */}
      <Background3DWrapper />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/80 -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-lg"
            >
              Bienvenue 👋
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mt-4 leading-tight"
            >
              Développeur
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fullstack
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Je crée des expériences web modernes et performantes. Spécialisé en React, FastAPI et animations 3D. Basé à
            Antananarivo, passionné par la technologie et l'IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a   
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Discutons ensemble
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Mes projets
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 pt-8 border-t border-border"
          >
            <div>
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Années d'expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Projets complétés</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Frame with 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-96 md:h-full md:min-h-screen flex items-center justify-center"
        >
          <ProfileFrame />
        </motion.div>
      </div>
    </section>
  )
}
