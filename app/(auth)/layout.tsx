import { siteConfig } from "@/config/site"
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
      {children}
    </main>
  )
}
