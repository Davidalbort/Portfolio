import '@/styles/components/sectionAbout.scss'
import { ImageHover3d } from '@/components/image_hover_3d/ImageHover3d'
import David from '@/../public/B-3x3.jpg'
export function SectionAbout() {
  const information = [
    {
      paragraph: `With 5 years of experience, including 2 years as an electronic engineer
        and 3 years as a frontend software engineer, I possess a solid
        foundation in React, JavaScript, and CSS. I've made substantial
        contributions to project efficiency by creating 
        <strong>reusable components</strong>, resulting in a 
        <strong>10% time savings across diverse projects</strong>.`,
    },
    {
      paragraph: `My expertise includes developing 
        <strong>e-commerce and education websites</strong> 
        with Next.js and crafting mobile apps using React Native. I've also
        adeptly worked with tag management tools like <strong>Tealium</strong>
        and excel in web analytics data structures, ensuring data integrity and
        accuracy. My unwavering commitment to accessibility standards and
        writing testable code underscores 
        <strong>my dedication to delivering high-quality web solutions</strong>.`,
    },
    {
      paragraph: `My dedication to maintaining clean, efficient code, and my unwavering
        commitment to staying updated with the latest industry trends make me an
        asset that can elevate any frontend development team.`,
    },
  ]
  return (
    <section id="About" className="about">
      <h2>About</h2>
      <figure>
        <ImageHover3d
          src={David}
          width={250}
          alt="Image presentation of David Alba Ortega"
        />
      </figure>
      {information.map((info, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: info.paragraph }}></p>
      ))}
    </section>
  )
}
