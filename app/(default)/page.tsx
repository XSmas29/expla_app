"use client"

import { Button, Code, Link, Snippet } from "@nextui-org/react"
import { button } from "@nextui-org/theme"
import { motion } from "motion/react"
import { Metadata } from "next"

import { GithubIcon } from "@/components/icons"
import MyIcon from "@/components/myIcon"
import { btn, subtitle, title } from "@/components/primitives"
import { siteConfig } from "@/config/site"

export default function Page() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex h-full flex-col items-center justify-center gap-4"
      exit={{ opacity: 0, y: 50 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="max-w-xl text-center justify-center">
          <div className={title({ color: "green" })}>Expla&nbsp;</div>
          <div className="text-4xl font-semibold tracking-tight mt-6 mb-10">
            Your everyday expense planner
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            as={Link}
            className={btn({ fontSize: "lg", className: "rounded-2xl" })}
            href="/register"
            size="lg"
            startContent={
              <MyIcon color="primary-900" icon="solar:login-2-bold-duotone" />
            }
            variant="shadow"
          >
            Get Started
          </Button>
        </div>
      </section>
    </motion.div>
  )
}
