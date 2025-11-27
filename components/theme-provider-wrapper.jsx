"use client"

import { ThemeProvider } from "@/context/theme-context"

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
