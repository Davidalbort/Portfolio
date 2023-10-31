import '@/styles/components/main.scss'
import { ButtonShimmerLight } from '../button_shimmer_light/Button_shimmer_light'
import { SectionAbout } from '../sections/about/SectionAbout'
import { SectionExperience } from '../sections/experience/SectionExperience'
import { SectionProject } from '../sections/project/SectionProject'

export function Main() {
  return (
    <main className="main">
      <SectionAbout />
      <SectionExperience />
      <SectionProject />
      <ButtonShimmerLight
        url="https://drive.google.com/file/d/1n62jkv5Ygq_QwtQdNXH3nJ6paybGfOiv/view"
        name="View full CV"
      />
    </main>
  )
}
