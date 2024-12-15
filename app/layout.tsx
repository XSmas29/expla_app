"use client"

import "@/styles/globals.css"

import { GoogleOAuthProvider } from "@react-oauth/google"
import clsx from "clsx"
import { Suspense } from "react"
import { ToastContainer } from "react-toastify"

import { Providers } from "@/app/providers"
import StoreProvider from "@/app/storeProvider"
import { Footer } from "@/components/footer"
import { fontSans } from "@/config/fonts"
import "react-toastify/dist/ReactToastify.css"
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
      <Suspense>
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ToastContainer
            closeOnClick
            draggable
            pauseOnFocusLoss
            pauseOnHover
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            position="bottom-center"
            rtl={false}
            theme="colored"
          />
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
          >
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <StoreProvider>
                <div className="relative flex flex-col h-screen">
                  {children}

                  <Footer />
                </div>
              </StoreProvider>
            </Providers>
          </GoogleOAuthProvider>
        </body>
      </Suspense>
    </html>
  )
}
