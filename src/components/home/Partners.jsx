import { useReducedMotion } from 'framer-motion'
import {
  partner_adb,
  partner_cinop,
  partner_five,
  partner_gcb,
  partner_knust,
  partner_six,
} from '@/utils/images'

const partners = [
  { src: partner_adb, name: 'Agricultural Development Bank' },
  { src: partner_cinop, name: 'CINOP' },
  { src: partner_gcb, name: 'GCB' },
  { src: partner_knust, name: 'KNUST' },
  { src: partner_five, name: 'Partner' },
  { src: partner_six, name: 'Partner' },
]

function Logo({ partner }) {
  return (
    <div className="grid h-24 w-44 shrink-0 place-items-center rounded-2xl border border-[#E6EAF0] bg-white px-4 shadow-[0_12px_30px_-24px_rgba(14,35,71,0.45)]">
      <img src={partner.src} alt={partner.name} className="max-h-16 w-auto max-w-full object-contain" />
    </div>
  )
}

function Partners() {
  const reduceMotion = useReducedMotion()
  const row = reduceMotion ? partners : [...partners, ...partners]

  return (
    <section className="relative overflow-hidden bg-white py-14" aria-labelledby="partners-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#D5E0F0_1.2px,transparent_1.2px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        <h2
          id="partners-heading"
          className="text-2xl font-extrabold tracking-[-0.03em] text-[#0E2347] sm:text-3xl"
        >
          Partners
        </h2>
      </div>

      <div className="relative mt-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`flex w-max gap-4 px-4 ${reduceMotion ? 'mx-auto flex-wrap justify-center' : 'hover:[animation-play-state:paused]'}`}
          style={
            reduceMotion
              ? undefined
              : { animation: 'partners-marquee 32s linear infinite' }
          }
        >
          {row.map((partner, index) => (
            <Logo key={`${partner.src}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
