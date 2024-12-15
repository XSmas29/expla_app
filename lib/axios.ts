import axios from "axios"
export const abortController = new AbortController()
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  signal: abortController.signal,
})
