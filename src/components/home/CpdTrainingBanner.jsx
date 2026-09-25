import {
  FiArrowRight,
  FiBookOpen,
  FiClipboard,
  FiFileText,
  FiMonitor,
} from 'react-icons/fi'
import { hero_two } from '@/utils/images'
import Reveal from '@/components/motion/Reveal'

const resources = [
  {
    title: 'CPD Programmes',
    description: 'Accredited courses from approved providers',
    icon: FiBookOpen,
    iconClass: 'bg-amber-500',
  },
  {
    title: 'Revalidation Support',
    description: 'Guidelines, requirements and resources',
    icon: FiClipboard,
    iconClass: 'bg-emerald-600',
  },
  {
    title: 'Learning Resources',
    description: 'Logbooks, templates and CPD materials',
    icon: FiFileText,
    iconClass: 'bg-rose-600',
  },
]

function ResourceItem({ title, description, icon: Icon, iconClass }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`grid size-11 shrink-0 place-items-center rounded-full text-white shadow-sm ${iconClass}`}
        aria-hidden="true"
      >
        <Icon className="size-5" strokeWidth={2.4} />
      </div>
      <div className="min-w-0">
        <h3 className="text-[17px] leading-tight font-extrabold text-[#102d72]">{title}</h3>
        <p className="mt-0.5 text-[14px] leading-snug font-medium text-slate-600">{description}</p>
      </div>
    </div>
  )
}

export default function CpdTrainingBanner({
  imageSrc = hero_two,
  portalHref = '/services/cpd',
}) {
  return (
    <Reveal
      from="fade"
      as="section"
      aria-labelledby="cpd-banner-title"
      className="w-full overflow-hidden border-y border-[#d8e2ef] bg-white shadow-sm"
    >
      <div className="grid min-h-[255px] grid-cols-1 lg:grid-cols-[40%_26%_18%_16%]">
        <div className="relative overflow-hidden bg-[linear-gradient(120deg,#0750b9_0%,#095bc8_58%,#0046a0_100%)] px-7 py-7 text-white sm:px-12 lg:[clip-path:polygon(0_0,93%_0,100%_100%,0_100%)] lg:pr-20">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_20%,white_0,transparent_28%),linear-gradient(145deg,transparent_45%,#0c73df_45%,transparent_71%)]" />

          <div className="relative mx-auto flex h-full max-w-3xl items-center gap-7">
            <div className="hidden shrink-0 sm:block" aria-hidden="true">
              <div className="relative grid size-20 place-items-center rounded-xl border-[5px] border-white">
                <FiMonitor className="size-11" strokeWidth={1.8} />
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0753bb] px-1 text-xl font-black">
                  +
                </span>
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-2 text-[12px] font-bold tracking-wide text-blue-50 uppercase">
                <span className="h-5 w-1 rounded-full bg-white/90" />
                Professional Development
              </div>

              <h2
                id="cpd-banner-title"
                className="max-w-[510px] text-3xl leading-[1.05] font-extrabold tracking-[-0.02em] sm:text-[34px]"
              >
                Online CPD Training
                <br />
                and Revalidation
              </h2>

              <p className="mt-2.5 max-w-[520px] text-[15px] leading-[1.35] font-medium text-blue-50/95">
                Access accredited CPD programmes, resources and guidance
                <br className="hidden xl:block" /> to support your professional development and
                license renewal.
              </p>

              <a
                href={portalHref}
                className="mt-4 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-[15px] font-extrabold text-[#153d83] shadow-[0_4px_10px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Access CPD Portal
                <FiArrowRight className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex items-center bg-white px-8 py-7 lg:-ml-8 lg:px-12 lg:pl-16 lg:[clip-path:polygon(0_0,100%_0,92%_100%,7%_100%)]">
          <div className="w-full space-y-5">
            {resources.map((item) => (
              <ResourceItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="relative z-0 min-h-64 overflow-hidden lg:min-h-0 lg:-mr-16 lg:-ml-6 lg:[clip-path:polygon(14%_0,140%_0,140%_100%,0_100%)]">
          <img
            src={imageSrc}
            alt="Healthcare professional completing continuing professional development study"
            className="absolute inset-0 h-full w-[calc(100%+4rem)] max-w-none object-cover object-[70%_center]"
          />
        </div>

        <div className="relative z-10 flex min-h-64 items-center overflow-hidden bg-[#0756c8] px-7 py-7 text-white lg:min-h-0 lg:-ml-16 lg:pr-6 lg:pl-14 lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_85%_18%,#67b7ff_0,transparent_30%),linear-gradient(120deg,transparent_35%,#0d7ae6_35%,transparent_70%)]" />
          <div className="relative">
            <p className="text-[18px] leading-[1.45] font-extrabold tracking-[0.02em] uppercase">
              Building
              <br />
              Competent
              <br />
              Professionals
              <br />
              For a Healthier
              <br />
              Ghana
            </p>

            <div
              className="mt-4 flex h-2 w-24 overflow-hidden rounded-full shadow-sm"
              aria-label="Ghana colors"
            >
              <span className="flex-1 bg-red-600" />
              <span className="flex-1 bg-yellow-400" />
              <span className="flex-1 bg-green-700" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
