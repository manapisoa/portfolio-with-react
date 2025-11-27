"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      role: "Développeur Fullstack",
      company: "Predict Food - DS Groupe",
      period: "2025",
      location: "Antananarivo",
      highlights: [
        "Développement complet de plateforme de commande pour restaurant",
        "Frontend React + TailwindCSS avec animations fluides",
        "Backend FastAPI pour gestion menus, commandes, utilisateurs",
        "Intégration Stripe + SMS OVH pour notifications",
        "Déploiement Docker avec administration SSH",
      ],
    },
    {
      role: "Développeur Fullstack",
      company: "Green World",
      period: "2024",
      location: "Antananarivo",
      highlights: [
        "Refonte site institutionnel (vitrine + blog + espace adhérents)",
        "Stack : React + Tailwind CSS + Django",
        "Optimisation SEO et performances (Core Web Vitals > 90)",
      ],
    },
    {
      role: "Développeur Fullstack",
      company: "Projet Universitaire",
      period: "2024",
      location: "ASJA",
      highlights: [
        "Système complet de gestion universitaire (étudiants, cours, notes)",
        "Frontend React + TailwindCSS (interface moderne)",
        "Backend Django REST Framework + PostgreSQL",
        "Intégration ChatBot IA avec API Google Gemini",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section id="experience" className="w-full py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expérience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative p-6 rounded-xl border border-border hover:border-primary hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-foreground mt-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{exp.period}</div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
