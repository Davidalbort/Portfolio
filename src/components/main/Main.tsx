import '@/styles/components/main.scss'
import { ButtonShimmerLight } from '../button_shimmer_light/Button_shimmer_light'
import { SectionAbout } from '../sections/about/SectionAbout'
import { SectionExperience } from '../sections/experience/SectionExperience'

export function Main() {
  return (
    <main className="main">
      <SectionAbout />
      <SectionExperience />
      <section id="Projects">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          impedit ratione repudiandae rerum illo officiis nesciunt cum velit
          quidem inventore voluptates quisquam voluptatem ipsam, quos quo
          cumque. Veniam, vel iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          impedit ratione repudiandae rerum illo officiis nesciunt cum velit
          quidem inventore voluptates quisquam voluptatem ipsam, quos quo
          cumque. Veniam, vel iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          impedit ratione repudiandae rerum illo officiis nesciunt cum velit
          quidem inventore voluptates quisquam voluptatem ipsam, quos quo
          cumque. Veniam, vel iusto.
        </p>
        <ButtonShimmerLight />
      </section>
    </main>
  )
}
