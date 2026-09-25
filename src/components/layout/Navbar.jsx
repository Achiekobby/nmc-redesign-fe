import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  HelpCircle,
  Mail,
  Menu,
  Monitor,
  Phone,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  User,
  Users,
  X,
} from 'lucide-react'
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
    columns: [
      {
        title: 'Council Members',
        description: 'Meet the Council and its governing members',
        icon: Users,
        iconClass: 'bg-[#E11D2E] text-white',
        links: [
          { label: 'Board Members', to: '/who-we-are/board' },
          { label: 'Committees', to: '/who-we-are/committees' },
          { label: 'Council Meetings', to: '/who-we-are/meetings' },
        ],
      },
      {
        title: 'Leadership',
        description: 'Our executive leadership and management',
        icon: User,
        iconClass: 'bg-[#1C45E6] text-white',
        links: [
          { label: 'Registrar / CEO', to: '/who-we-are/registrar' },
          { label: 'Management', to: '/who-we-are/management' },
          { label: 'Departments', to: '/who-we-are/departments' },
        ],
      },
      {
        title: 'About the Council',
        description: 'Learn about our mandate, history and purpose',
        icon: BookOpen,
        iconClass: 'bg-[#15803D] text-white',
        links: [
          { label: 'History', to: '/who-we-are/history' },
          { label: 'Mission & Vision', to: '/who-we-are/mission' },
          { label: 'Mandate and Functions', to: '/who-we-are/mandate' },
          { label: 'Strategic Plan', to: '/who-we-are/strategic-plan' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        title: 'General Services',
        description: 'Core regulatory services for practitioners and institutions',
        icon: Settings,
        iconClass: 'bg-[#1C45E6] text-white',
        tone: 'text-[#1236C2]',
        links: [
          { label: 'Indexing', to: '/services/indexing', icon: ClipboardList },
          { label: 'Registration', to: '/services/registration', icon: User },
          { label: 'Verification', to: '/services/verification', icon: ShieldCheck },
          { label: 'Examination & Licensing', to: '/services/examination', icon: FileText },
          { label: 'Accreditation', to: '/services/accreditation', icon: Building2 },
        ],
      },
      {
        title: 'Online Services',
        description: 'Access our online platforms and digital services',
        icon: Monitor,
        iconClass: 'bg-[#E11D2E] text-white',
        tone: 'text-[#C01025]',
        links: [
          { label: 'Online Indexing', to: '/services/online-indexing', icon: Monitor },
          { label: 'Examination Registration', to: '/services/examination-registration', icon: FileText },
          { label: 'License Renewal', to: '/services/license-renewal', icon: RefreshCw },
          { label: 'Results Checker', to: '/services/results', icon: BarChart3 },
          { label: 'Induction Registration', to: '/services/induction-registration', icon: User },
          { label: 'Licensing Examination', to: '/services/licensing-examination', icon: ShieldCheck },
          { label: 'Find Accredited Institutions', to: '/services/accredited-institutions', icon: Building2 },
        ],
      },
      {
        title: 'Apply Online',
        description: 'Submit applications for examiner roles and CPD',
        icon: ClipboardList,
        iconClass: 'bg-[#15803D] text-white',
        tone: 'text-[#166534]',
        links: [
          { label: 'Become an Examiner', to: '/services/become-an-examiner', icon: User },
          { label: 'CPD Online', to: '/services/cpd', icon: CheckCircle2 },
        ],
      },
      {
        title: 'E-Learning',
        description: 'Manuals, tutorials and practice guidance',
        icon: BookOpen,
        iconClass: 'bg-[#D97706] text-white',
        tone: 'text-[#B45309]',
        links: [
          { label: 'Procedure Manual', to: '/e-learning/procedure-manual', icon: FileText },
          { label: 'Exam Registration Tutorial', to: '/e-learning/exam-registration-tutorial', icon: Monitor },
          { label: 'Procedure Manual (Post-Basic Programs)', to: '/e-learning/procedure-manual-post-basic', icon: BookOpen },
          { label: 'Scope of Practice', to: '/e-learning/scope-of-practice', icon: ClipboardList },
        ],
      },
    ],
  },
  { label: 'News', to: '/news' },
  {
    label: 'FAQs',
    links: [
      { label: 'Students', to: '/faqs/students', icon: GraduationCap, iconClass: 'text-[#1236C2]' },
      { label: 'Practitioners', to: '/faqs/practitioners', icon: User, iconClass: 'text-[#C01025]' },
      {
        label: 'Online Examination',
        to: '/faqs/online-examination',
        icon: FileText,
        iconClass: 'text-[#166534]',
      },
      {
        label: 'Examination Timetable',
        icon: Calendar,
        iconClass: 'text-[#B45309]',
      },
      {
        label: 'Indexing Guide',
        to: '/faqs/indexing-guide',
        icon: HelpCircle,
        iconClass: 'text-[#6D28D9]',
      },
    ],
  },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
]

