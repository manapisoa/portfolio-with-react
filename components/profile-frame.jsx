"use client"
import {Mail ,Download} from "lucide-react"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function ProfileFrame() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const rotateX = (y - rect.height / 2) * 0.05
      const rotateY = (x - rect.width / 2) * -0.05

      containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative w-80 h-96 transition-transform duration-100">
      {/* Outer frame */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(var(--primary), 0.2)",
            "0 0 40px rgba(var(--primary), 0.4)",
            "0 0 20px rgba(var(--primary), 0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 rounded-2xl border-4 border-primary bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm overflow-hidden"
      >
        {/* Inner content */}
        <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-background to-card p-8">
          {/* Placeholder for profile image */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-primary/30 via-accent/30 to-muted/30 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <p className="text-sm font-semibold text-foreground">MANAPISOA</p>
              <p className="text-xs text-foreground flex items-center gap-2"><span></span>  <Mail size={12}/>manampymj@gmail.com</p>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'CV_MANAPISOA.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-xs text-foreground flex items-center justify-center gap-2 hover:text-primary transition-colors cursor-pointer w-full"
              >
                <Download size={12}/>Télécharger CV
              </button>

            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative corners */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border-2 border-primary "
          style={{
            top: i < 2 ? -4 : "auto",
            bottom: i >= 2 ? -4 : "auto",
            left: i % 2 === 0 ? -4 : "auto",
            right: i % 2 === 1 ? -4 : "auto",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}
