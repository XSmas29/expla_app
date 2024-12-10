import { useGoogleLogin } from "@react-oauth/google"
import { useState } from "react"

const useAuth = () => {
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [loadingRegister, setLoadingRegister] = useState(false)
  const [loadingLogout, setLoadingLogout] = useState(false)

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: () => {
      setLoadingLogin(false)
      console.log("success")
    },
    onError: () => {
      console.error("error")
      setLoadingLogin(false)
    },
    ux_mode: "redirect",
    redirect_uri: "http://localhost:8080",
    state: "login",
  })

  const loginGoogle = () => {
    setLoadingLogin(true)
    googleLogin()
  }

  return {
    loadingLogin,
    loadingRegister,
    loadingLogout,
    loginGoogle,
  }
}

export default useAuth
