import "./globals.css"
import { Geist } from "next/font/google"
import { Providers } from "@/components/providers"

const geist = Geist({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
