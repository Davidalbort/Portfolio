import '@/styles/components/navigation.scss'
import { NavigationProps } from '@/types/types'
import React, { useState, useEffect } from 'react'

export function Navigation({ sectionsToTrack }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          console.log(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% or more of the element is visible
    })

    sectionsToTrack.forEach((sectionId) => {
      const section = document.getElementById(sectionId.name)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionsToTrack])

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {sectionsToTrack.map((sectionId) => (
          <li key={sectionId.name}>
            <a href={`#${sectionId.href}`} className="navigation__link">
              <span
                className={
                  sectionId.name === activeSection
                    ? 'navigation__line navigation__line--active'
                    : 'navigation__line'
                }
              ></span>
              <span
                className={
                  sectionId.name === activeSection
                    ? 'navigation__name navigation__name--active'
                    : 'navigation__name'
                }
              >
                {sectionId.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {/* Add more navigation links as needed */}
    </nav>
  )
}
