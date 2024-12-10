import { Icon } from "@iconify/react"

export const MyIcon = ({ icon, color }: { icon: string; color: string }) => {
  return <Icon className={`dark:${color} light:${color}`} icon={icon} />
}
