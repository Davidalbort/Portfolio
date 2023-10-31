import '@/styles/components/SectionProject.scss'
import Image from 'next/image'
import Portfolio from '@/../public/portfolio.jpg'
export function SectionProject() {
  const projects = [
    {
      name: 'Portfolio',
      image: Portfolio,
      //give me a description of this project please

      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit ratione repudiandae rerum illo officiis nesciunt cum velit quidem inventore voluptates quisquam voluptatem ipsam, quos quo cumque. Veniam, vel iusto.',
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
