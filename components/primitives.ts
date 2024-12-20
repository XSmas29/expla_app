import { tv } from "tailwind-variants"

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#34d189] to-[#31b59b]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xs: "text-md",
      sm: "text-3xl lg:text-4xl",
      md: "text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
    fontWeight: {
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
})

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
})

export const btn = tv({
  base: "rounded-md",
  variants: {
    color: {
      primary: "from-[#34d189] to-[#31b59b]",
    },
    gradient: {
      toTop: "bg-gradient-to-t",
      toTopRight: "bg-gradient-to-tr",
      toRight: "bg-gradient-to-r",
      toBottomRight: "bg-gradient-to-br",
      toBottom: "bg-gradient-to-b",
      toBottomLeft: "bg-gradient-to-bl",
      toLeft: "bg-gradient-to-l",
      toTopLeft: "bg-gradient-to-tl",
    },
    fontSize: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-lg",
    },
    fontWeight: {
      bold: "font-bold",
    },
  },
  defaultVariants: {
    color: "primary",
    fontSize: "md",
    gradient: "toTopRight",
  },
})
