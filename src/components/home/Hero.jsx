import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowRight, ChevronRight } from 'lucide-react'
import {
  hero_one,
  hero_three,
  hero_two,
  icon_accredited_institutions,
  icon_cpd_online,
  icon_exam_registration,
  icon_examination_licensing,
  icon_indexing,
  icon_license_renewal,
  icon_registration,
  icon_results_checker,
  icon_verification,
} from '@/utils/images'

const slides = [
  { src: hero_one, alt: 'Nurse holding a clipboard outside a council facility' },
  { src: hero_two, alt: 'Nurse standing in front of a council building' },
  { src: hero_three, alt: 'Nurse outside the Nursing and Midwifery Council building' },
]

const services = [
  {
    title: 'Indexing',
    description: 'Index your certificates and qualifications',
    to: '/services/indexing',
    icon: icon_indexing,
    iconClass: 'bg-[#E8F0FF]',
  },
  {
    title: 'Registration',
    description: 'Apply for professional registration',
    to: '/services/registration',
    icon: icon_registration,
    iconClass: 'bg-[#FDECEC]',
  },
  {
    title: 'Verification',
    description: 'Verify a nurse or midwife (license, certificate, etc.)',
    to: '/services/verification',
    icon: icon_verification,
    iconClass: 'bg-[#E7F8EF]',
  },
  {
    title: 'Examination & Licensing',
    description: 'Information on licensure examinations',
    to: '/services/examination',
    icon: icon_examination_licensing,
    iconClass: 'bg-[#E8F0FF]',
  },
  {
    title: 'Results Checker',
    description: 'Check your examination results',
    to: '/services/results',
    icon: icon_results_checker,
    iconClass: 'bg-[#FFF6DE]',
  },
  {
    title: 'License Renewal',
    description: 'Renew your PIN/AIN on our online platform',
    to: '/services/license-renewal',
    icon: icon_license_renewal,
    iconClass: 'bg-[#FDECEC]',
  },
  {
    title: 'Exam Registration',
    description: 'Register for upcoming examinations',
    to: '/services/exam-registration',
    icon: icon_exam_registration,
    iconClass: 'bg-[#E8F0FF]',
  },
  {
    title: 'CPD Online',
    description: 'Access CPD programmes and resources',
    to: '/services/cpd',
    icon: icon_cpd_online,
    iconClass: 'bg-[#E7F8EF]',
  },
  {
    title: 'Find Accredited Institutions',
    description: 'View accredited training institutions',
    to: '/services/accreditation',
    icon: icon_accredited_institutions,
    iconClass: 'bg-[#FFF6DE]',
  },
]

const fade = { duration: 1.15, ease: [0.4, 0, 0.2, 1] }

function Hero() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  return (
    <section className="bg-[#F4F7FB]" aria-label="Introduction">
      <div className="relative overflow-hidden bg-white">
        <div className="relative h-[280px] sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[68%]">
          <AnimatePresence initial={false}>
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].alt}
              width={1672}
              height={941}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : fade}
              className="absolute inset-0 h-full w-full object-cover object-[78%_center] [mask-image:linear-gradient(to_right,transparent_0%,black_42%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_42%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_18%,black_46%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_18%,black_46%)]"
              style={{ zIndex: index }}
            />
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden" />
        </div>

        <motion.div
          className="relative mx-auto flex min-h-[460px] max-w-8xl flex-col justify-center px-4 pt-8 pb-28 sm:px-6 lg:min-h-[560px] lg:py-20 lg:pr-[42%] lg:pb-32"
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          <motion.p
            className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.16em] text-[#E31B23] uppercase"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <span className="h-4 w-[3px] rounded-full bg-[#E31B23]" aria-hidden="true" />
            A safer, healthier Ghana
          </motion.p>
          <motion.h1
            className="mt-4 max-w-[15ch] text-[2.15rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#0E2347] sm:text-[2.75rem] lg:text-[3.15rem]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
          >
            Regulating Nursing and Midwifery Practice in Ghana
          </motion.h1>
          <motion.p
            className="mt-4 max-w-[34rem] text-[15px] leading-7 font-normal text-[#5C6770]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
          >
            We set and maintain standards for nursing and midwifery education, training and
            practice to ensure quality, safe and competent care for all.
          </motion.p>
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <HeroButton to="/services/license-renewal" tone="red">
              Renew License
            </HeroButton>
            <HeroButton to="/services/results" tone="blue">
              Check Results
            </HeroButton>
            <HeroButton to="/services/accreditation" tone="outline">
              Find Accredited Institutions
            </HeroButton>
          </motion.div>
        </motion.div>

      </div>

      <div className="relative z-20 mx-auto -mt-16 max-w-8xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white px-4 py-5 shadow-[0_24px_60px_-36px_rgba(14,35,71,0.45)] ring-1 ring-slate-200/80 sm:px-6 sm:py-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-3 text-[17px] font-bold text-[#0E2347] sm:text-lg">
              <span className="h-6 w-[3px] shrink-0 rounded-full bg-[#E31B23]" aria-hidden="true" />
              Quick Access to Our Services
            </h2>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-[#1F4BDB] hover:underline"
            >
              View All Services
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </RevealGroup>
          <RevealGroup className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {services.slice(4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <RevealItem className="h-full">
      <Link
        to={service.to}
        className="flex h-full items-center gap-3 rounded-xl border border-[#EEF1F6] bg-white px-3 py-3.5 transition-colors hover:border-[#D9E2F2]"
      >
        <span
          className={`relative size-10 shrink-0 overflow-hidden rounded-lg ${service.iconClass}`}
        >
          <img
            src={service.icon}
            alt=""
            width={96}
            height={96}
            className="absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13px] leading-5 font-bold whitespace-nowrap text-[#0E2347]">
            {service.title}
          </span>
          <span className="mt-0.5 block text-[12px] leading-4 font-normal text-[#667085]">
            {service.description}
          </span>
        </span>
        <ChevronRight className="size-4 shrink-0 text-[#98A2B3]" aria-hidden="true" />
      </Link>
    </RevealItem>
  )
}

function HeroButton({ to, tone, children }) {
  const tones = {
    red: 'bg-[#E31B23] text-white hover:bg-[#C8161E]',
    blue: 'bg-[#1F4BDB] text-white hover:bg-[#1A3FBA]',
    outline: 'border border-[#2F6BFF] bg-white text-[#1F4BDB] hover:bg-[#F3F7FF]',
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${tones[tone]}`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  )
}

export default Hero
