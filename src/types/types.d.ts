import listIcons from '@/components/icons/listIcons'

export interface IconProps {
  name: keyof typeof listIcons
}

export interface listIconsKeys {
  gitHub: () => JSX.Element
  linkedIn: () => JSX.Element
}

export interface Networks extends IconProps {
  href: string
}

export interface NavigationProps {
  sectionsToTrack: {
    name: string
    href: string
  }[]
}
