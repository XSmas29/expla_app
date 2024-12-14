"use client"

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Input,
} from "@nextui-org/react"
import { GoogleLogin } from "@react-oauth/google"
import { motion } from "motion/react"
import NextImage from "next/image"

import { GoogleIcon } from "@/components/icons"
import { btn, title } from "@/components/primitives"
import useAuth from "@/hooks/useAuth"

export default function Login() {
  const { loginGoogle, loadingLogin } = useAuth()

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <section className="flex flex-col items-center justify-center gap-4 pb-8  md:py-10">
        <div className="mb-2">
          <div className={title({ size: "sm" })}>Login Success</div>
        </div>
      </section>
    </motion.div>
  )
}
