"use client"
import { Spinner } from "@nextui-org/react"
import { motion } from "motion/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-toastify"

import { btn, title } from "@/components/primitives"
import useAuth from "@/hooks/useAuth"
import { abortController } from "@/lib/axios"

export default function Page() {
  const { loadingLogin, setJWTbyGoogle } = useAuth()
  const searchParams = useSearchParams()
  const code = searchParams.get("code")
  const router = useRouter()
  useEffect(() => {
    if (code) {
      setJWTbyGoogle(code)
        .then(() => {
          abortController.abort()
          router.push("/dashboard")
        })
        .catch(() => {
          abortController.abort()
          router.push("/login")
        })
    } else {
      abortController.abort()
      toast.error("Authorization code not found")
      router.push("/login")
    }
  }, [code])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="h-full flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <section className="gap-4 pb-8  md:py-1">
        <div className="mb-2">
          {loadingLogin && <Spinner className="self-center" size="lg" />}
          {/* <div className={title({ size: "sm" })}>Login Success</div> */}
        </div>
      </section>
    </motion.div>
  )
}
