import CpdStatistics from '@/components/home/CpdStatistics'
import Events from '@/components/home/Events'
import GeneralNews from '@/components/home/GeneralNews'
import CpdTrainingBanner from '@/components/home/CpdTrainingBanner'
import Hero from '@/components/home/Hero'
import ImportantNotice from '@/components/home/ImportantNotice'
import KeyServices from '@/components/home/KeyServices'
import LatestNews from '@/components/home/LatestNews'
import Partners from '@/components/home/Partners'
import RegistrarAnnouncement from '@/components/home/RegistrarAnnouncement'
import Spotlight from '@/components/home/Spotlight'
import StudentsNews from '@/components/home/StudentsNews'

const Home = () => {
  return (
    <>
      <Hero />
      <ImportantNotice />
      <KeyServices />
      <LatestNews />
      <RegistrarAnnouncement />
      <GeneralNews />
      <CpdTrainingBanner />
      <StudentsNews />
      <CpdStatistics />
      <Events />
      <Spotlight />
      <Partners />
    </>
  )
}

export default Home
