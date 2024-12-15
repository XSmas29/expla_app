import { Link } from "@nextui-org/react"

import { title } from "./primitives"

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/XSmas29"
      >
        <span className="text-default-600">Made by</span>
        <span className={title({ color: "green", size: "xs" })}>
          Surya Bumantara
        </span>
      </Link>
    </footer>
  )
}
