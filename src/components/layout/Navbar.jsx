import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import { ArrowRight, ChevronDown, Mail, Menu, Phone, Search, X } from 'lucide-react'
import { coat_of_arms, logo } from '@/utils/images'

const phones = [
  { label: '+233 20 086 2772', href: 'tel:+233200862772' },
  { label: '+233 50 107 9037', href: 'tel:+233501079037' },
]

const utilityLinks = [
  { label: 'News & Updates', to: '/news' },
  { label: 'Careers', to: '/careers' },
  { label: 'Tenders', to: '/tenders' },
  { label: 'Staff Mail', to: '/staff-mail' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' },
]

const primaryLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Who We Are',
    children: [
      { label: 'About the Council', to: '/who-we-are' },
      { label: 'Council Members', to: '/who-we-are/council' },
      { label: 'Management', to: '/who-we-are/management' },
      { label: 'Departments', to: '/who-we-are/departments' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Indexing', to: '/services/indexing' },
      { label: 'Registration', to: '/services/registration' },
      { label: 'License Renewal', to: '/services/license-renewal' },
      { label: 'Verification', to: '/services/verification' },
      { label: 'Examination & Licensing', to: '/services/examination' },
      { label: 'Accreditation', to: '/services/accreditation' },
    ],
  },
  { label: 'News', to: '/news' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const menuId = useId()
  const searchId = useId()
  const headerRef = useRef(null)
  const utilityClipRef = useRef(null)
  const utilityRef = useRef(null)
  const menuButtonRef = useRef(null)
  const searchInputRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const closeAll = () => {
    setMenuOpen(false)
    setOpenMenu(null)
    setSearchOpen(false)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeAll()
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeAll()
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const clip = utilityClipRef.current
    const utility = utilityRef.current
    if (!clip || !utility) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      const height = utility.offsetHeight
      const progress = motionQuery.matches
        ? window.scrollY > 8
          ? 1
          : 0
        : Math.min(Math.max(window.scrollY / Math.max(height, 1), 0), 1)

      clip.style.height = `${height * (1 - progress)}px`
      clip.style.opacity = String(1 - progress)
      utility.inert = progress > 0.98
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    motionQuery.addEventListener('change', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      motionQuery.removeEventListener('change', onScroll)
    }
  }, [])

  const submitSearch = (event) => {
    event.preventDefault()
    const nextQuery = query.trim()
    if (!nextQuery) return
    navigate(`/search?q=${encodeURIComponent(nextQuery)}`)
    closeAll()
    setQuery('')
  }

  const homeActive = location.pathname === '/' || location.pathname === '/home'

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-nmc-ink"
      >
        Skip to main content
      </a>

      <div ref={utilityClipRef} className="overflow-hidden bg-nmc-blue text-white">
        <div ref={utilityRef}>
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-2.5 text-[13px] tracking-wide xl:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Phone className="size-3.5 shrink-0" aria-hidden="true" />
            {phones.map((phone, index) => (
              <span key={phone.href} className="inline-flex items-center gap-3">
                {index > 0 && (
                  <span className="text-white/50" aria-hidden="true">
                    |
                  </span>
                )}
                <a href={phone.href} className={`hover:underline ${focusRing}`}>
                  {phone.label}
                </a>
              </span>
            ))}
            <span className="hidden text-white/50 sm:inline" aria-hidden="true">
              |
            </span>
            <a
              href="mailto:info@nmc.gov.gh"
              className={`inline-flex items-center gap-1.5 hover:underline ${focusRing}`}
            >
              <Mail className="size-3.5" aria-hidden="true" />
              info@nmc.gov.gh
            </a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label="Council resources" className="flex items-center gap-3">
              {utilityLinks.map((link, index) => (
                <span key={link.to} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-white/50" aria-hidden="true">
                      |
                    </span>
                  )}
                  <Link to={link.to} className={`hover:underline ${focusRing}`}>
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
            <ul className="flex items-center gap-0.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className={`grid size-9 place-items-center rounded-full transition-colors hover:bg-white/15 ${focusRing}`}
                  >
                    <SocialIcon name={link.icon} className="size-[22px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="border-b border-neutral-200/80 bg-white shadow-[0_10px_30px_-24px_rgba(23,23,23,0.7)]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-2.5 xl:gap-8 xl:px-8">
          <Link to="/" className={`flex shrink-0 items-center rounded-sm ${focusRing}`}>
            <img
              src={coat_of_arms}
              alt=""
              width={1254}
              height={1254}
              className="h-12 w-auto sm:h-14 xl:h-16"
            />
            <img
              src={logo}
              alt="Nursing and Midwifery Council of Ghana, Ministry of Health"
              width={2172}
              height={724}
              className="-ml-[6%] h-12 w-auto sm:h-14 xl:h-16"
            />
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 xl:flex">
            {primaryLinks.map((item) =>
              item.children ? (
                <DesktopMenu
                  key={item.label}
                  item={item}
                  open={openMenu === item.label}
                  onOpen={() => setOpenMenu(item.label)}
                  onClose={() => setOpenMenu(null)}
                  onToggle={() =>
                    setOpenMenu((current) => (current === item.label ? null : item.label))
                  }
                  pathname={location.pathname}
                  onNavigate={closeAll}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeAll}
                  className={({ isActive }) =>
                    linkClass(item.to === '/' ? homeActive : isActive)
                  }
                  {...(item.to === '/' && location.pathname === '/home'
                    ? { 'aria-current': 'page' }
                    : {})}
                >
                  {({ isActive }) => {
                    const active = item.to === '/' ? homeActive : isActive
                    return (
                      <>
                        {item.label}
                        {active && <ActiveBar />}
                      </>
                    )
                  }}
                </NavLink>
              ),
            )}
          </nav>

          <div className="relative ml-auto flex items-center gap-2 xl:ml-2">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-nmc-ink hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nmc-blue"
              aria-expanded={searchOpen}
              aria-controls={searchId}
              onClick={() => {
                setSearchOpen((open) => !open)
                setMenuOpen(false)
                setOpenMenu(null)
              }}
            >
              <Search className="size-5" aria-hidden="true" />
              <span className="sr-only">Search the site</span>
            </button>
            {searchOpen && (
              <form
                id={searchId}
                role="search"
                onSubmit={submitSearch}
                className="absolute top-full right-0 z-20 mt-2 flex w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-full border border-neutral-200 bg-white shadow-lg"
              >
                <label htmlFor={`${searchId}-input`} className="sr-only">
                  Search
                </label>
                <input
                  ref={searchInputRef}
                  id={`${searchId}-input`}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search"
                  className="min-w-0 flex-1 px-4 py-2.5 text-sm text-nmc-ink outline-none"
                />
                <button
                  type="submit"
                  className="px-4 text-sm font-semibold text-nmc-blue hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nmc-blue"
                >
                  Search
                </button>
              </form>
            )}

            <Link
              to="/online-services"
              className="hidden items-center gap-2 rounded-lg bg-nmc-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-10px_rgba(225,29,46,0.9)] transition-colors hover:bg-[#c41626] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nmc-red md:inline-flex"
              onClick={closeAll}
            >
              Online Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className="grid size-11 place-items-center rounded-full text-nmc-ink hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nmc-blue xl:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => {
                setMenuOpen((open) => !open)
                setSearchOpen(false)
                setOpenMenu(null)
              }}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-neutral-200 bg-white shadow-lg xl:hidden"
        >
          <nav aria-label="Primary" className="mx-auto flex max-w-[1440px] flex-col px-4 py-3">
            {primaryLinks.map((item) =>
              item.children ? (
                <MobileGroup
                  key={item.label}
                  item={item}
                  open={openMenu === item.label}
                  onToggle={() =>
                    setOpenMenu((current) => (current === item.label ? null : item.label))
                  }
                  pathname={location.pathname}
                  onNavigate={closeAll}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeAll}
                  className={({ isActive }) =>
                    mobileLinkClass(item.to === '/' ? homeActive : isActive)
                  }
                  {...(item.to === '/' && location.pathname === '/home'
                    ? { 'aria-current': 'page' }
                    : {})}
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <Link
              to="/online-services"
              onClick={closeAll}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-nmc-red px-5 text-sm font-semibold text-white md:hidden"
            >
              Online Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </nav>

          <div className="border-t border-neutral-200 px-4 py-4 lg:hidden">
            <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Resources
            </p>
            <ul className="mt-2 flex flex-col">
              {utilityLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeAll}
                    className="flex min-h-11 items-center text-sm font-medium text-nmc-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-2 flex items-center gap-1">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="grid size-11 place-items-center rounded-full bg-nmc-blue text-white"
                  >
                    <SocialIcon name={link.icon} className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function DesktopMenu({ item, open, onOpen, onClose, onToggle, pathname, onNavigate }) {
  const active = item.children.some((child) => pathname.startsWith(child.to))
  const menuId = useId()

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose()
      }}
    >
      <button
        type="button"
        className={linkClass(active)}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown
          className={`size-4 motion-safe:transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {active && <ActiveBar />}
      </button>
      {open && (
        <div id={menuId} className="absolute top-full left-0 z-20 pt-2">
          <ul className="min-w-60 overflow-hidden rounded-xl border border-neutral-200 bg-white py-2 shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)]">
            {item.children.map((child) => (
              <li key={child.to}>
                <NavLink
                  to={child.to}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `mx-2 block rounded-lg px-3 py-2.5 text-sm ${
                      isActive
                        ? 'bg-nmc-blue/8 font-semibold text-nmc-blue'
                        : 'text-nmc-ink hover:bg-neutral-50'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function MobileGroup({ item, open, onToggle, pathname, onNavigate }) {
  const menuId = useId()
  const active = item.children.some((child) => pathname.startsWith(child.to))

  return (
    <div className="border-b border-neutral-100">
      <button
        type="button"
        className={`flex min-h-11 w-full items-center justify-between text-left text-sm font-medium ${
          active ? 'text-nmc-blue' : 'text-nmc-ink'
        }`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown
          className={`size-4 motion-safe:transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul id={menuId} className="pb-2 pl-3">
          {item.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex min-h-11 items-center text-sm ${
                    isActive ? 'font-semibold text-nmc-blue' : 'text-neutral-700'
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function linkClass(active) {
  return `relative inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nmc-blue ${
    active ? 'text-nmc-ink' : 'text-neutral-600 hover:text-nmc-ink'
  }`
}

function mobileLinkClass(active) {
  return `flex min-h-11 items-center border-b border-neutral-100 text-sm font-medium ${
    active ? 'text-nmc-blue' : 'text-nmc-ink'
  }`
}

function ActiveBar() {
  return (
    <span
      className="absolute inset-x-2.5 bottom-0 h-0.5 rounded-full bg-nmc-red"
      aria-hidden="true"
    />
  )
}

function SocialIcon({ name, className = 'size-5' }) {
  const paths = {
    facebook:
      'M15.1 8.5h-2V7.1c0-.5.3-.6.6-.6H15V4.1h-2.1C10.6 4.1 10 5.4 10 7v1.5H8.4V11H10v7h3.1v-7h2.1l.4-2.5z',
    instagram:
      'M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.8-8.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 4.8c1.3 0 1.5 0 2 .1a3.6 3.6 0 0 1 2.4 1.3 3.6 3.6 0 0 1 .8 2.4c0 .5.1.7.1 2s0 1.5-.1 2a3.6 3.6 0 0 1-2.1 2.1c-.5.1-.7.1-2 .1s-1.5 0-2-.1a3.6 3.6 0 0 1-2.1-2.1c-.1-.5-.1-.7-.1-2s0-1.5.1-2A3.6 3.6 0 0 1 10 6.2c.5-.1.7-.1 2-.1m0-1.5c-1.3 0-1.6 0-2.1.1a5.1 5.1 0 0 0-3.4 1.9 5.1 5.1 0 0 0-1.1 3.4c0 .5-.1.8-.1 2.1s0 1.6.1 2.1a5.1 5.1 0 0 0 3 3.4c.5.1.8.1 2.1.1s1.6 0 2.1-.1a5.1 5.1 0 0 0 3.4-3c.1-.5.1-.8.1-2.1s0-1.6-.1-2.1a5.1 5.1 0 0 0-3-3.4c-.5-.1-.8-.1-2.1-.1z',
    x: 'M17.5 4h2.4l-5.3 6 6.2 8h-4.8l-3.8-4.9L8 18H5.5l5.6-6.4L5.2 4h5l3.4 4.5zm-.9 12.6h1.3L7.5 5.3H6.1z',
    youtube:
      'M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.3 3.3z',
  }

  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

export default Navbar
