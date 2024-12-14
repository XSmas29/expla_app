import { Icon } from "@iconify/react"

const MyIcon = ({
  icon,
  color,
  size = 16,
}: {
  icon: string
  color?: string
  size?: number
}) => {
  return (
    <Icon
      className={`dark:${color} light:${color}`}
      height={size}
      icon={icon}
      width={size}
    />
  )
}

export default MyIcon
