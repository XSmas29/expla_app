"use client"

import "@/styles/globals.css"
import { Link } from "@nextui-org/react"
import { GoogleOAuthProvider } from "@react-oauth/google"
import clsx from "clsx"
import { Toaster } from "react-hot-toast"

import { Providers } from "./providers"
import StoreProvider from "./storeProvider"

import { fontSans } from "@/config/fonts"
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon/favicon.ico",
//   },
// }

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          href="/static/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link href="/static/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/static/favicon.ico" rel="shortcut icon" />
        <link
          href="/static/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/static/site.webmanifest" rel="manifest" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <StoreProvider>
              <div className="relative flex flex-col h-screen">
                {children}
                <footer className="w-full flex items-center justify-center py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                  >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                  </Link>
                </footer>
              </div>
            </StoreProvider>
          </Providers>
        </GoogleOAuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
