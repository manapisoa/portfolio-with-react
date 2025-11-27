"use client"

import { motion } from "framer-motion"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="about" className="w-full py-24 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">À propos de moi</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <motion.p
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            Je suis développeur fullstack passionné par la création d'expériences web modernes et performantes. Avec une
            expertise en React, FastAPI et technologies 3D, je transforme des idées complexes en solutions élégantes et
            scalables.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {[
              {
                title: "Autonomie",
                desc: "Je prends les projets de A à Z : design, code, déploiement, maintenance",
              },
              {
                title: "Rapidité",
                desc: "MVP beau, fonctionnel et scalable en quelques jours/semaines",
              },
              {
                title: "Pixel-Perfect",
                desc: "Interfaces modernes 100% fidèles au design avec sens produit",
              },
              {
                title: "Innovation",
                desc: "Intégration de technologies avancées comme IA, 3D et animations",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10"
          >
            <h3 className="text-lg font-semibold">Loisirs & Passions</h3>
            <p className="text-muted-foreground">
              🏀 Basketball • 🎮 Side-projects tech & IA • 🎸 Guitare & musique • 🏍️ Randonnées à moto
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
