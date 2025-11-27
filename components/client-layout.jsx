"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-pulse">Chargement du thème...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
