import Register from "./register"

import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Register | Expla - Expense Planner",
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
      <Register />
    </>
  )
}
