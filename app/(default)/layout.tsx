import "@/styles/globals.css"

import { Navbar } from "@/components/navbar"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Expla - Expense Planner",
  description: siteConfig.description,
  openGraph: {
    title: "Expla - Expense Planner",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    site_name: "Expla - Expense Planner",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
        {children}
      </main>
    </div>
  )
}
