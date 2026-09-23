import CpdStatistics from '@/components/home/CpdStatistics'
import CpdTrainingBanner from '@/components/home/CpdTrainingBanner'
import Hero from '@/components/home/Hero'
import ImportantNotice from '@/components/home/ImportantNotice'
import KeyServices from '@/components/home/KeyServices'
import LatestNews from '@/components/home/LatestNews'
import RegistrarAnnouncement from '@/components/home/RegistrarAnnouncement'
import StudentsNews from '@/components/home/StudentsNews'

const Home = () => {
  return (
    <>
      <Hero />
      <ImportantNotice />
      <KeyServices />
      <LatestNews />
      <RegistrarAnnouncement />
      <CpdTrainingBanner />
      <CpdStatistics />
      <StudentsNews />
    </>
  )
}

export default Home
