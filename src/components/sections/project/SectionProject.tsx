import '@/styles/components/SectionProject.scss'
import Image from 'next/image'
import Portfolio from '@/../public/portfolio.jpg'
export function SectionProject() {
  const projects = [
    {
      name: 'Portfolio',
      image: Portfolio,
      description:
        'My portfolio website is a testament to my web development expertise, featuring a robust tech stack and best practices for an exceptional user experience. Powered by Next.js, it offers lightning-fast load times and seamless navigation. Styling is organized using SCSS with the BEM methodology, ensuring clean and maintainable code. The website adopts a mobile-first design, guaranteeing a responsive and consistent experience across devices. Engaging animations enhance user interaction and modern aesthetics.',
      technologies: ['HTML', 'SCSS/BEM', 'JavaScript'],
      link: 'https://davidalbort.github.io/portfolio/',
    },
  ]
  return (
    <section id="Projects" className="project">
      <h2>Projects</h2>
      <ul className="list">
        {projects.map((project) => (
          <li key={project.name} className="list__item">
            <a href={project.link} target="__blank" rel="noreferrer">
              <Image
                src={project.image}
                alt={`Image portada of project ${project.name}`}
                width={200}
                priority={false}
              />
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="list__skills">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
