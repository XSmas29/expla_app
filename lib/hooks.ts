import type { AppDispatch, AppStore, RootState } from "./store"

import {
  useDispatch as useStateDispatch,
  useSelector as useStateSelector,
  useStore as useStateStore,
} from "react-redux"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = useStateDispatch.withTypes<AppDispatch>()
export const useSelector = useStateSelector.withTypes<RootState>()
export const useStore = useStateStore.withTypes<AppStore>()
