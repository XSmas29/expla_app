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
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="flex flex-col items-center justify-center gap-4 pb-8  md:py-10">
        <div className="mb-2">
          <div className={title({ color: "green", size: "sm" })}>Login</div>
        </div>
        <Card
          fullWidth
          isBlurred
          className="sm:max-w-[420px] border-1 border-gray-200"
        >
          <CardHeader className="justify-center">
            <Image
              alt="NextUI hero Image"
              as={NextImage}
              height={120}
              priority={true}
              src="/static/logo.png"
              width={120}
            />
          </CardHeader>
          <CardBody>
            <div className="mx-2 mt-2">
              <form>
                <div className="flex flex-col gap-4">
                  <Input
                    autoComplete="email"
                    placeholder="Email"
                    size="lg"
                    type="email"
                  />
                  <Input
                    autoComplete="current-password"
                    className="input"
                    placeholder="Password"
                    size="lg"
                    type="password"
                  />
                  <Button
                    className={btn({ fontWeight: "bold" })}
                    variant="shadow"
                  >
                    Login
                  </Button>
                </div>
              </form>
              <div className="my-4 text-center items-center grid grid-cols-12 gap-2">
                <Divider className="col-span-5" />
                <div className="col-span-2">OR</div>
                <Divider className="col-span-5" />
              </div>
              <Button
                className="w-full"
                isLoading={loadingLogin}
                size="md"
                startContent={<GoogleIcon size={24} />}
                variant="bordered"
                onClick={loginGoogle}
              >
                Login With Google
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </motion.div>
  )
}
