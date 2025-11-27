"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="relative w-full bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
