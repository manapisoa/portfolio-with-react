"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manampymj@gmail.com",
      href: "mailto:manampymj@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+261 33 86 66 307",
      href: "tel:+261338666307",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="w-full py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travaillons ensemble</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous avez un projet en tête ? Je serais ravi de discuter avec vous de vos idées et de la façon dont je
              peux vous aider à les concrétiser.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <div className="flex gap-4 pt-8">
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                rel="noreferrer"
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Nom</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none h-32"
                placeholder="Votre message..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              {submitted ? "✓ Message envoyé !" : "Envoyer le message"}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© 2025 MANA - Développeur Fullstack. Tous droits réservés.</p>
        </motion.div>
      </div>
    </section>
  )
}
