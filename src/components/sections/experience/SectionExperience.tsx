import '@/styles/components/sectionExperience.scss'
export function SectionExperience() {
  const experiences = [
    {
      company: 'Clubtal',
      role: 'Web Analytics Developer',
      date: 'Dec 2022 - Aug 2023',
      duties: [
        'Integrating website’s code with website’s datalayer',
        'Creating web events based on stakeholders requirements ',
        'Validating data integrity within window.datalayer (google datalayer) or window.utag.data (tealium datalayer)',
        'Sending data from React components as web events',
      ],
      skills: [
        'Google Tag Manager',
        'Tealium',
        'English',
        'Communication',
        'React.js',
      ],
      link: 'https://www.linkedin.com/in/roger-david-alba-ortega-714077181',
    },
    {
      company: 'Freelance',
      role: 'Freelance Software Engineer',
      date: 'May 2020 - Dec 2022',
      duties: [
        'Complete construction of an academy website (Html, Css/Scss, Javascript, Seo, React router, typescript)',
        'Complete construction of an e-commerce website (Next js, typescript,TDD,moduleCss, redux) ',
        'Building a mobile app for agro harvesting processes (react native, ignite, tailwind, MobX-State-Tree, react navigation, typescript)',
        'Working in agile software development environments (SCRUM)',
      ],
      skills: [
        'Fast learner',
        'Easily adaptable',
        'Problem solving',
        'Teamwork',
        'Javascript',
        'Next.js',
        'Tailwind',
        'React Native',
        'Typescript',
        'HTML',
        'CSS/SCSS',
        'SCRUM',
      ],
      link: 'https://www.linkedin.com/in/roger-david-alba-ortega-714077181',
    },
  ]
  return (
    <section id="Experience" className="experience">
      <h2>Experience</h2>
      <ul className="list">
        {experiences.map((experience) => (
          <li key={experience.company} className="list__item">
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="list__link"
              aria-label="Link to LinkedIn profile of the company"
            >
              <span>{experience.date}</span>
              <div>
                <header>
                  <h3>{experience.company}</h3>
                  <h4>{experience.role}</h4>
                </header>
                <ul className="list__duties">
                  {experience.duties.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
                <ul className="list__skills">
                  {experience.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
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
