import { useGoogleLogin } from "@react-oauth/google"
import { useState } from "react"
import toast from "react-hot-toast"
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

  return {
    loadingLogin,
    loadingRegister,
    loadingLogout,
    loginGoogle,
    registerGoogle,
  }
}

export default useAuth
