import { IconProps } from '@/types/types'
import listIcons from '../icons/listIcons'

export function Icon({ name, ...props }: IconProps) {
  if (listIcons[name]) {
    const IconComponent = listIcons[name]
    return <IconComponent {...props} />
  } else {
    return <div>Icon not found</div>
  }
}
