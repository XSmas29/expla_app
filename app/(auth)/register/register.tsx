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
import { motion } from "motion/react"
import NextImage from "next/image"
import Link from "next/link"

import { GoogleIcon } from "@/components/icons"
import { btn, title } from "@/components/primitives"
import useAuth from "@/hooks/useAuth"

export default function Register() {
  const { registerGoogle, loadingRegister } = useAuth()

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <section className="flex flex-col items-center justify-center gap-4 pb-8  md:py-10">
        <div className="mb-2">
          <div className={title({ size: "sm" })}>Register</div>
        </div>
        <Card fullWidth isBlurred className="sm:max-w-[420px] border-1">
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
                    isRequired
                    autoComplete="hidden"
                    placeholder="Email"
                    size="lg"
                    type="email"
                  />

                  <Button
                    className={btn({ fontWeight: "bold" })}
                    variant="shadow"
                  >
                    Register
                  </Button>
                  <p className="text-center">
                    <span>Already have an account? </span>
                    <Link className="text-blue-500" href="/login">
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
              <div className="my-4 text-center items-center grid grid-cols-12 gap-2">
                <Divider className="col-span-5" />
                <div className="col-span-2">OR</div>
                <Divider className="col-span-5" />
              </div>
              <Button
                className="w-full mb-3"
                isLoading={loadingRegister}
                size="lg"
                startContent={<GoogleIcon size={24} />}
                variant="bordered"
                onClick={registerGoogle}
              >
                Register With Google
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </motion.div>
  )
}
