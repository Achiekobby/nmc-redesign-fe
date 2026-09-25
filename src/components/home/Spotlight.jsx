import { Link } from 'react-router'

const videos = [
  {
    title: 'What Tutors have to say',
    src: 'https://www.youtube.com/embed/DYFRYoBES-g',
    label: 'Testimonies by Tutors',
  },
  {
    title: 'What Students have to say',
    src: 'https://www.youtube.com/embed/o3eWq8aBU1c',
    label: 'Testimonies by Candidates',
  },
]

function Spotlight() {
  return (
    <section
      className="relative overflow-hidden bg-white py-14"
      aria-labelledby="spotlight-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#D5E0F0_1.2px,transparent_1.2px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        <h2
          id="spotlight-heading"
          className="text-2xl font-extrabold tracking-[-0.03em] text-[#0E2347] sm:text-3xl"
        >
          Spotlight
        </h2>

        <div className="mt-6 flex flex-col gap-6 border-b border-[#E6EAF0] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-[#0E2347]">Online Examination Overview</h3>
            <p className="mt-2 text-[15px] leading-7 text-[#5C6770]">
              The Nursing and Midwifery Council of Ghana held the first online examination in
              September 2018 for the Registered Mental Nursing Program. This was the first program
              to be rolled onto the Online Licensing Examination Platform of the Council.
            </p>
          </div>
          <Link
            to="/services/examination"
            className="inline-flex w-fit shrink-0 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1A3FBA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            Click for more info
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <figure key={video.src}>
              <div className="overflow-hidden rounded-2xl bg-black shadow-[0_18px_40px_-28px_rgba(14,35,71,0.45)]">
                <iframe
                  className="aspect-video w-full"
                  src={video.src}
                  title={video.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3 text-[16px] font-bold text-[#0E2347]">
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Spotlight
