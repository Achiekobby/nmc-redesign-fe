import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { event_four, event_one, event_three, event_two } from '@/utils/images'

const events = [
  { src: event_one, title: 'VIRTUAL CPD TRAINING SCHEDULE', featured: true },
  { src: event_two, title: '7TH PREECLAMPSIA SCIENTIFIC SYMPOSIUM' },
  { src: event_three, title: 'ADVANCE CARDIAC LIFE SUPPORT (ACLS) CPD TRAINING' },
  { src: event_four, title: 'Need Foreign Verification?' },
]

function Events() {
  const reduceMotion = useReducedMotion()
  const railRef = useRef(null)
  const [open, setOpen] = useState(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const rail = railRef.current
    if (!rail) return
    setAtStart(rail.scrollLeft <= 2)
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2)
  }

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [])

  const moveRail = (direction) => {
    const rail = railRef.current
    if (!rail) return
    const distance = Math.max(rail.clientWidth * 0.8, 280)
    rail.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      className="relative overflow-hidden bg-white py-14 text-[#0E2347]"
      aria-labelledby="events-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#D5E0F0_1.2px,transparent_1.2px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-[#FDE8EE]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-16 size-80 rounded-full bg-[#E7F0FF]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 id="events-heading" className="text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
            Events
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveRail(-1)}
              disabled={atStart}
              aria-label="Previous posters"
              className="grid size-10 place-items-center rounded-lg border border-[#E6EAF0] bg-white text-[#0E2347] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4BDB]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => moveRail(1)}
              disabled={atEnd}
              aria-label="Next posters"
              className="grid size-10 place-items-center rounded-lg border border-[#E6EAF0] bg-white text-[#0E2347] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4BDB]"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          onScroll={updateEdges}
          className="mt-8 flex items-end gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {events.map((event) => (
            <button
              key={event.title}
              type="button"
              onClick={() => setOpen(event)}
              className={`shrink-0 rounded-2xl border border-[#E6EAF0] bg-white p-2 shadow-[0_16px_40px_-28px_rgba(14,35,71,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4BDB] ${
                event.featured ? 'h-[560px]' : 'h-[460px]'
              }`}
            >
              <img
                src={event.src}
                alt={event.title}
                className="h-full w-auto max-w-none rounded-xl object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 grid size-10 place-items-center rounded-lg bg-white text-[#0E2347]"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <motion.img
              src={open.src}
              alt={open.title}
              className="max-h-[92vh] w-auto max-w-full rounded-xl bg-white"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Events
