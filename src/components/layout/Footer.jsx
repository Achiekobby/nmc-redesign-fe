import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { coat_of_arms, logo_white } from '@/utils/images'

const phones = [
  { label: '+233 20 086 2772', href: 'tel:+233200862772' },
  { label: '+233 50 107 9037', href: 'tel:+233501079037' },
]

const quickLinks = [
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'News & Updates', to: '/news' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Sitemap', to: '/sitemap' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: FaFacebookF,
    className: 'bg-[#1877F2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: FaInstagram,
    className:
      'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: FaXTwitter,
    className: 'bg-black',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: FaYoutube,
    className: 'bg-[#FF0000]',
  },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

function Footer() {
  return (
    <footer className="bg-[#07142B] text-white">
      <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:py-9">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1.05fr)_minmax(0,0.95fr)_auto] lg:items-center lg:gap-x-10">
          <Link to="/" className={`flex w-fit items-center rounded-sm ${focusRing}`}>
            <img
              src={coat_of_arms}
              alt=""
              width={1254}
              height={1254}
              className="h-20 w-auto sm:h-28 lg:h-32"
            />
            <img
              src={logo_white}
              alt="Nursing and Midwifery Council of Ghana, Ministry of Health"
              width={2172}
              height={724}
              className="-ml-[6%] h-20 w-auto sm:h-28 lg:h-32"
            />
          </Link>

          <div>
            <h2 className="text-[15px] font-bold">Contact Us</h2>
            <ul className="mt-3.5 space-y-2.5 text-[13px] leading-snug text-white/90">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <p>
                  Nursing and Midwifery Council of Ghana
                  <br />
                  P. O. Box GP 9918, Accra - Ghana
                </p>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <p>
                  {phones.map((phone, index) => (
                    <span key={phone.href}>
                      {index > 0 && <span className="text-white/70"> | </span>}
                      <a href={phone.href} className={`hover:underline ${focusRing}`}>
                        {phone.label}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <a href="mailto:info@nmc.gov.gh" className={`hover:underline ${focusRing}`}>
                  info@nmc.gov.gh
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-[15px] font-bold">Quick Links</h2>
            <ul className="mt-3.5 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-white/90">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={`hover:underline ${focusRing}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[15px] font-bold">Follow Us</h2>
            <ul className="mt-3.5 flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className={`grid size-9 place-items-center rounded-full text-white transition-transform hover:scale-105 ${link.className} ${focusRing}`}
                    >
                      <Icon className="size-[15px]" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-8xl flex-col gap-3 px-4 py-3.5 text-[12.5px] text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2023 Nursing and Midwifery Council of Ghana. All Rights Reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {legalLinks.map((link, index) => (
              <li key={link.to} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <span className="text-white/40" aria-hidden="true">
                    |
                  </span>
                )}
                <Link to={link.to} className={`hover:text-white hover:underline ${focusRing}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
