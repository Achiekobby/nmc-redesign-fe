import { Link } from 'react-router'
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowRight } from 'lucide-react'
import { HiAcademicCap, HiShieldCheck, HiUser, HiUserGroup } from 'react-icons/hi2'

const services = [
  {
    title: 'Professional Regulation',
    description:
      'Licensing, registration and regulation of nurses, midwives and nurse assistants.',
    to: '/services/registration',
    icon: HiUser,
    iconClass: 'bg-[#E8F0FF] text-[#2F6FED]',
    linkClass: 'text-[#1F4BDB]',
  },
  {
    title: 'Education & Training Standards',
    description: 'Accreditation of training institutions and approval of programmes.',
    to: '/services/accreditation',
    icon: HiAcademicCap,
    iconClass: 'bg-[#FDECEC] text-[#E31B23]',
    linkClass: 'text-[#E31B23]',
  },
  {
    title: 'Continuous Professional Development (CPD)',
    description: 'Supporting lifelong learning for professional growth and quality care.',
    to: '/services/cpd',
    icon: HiUserGroup,
    iconClass: 'bg-[#E7F8EF] text-[#16A34A]',
    linkClass: 'text-[#16A34A]',
  },
  {
    title: 'Public Protection',
    description: 'Ensuring safe, competent and ethical nursing and midwifery practice in Ghana.',
    to: '/services/verification',
    icon: HiShieldCheck,
    iconClass: 'bg-[#FFF6DE] text-[#E0A100]',
    linkClass: 'text-[#D97706]',
  },
]

function KeyServices() {
  return (
    <section className="bg-[#F4F7FB] pb-12" aria-labelledby="key-services-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <Reveal className="flex items-start gap-3">
          <span className="mt-1 h-6 w-[3px] shrink-0 rounded-full bg-[#E31B23]" aria-hidden="true" />
          <div>
            <h2 id="key-services-heading" className="text-lg font-bold text-[#0E2347] sm:text-xl">
              Our Key Services
            </h2>
            <p className="mt-1.5 max-w-3xl text-[14px] leading-6 font-normal text-[#5C6770]">
              We work to ensure high standards in nursing and midwifery education, training and
              practice for quality healthcare delivery in Ghana.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
            <RevealItem key={service.title} className="h-full">
              <article className="flex h-full gap-4 rounded-2xl border border-[#EEF1F6] bg-white px-5 py-5 shadow-[0_16px_40px_-32px_rgba(14,35,71,0.45)]">
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-full ${service.iconClass}`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-[15px] leading-6 font-bold text-[#0E2347]">{service.title}</h3>
                  <p className="mt-1 flex-1 text-[13px] leading-5 font-normal text-[#5C6770]">
                    {service.description}
                  </p>
                  <Link
                    to={service.to}
                    className={`mt-3 inline-flex items-center gap-1 text-[13px] font-semibold hover:underline ${service.linkClass}`}
                  >
                    Learn More
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

export default KeyServices
