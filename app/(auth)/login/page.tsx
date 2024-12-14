import Login from "./login"

import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Login | Expla - Expense Planner",
  description: siteConfig.description,
  openGraph: {
    title: "Expla - Expense Planner",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    site_name: "Expla - Expense Planner",
  },
}

export default function Page() {
  return (
    <>
      <Login />
    </>
  )
}
