import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import cookie from "cookie"
import { useState } from "react"
import { toast } from "react-toastify"

import api from "@/lib/axios"

const useAuth = () => {
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [loadingRegister, setLoadingRegister] = useState(false)
  const [loadingLogout, setLoadingLogout] = useState(false)

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: () => {
      toast.success("Login success")
      setLoadingLogin(false)
    },
    onError: () => {
      toast.error("Login failed")
      setLoadingLogin(false)
    },
    ux_mode: "redirect",
    redirect_uri: "http://localhost:8080/login-status",
    state: "google",
  })

  const loginGoogle = () => {
    setLoadingLogin(true)
    googleLogin()
  }

  const registerGoogle = () => {
    setLoadingRegister(true)
    googleLogin()
  }

  const setJWTbyGoogle = (code: string) => {
    setLoadingLogin(true)
    return new Promise((resolve, reject) => {
      api
        .post("/auth/login", { code }, { withCredentials: true })
        .then(
          ({
            data,
          }: {
            data: { access_token: string; refresh_token: string }
          }) => {
            // set http-only cookie to store jwt access & refresh token
            cookie.serialize("access_token", data.access_token, {
              httpOnly: true,
            })
            console.log(
              cookie.serialize("refresh_token", data.refresh_token, {
                httpOnly: true,
              })
            )
            console.log(cookie.parse("access_token"))
            toast.success("Login success")
            setLoadingLogin(false)
            resolve(data)
          }
        )
        .catch(err => {
          toast.error("Login failed")
          setLoadingLogin(false)
          reject(err)
        })
    })
  }

  const tes = () => {
    axios
      .get("http://localhost:8080/api/user", {
        headers: {
          Authorization: `Bearer ${cookie.parse("access_token")}`,
        },
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return {
    loadingLogin,
    loadingRegister,
    loadingLogout,
    loginGoogle,
    registerGoogle,
    setJWTbyGoogle,
  }
}

export default useAuth
