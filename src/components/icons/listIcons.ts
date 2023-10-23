import { Github, Linkedin } from './Icons'

const listIcons = {
  gitHub: Github,
  linkedIn: Linkedin,
}

export default listIcons

export interface listIconsKeys {
  gitHub: () => JSX.Element
  linkedIn: () => JSX.Element
}
