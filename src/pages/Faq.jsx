import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Flame, Search, X } from 'lucide-react'
import { faqNav, faqPages } from '@/content/faqs'

const ease = [0.22, 1, 0.36, 1]

function textOf(blocks = []) {
  return blocks
    .map((block) => {
      if (block.type === 'ul' || block.type === 'ol') return block.items.join(' ')
      if (block.type === 'table') return block.rows.flat().join(' ')
      return block.text ?? ''
    })
    .join(' ')
}

function matches(question, blocks, query) {
  if (!query) return true
  const haystack = `${question} ${textOf(blocks)}`.toLowerCase()
  return haystack.includes(query.toLowerCase())
}

function Faq() {
  const { slug } = useParams()
  const page = faqPages[slug]
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(0)
  const [query, setQuery] = useState('')
  const [navOffset, setNavOffset] = useState(112)

  useEffect(() => {
    const nav = document.querySelector('header')
    if (!nav) return

    const update = () => {
      setNavOffset(Math.round(nav.getBoundingClientRect().height))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(nav)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    setQuery('')
    setOpen(0)
  }, [slug])

  const meta = faqNav.find((entry) => entry.slug === slug)
  const otherPages = faqNav.filter((entry) => entry.slug && entry.slug !== slug)

  const filteredItems = useMemo(() => {
    if (!page?.items) return null
    return page.items.filter((item) => matches(item.question, item.blocks, query))
  }, [page, query])

  const filteredGroups = useMemo(() => {
    if (!page?.groups) return null
    return page.groups
      .map((group) => ({
        ...group,
        steps: group.steps.filter((step) => matches(step.title, step.blocks, query)),
      }))
      .filter((group) => group.steps.length > 0)
  }, [page, query])

  const popularItems = page?.items?.filter((item) => item.popular) ?? []
  const searching = query.trim().length > 0
  const noResults =
    searching &&
    (filteredItems?.length ?? 0) === 0 &&
    (filteredGroups?.reduce((total, group) => total + group.steps.length, 0) ?? 0) === 0

  if (!page || !meta) return <Navigate to="/" replace />

  const Icon = meta.icon

  return (
    <section className="relative bg-[#F6F8FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D5E0F0 1.1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0E2347] via-[#12308A] to-nmc-blue">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1.2px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQs</span>
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${meta.bg}`}>
                <Icon className={`size-7 ${meta.tone}`} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{meta.label}</h1>
                <p className="mt-1 max-w-lg text-sm text-white/70">{meta.blurb}</p>
              </div>
            </div>

            <div className="relative w-full max-w-md">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-white/60"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search ${meta.label.toLowerCase()} questions`}
                className="w-full rounded-full border border-white/20 bg-white/10 py-3 pr-10 pl-11 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur-sm transition-colors focus:border-white/50 focus:bg-white/15"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-white/70 hover:text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-[280px_1fr] lg:items-start lg:gap-10 lg:px-8 lg:py-14"
        style={{ '--faq-nav': `${navOffset}px` }}
      >
        {/* Sidebar */}
        <aside className="mb-8 lg:sticky lg:top-[calc(var(--faq-nav)+1rem)] lg:mb-0 lg:self-start">
          <p className="px-1 text-xs font-semibold tracking-wide text-[#98A2B3] uppercase">Browse FAQs</p>
          <nav className="mt-3 space-y-1.5">
            {faqNav.map((entry) => {
              const EntryIcon = entry.icon
              const active = entry.slug === slug
              const content = (
                <>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${entry.bg}`}>
                    <EntryIcon className={`size-4 ${entry.tone}`} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block text-sm ${active ? 'font-semibold text-[#0E2347]' : 'font-medium text-[#344054]'}`}
                    >
                      {entry.label}
                    </span>
                    {entry.disabled && <span className="block text-xs text-[#98A2B3]">Download only</span>}
                  </span>
                </>
              )
              if (entry.disabled) {
                return (
                  <div
                    key={entry.label}
                    className="flex items-center gap-3 rounded-xl border border-dashed border-[#E6EAF0] px-3 py-2.5 opacity-70"
                  >
                    {content}
                  </div>
                )
              }
              return (
                <Link
                  key={entry.slug}
                  to={`/faqs/${entry.slug}`}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-200 ${
                    active
                      ? 'border-nmc-blue bg-[#EEF3FF]'
                      : 'border-transparent hover:border-[#E6EAF0] hover:bg-white'
                  }`}
                >
                  {content}
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 rounded-2xl border border-[#E6EAF0] bg-white p-4">
            <p className="text-sm font-semibold text-[#0E2347]">Can&apos;t find your answer?</p>
            <p className="mt-1 text-xs leading-5 text-[#667085]">
              Send the Registrar&apos;s Office a message and the team will get back to you.
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-nmc-blue hover:underline"
            >
              Contact us
              <ChevronDown className="size-3.5 -rotate-90" aria-hidden="true" />
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          {!searching && popularItems.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-nmc-red" aria-hidden="true" />
                <h2 className="text-sm font-semibold tracking-wide text-[#0E2347] uppercase">
                  Popular questions
                </h2>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {popularItems.map((item) => {
                  const index = page.items.indexOf(item)
                  return (
                    <button
                      key={item.question}
                      type="button"
                      onClick={() => {
                        setOpen(index)
                        document
                          .getElementById(`faq-item-${index}`)
                          ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
                      }}
                      className="rounded-xl border border-[#E6EAF0] bg-white p-4 text-left transition-colors duration-200 hover:border-nmc-blue hover:bg-[#F8FAFF]"
                    >
                      <p className="text-sm font-medium text-[#0E2347]">{item.question}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {searching && (
            <p className="mb-4 text-sm text-[#667085]">
              {noResults ? 'No matches' : 'Showing matches'} for <span className="font-semibold text-[#0E2347]">&quot;{query}&quot;</span>
            </p>
          )}

          {noResults && (
            <div className="rounded-2xl border border-dashed border-[#E6EAF0] bg-white p-8 text-center">
              <p className="text-sm font-medium text-[#0E2347]">Nothing here matches that search.</p>
              <p className="mt-1 text-sm text-[#667085]">Try another category:</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {otherPages.map((entry) => (
                  <Link
                    key={entry.slug}
                    to={`/faqs/${entry.slug}`}
                    className="rounded-full border border-[#E6EAF0] px-4 py-1.5 text-sm font-medium text-[#344054] hover:border-nmc-blue hover:text-nmc-blue"
                  >
                    {entry.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredItems && filteredItems.length > 0 && (
            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {filteredItems.map((item) => {
                  const index = page.items.indexOf(item)
                  return (
                    <motion.div
                      key={item.question}
                      id={`faq-item-${index}`}
                      layout={!reduce}
                      initial={false}
                      exit={reduce ? undefined : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease }}
                    >
                      <Accordion
                        item={item}
                        query={query}
                        open={open === index}
                        reduce={reduce}
                        onToggle={() => setOpen((current) => (current === index ? -1 : index))}
                      />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          )}

          {filteredGroups?.map((group) => (
            <div key={group.title} className="mt-10 first:mt-0">
              <h2 className="text-2xl font-bold text-[#0E2347]">{group.title}</h2>
              <ol className="mt-5 space-y-4">
                {group.steps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-[#E6EAF0] bg-white p-5">
                    <p className="text-sm font-semibold text-nmc-blue">Step {index + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-[#0E2347]">{step.title}</h3>
                    <div className="mt-3">
                      <Blocks blocks={step.blocks} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}

          {!searching && page.extra && (
            <div className="mt-10 rounded-2xl border border-[#E6EAF0] bg-white p-6">
              {page.extra.notes?.map((note) => (
                <p key={note} className="mb-3 text-sm leading-6 text-[#344054]">
                  {note}
                </p>
              ))}
              <h2 className="text-xl font-bold text-[#0E2347]">{page.extra.title}</h2>
              <ul className="mt-4 divide-y divide-[#EEF1F6]">
                {page.extra.files.map(([title, detail]) => (
                  <li key={title} className="py-3">
                    <p className="text-sm font-semibold text-[#0E2347]">{title}</p>
                    <p className="text-sm text-[#475467]">{detail}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-base font-bold text-[#0E2347]">{page.extra.noteTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475467]">{page.extra.note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Accordion({ item, query, open, onToggle, reduce }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E6EAF0] bg-white">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-[#0E2347]">{highlight(item.question, query)}</span>
        <ChevronDown
          className={`mt-1 size-4 shrink-0 text-[#667085] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#EEF1F6] px-5 py-4">
              <Blocks blocks={item.blocks} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function highlight(text, query) {
  if (!query) return text
  const lower = text.toLowerCase()
  const target = query.toLowerCase()
  const index = lower.indexOf(target)
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded bg-[#FFF1B8] px-0.5 text-[#0E2347]">{text.slice(index, index + target.length)}</mark>
      {text.slice(index + target.length)}
    </>
  )
}

function Blocks({ blocks }) {
  return (
    <div className="space-y-3 text-sm leading-6 text-[#344054]">
      {blocks.map((block, index) => {
        if (block.type === 'ul' || block.type === 'ol') {
          const Tag = block.type
          return (
            <Tag
              key={index}
              className="list-inside space-y-1 pl-1"
              style={{ listStyleType: block.type === 'ol' ? 'decimal' : 'disc' }}
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tag>
          )
        }
        if (block.type === 'table') {
          return (
            <div key={index} className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#EEF3FF] text-[#0E2347]">
                    {block.headers.map((header) => (
                      <th key={header} className="border border-[#E6EAF0] px-3 py-2 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell} className="border border-[#E6EAF0] px-3 py-2 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        return <p key={index}>{block.text}</p>
      })}
    </div>
  )
}

export default Faq
