"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Three.js", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["FastAPI", "Django", "Django REST", "PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "Outils & DevOps",
      skills: ["Docker", "Linux", "Git", "Postman", "VS Code", "CI/CD"],
    },
    {
      category: "Autres",
      skills: ["IA & ML", "Figma", "Adobe XD", "API REST", "WebSockets", "JWT Auth"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="skills" className="w-full py-24 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="p-6 rounded-lg border border-border hover:border-primary hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium cursor-pointer hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg border border-border bg-gradient-to-r from-primary/10 to-accent/10"
        >
          <h3 className="font-semibold mb-4">Langues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-medium">Français</p>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary h-full rounded-full w-full" />
              </div>
              <p className="text-sm text-muted-foreground">Courant</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Anglais</p>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary h-full rounded-full w-3/4" />
              </div>
              <p className="text-sm text-muted-foreground">Intermédiaire</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
