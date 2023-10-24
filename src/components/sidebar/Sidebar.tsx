import '@/styles/components/sidebar.scss'
import { Icon } from '@/components/Icon/Icon'
import { Networks } from '@/types/types'
import { Navigation } from '../navigation/Navigation'

export function Sidebar() {
  const hardSkill = [
    'Engineer ',
    'Front End Develope ',
    'React ',
    'Web Analytics ',
    'React Native ',
  ]
  const itemsNavigation = [
    { name: 'About', href: 'About' },
    { name: 'Experience', href: 'Experience' },
    { name: 'Projects', href: 'Projects' },
  ]
  const networks: Networks[] = [
    { name: 'gitHub', href: 'https://github.com/Davidalbort' },
    {
      name: 'linkedIn',
      href: 'https://www.linkedin.com/in/roger-david-alba-ortega-714077181/',
    },
  ]
  return (
    <aside className="sidebar">
      <section>
        <h1>Roger David Alba Ortega</h1>
        <h2 className="sidebar__subtitle">Front End Engineer </h2>
        <ul className="sidebar__list">
          {hardSkill.map((skill) => (
            <li key={skill} className="sidebar__skill">
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>
      <Navigation sectionsToTrack={itemsNavigation} />
      <ul className="sidebar__list">
        {networks.map((network) => {
          const nameIcon = network.name
          return (
            <li key={network.name} className="sidebar__item">
              <a
                className="sidebar__link"
                href={network.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={nameIcon} />
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