function hasMenu(item) {
  return Boolean(item.columns || item.links)
}

function menuTargets(item) {
  if (item.columns) return item.columns.flatMap((column) => column.links)
  return item.links ?? []
}

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
  const reduceMotion = useReducedMotion()

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
    document.body.style.overflow = menuOpen || openMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, openMenu])

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

      <AnimatePresence>
        {(openMenu || menuOpen) && (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#07142B]/55"
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      <div ref={utilityClipRef} className="relative z-50 overflow-hidden bg-nmc-blue text-white">
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

      <div className="relative z-50 border-b border-neutral-200/80 bg-white shadow-[0_10px_30px_-24px_rgba(23,23,23,0.7)]">
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
              hasMenu(item) ? (
                <DesktopMenu
                  key={item.label}
                  item={item}
                  open={openMenu === item.label}
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

      <AnimatePresence>
        {menuOpen && (
        <motion.div
          id={menuId}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-neutral-200 bg-white shadow-lg xl:hidden"
        >
          <nav aria-label="Primary" className="mx-auto flex max-w-[1440px] flex-col px-4 py-3">
            {primaryLinks.map((item) =>
              hasMenu(item) ? (
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
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function DesktopMenu({ item, open, onClose, onToggle, pathname, onNavigate }) {
  const active = menuTargets(item).some((link) => link.to && pathname.startsWith(link.to))
  const menuId = useId()
  const wide = Boolean(item.columns)
  const reduce = useReducedMotion()

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose()
      }}
    >
      <button
        type="button"
        className={`${linkClass(active)} ${open ? 'bg-[#EEF3FF] text-nmc-ink' : ''}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {(active || open) && <ActiveBar />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute top-full z-30 pt-4 ${
              wide
                ? 'left-1/2 w-[min(1180px,calc(100vw-3rem))] -translate-x-1/2'
                : 'left-1/2 w-[340px] -translate-x-1/2'
            }`}
          >
            <span
              className="absolute top-2.5 left-1/2 z-10 size-3.5 -translate-x-1/2 rotate-45 border-t border-l border-[#E6EAF0] bg-white"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#E6EAF0] bg-white p-7 shadow-[0_28px_60px_-24px_rgba(14,35,71,0.38)]">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nmc-red via-[#1c45e6] to-[#16A34A]"
                aria-hidden="true"
              />
              {item.columns ? (
                <div className={`grid gap-x-8 gap-y-8 ${item.columns.length > 3 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                  {item.columns.map((column, index) => (
                    <MenuColumn
                      key={column.title}
                      column={column}
                      index={index}
                      pathname={pathname}
                      onNavigate={onNavigate}
                      reduce={reduce}
                    />
                  ))}
                </div>
              ) : (
                <ul className="-mx-2">
                  {item.links.map((link, index) => (
                    <FaqLink
                      key={link.to}
                      link={link}
                      index={index}
                      pathname={pathname}
                      onNavigate={onNavigate}
                      reduce={reduce}
                    />
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MenuColumn({ column, index = 0, pathname, onNavigate, reduce = true }) {
  const Icon = column.icon
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: reduce ? 0 : 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      className={index > 0 ? 'border-[#EEF1F6] xl:border-l xl:pl-8' : ''}
    >
      <div className="flex items-start gap-3.5">
        <span className={`grid size-12 shrink-0 place-items-center rounded-2xl shadow-[0_8px_16px_-10px_rgba(14,35,71,0.7)] ${column.iconClass}`}>
          <Icon className="size-6" strokeWidth={2.4} aria-hidden="true" />
        </span>
        <div>
          <p className="text-base font-bold text-[#0E2347]">{column.title}</p>
          <p className="mt-1 text-[13px] leading-5 text-[#667085]">{column.description}</p>
        </div>
      </div>
      <ul className="mt-5 space-y-1">
        {column.links.map((link) => {
          const LinkIcon = link.icon
          const current = pathname === link.to
          return (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={onNavigate}
                className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm transition-colors duration-200 ${
                  current
                    ? 'bg-[#EEF3FF] font-semibold text-[#1F4BDB]'
                    : 'text-[#344054] hover:bg-[#F4F7FB] hover:text-[#1F4BDB]'
                }`}
              >
                {LinkIcon && (
                  <LinkIcon className={`size-[18px] shrink-0 ${column.tone ?? ''}`} strokeWidth={2.4} aria-hidden="true" />
                )}
                <span className="flex-1 leading-snug">{link.label}</span>
                <ChevronRight
                  className={`size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                    current ? 'text-[#1F4BDB]' : 'text-[#98A2B3] group-hover:text-[#1F4BDB]'
                  }`}
                />
              </NavLink>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

function FaqLink({ link, index = 0, pathname, onNavigate, reduce = true }) {
  const Icon = link.icon
  const current = Boolean(link.to) && pathname === link.to
  const className = `flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${
    link.to
      ? `group transition-colors duration-200 ${
          current
            ? 'bg-[#EEF3FF] font-semibold text-[#1F4BDB]'
            : 'text-[#344054] hover:bg-[#EEF3FF] hover:text-[#1F4BDB]'
        }`
      : 'cursor-default text-[#98A2B3]'
  }`
  const inner = (
    <>
      <span className="grid size-8 place-items-center rounded-lg bg-white shadow-[0_1px_2px_rgba(14,35,71,0.06)]">
        <Icon className={`size-[18px] ${link.iconClass}`} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex-1">{link.label}</span>
      {link.to && (
        <ChevronRight
          className={`size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 ${
            current ? 'text-[#1F4BDB]' : 'text-[#98A2B3] group-hover:text-[#1F4BDB]'
          }`}
        />
      )}
    </>
  )

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, delay: reduce ? 0 : 0.04 * index, ease: [0.22, 1, 0.36, 1] }}
    >
      {link.to ? (
        <NavLink to={link.to} onClick={onNavigate} className={className}>
          {inner}
        </NavLink>
      ) : (
        <div className={className} aria-disabled="true">
          {inner}
        </div>
      )}
    </motion.li>
  )
}

function MobileGroup({ item, open, onToggle, pathname, onNavigate }) {
  const menuId = useId()
  const active = menuTargets(item).some((link) => link.to && pathname.startsWith(link.to))

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
          className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={menuId}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pb-3">
            {item.columns ? (
              item.columns.map((column) => (
                <MenuColumn
                  key={column.title}
                  column={column}
                  pathname={pathname}
                  onNavigate={onNavigate}
                />
              ))
            ) : (
              <ul>
                {item.links.map((link) => (
                  <FaqLink key={link.to} link={link} pathname={pathname} onNavigate={onNavigate} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
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
