import { Link } from 'react-router'
import { ArrowRight, Calendar } from 'lucide-react'
import { hero_one, hero_three, hero_two } from '@/utils/images'

const articles = [
  {
    title: 'N&MC Announces Appointment of Registrar',
    excerpt:
      'Government appoints new Registrar for the Nursing and Midwifery Council of Ghana.',
    date: '15 Nov 2023',
    image: hero_one,
    to: '/news/appointment-of-registrar',
  },
  {
    title: 'All PINs/AINs Expire on December 31, 2023',
    excerpt:
      'Nurses, Midwives and Nurse Assistants are reminded to renew their PINs/AINs at the Regional Offices.',
    date: '01 Nov 2023',
    image: hero_two,
    to: '/news/pins-ains-expire',
  },
  {
    title: 'Continuous Professional Development Programmes',
    excerpt:
      'Take part in our accredited CPD programmes to maintain your professional practice.',
    date: '25 Oct 2023',
    image: hero_three,
    to: '/news/cpd-programmes',
  },
  {
    title: 'Examination Results Released',
    excerpt:
      'The results for the August 2023 Licensure Examinations are now available online.',
    date: '12 Oct 2023',
    image: hero_one,
    to: '/news/examination-results',
  },
]

function LatestNews() {
  return (
    <section className="bg-[#F4F7FB] pb-12" aria-labelledby="latest-news-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-6 w-[3px] shrink-0 rounded-full bg-[#E31B23]" aria-hidden="true" />
            <h2 id="latest-news-heading" className="text-lg font-bold text-[#0E2347] sm:text-xl">
              Latest News &amp; Announcements
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#1F4BDB] hover:underline"
          >
            View All News
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <li key={article.to}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EEF1F6] bg-white shadow-[0_16px_40px_-32px_rgba(14,35,71,0.45)]">
                <img
                  src={article.image}
                  alt=""
                  width={1672}
                  height={941}
                  className="h-40 w-full object-cover object-[70%_center]"
                />
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="inline-flex items-center gap-1.5 text-[12px] font-normal text-[#667085]">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {article.date}
                  </p>
                  <h3 className="mt-2 text-[15px] leading-6 font-bold text-[#0E2347]">{article.title}</h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-5 font-normal text-[#5C6770]">
                    {article.excerpt}
                  </p>
                  <Link
                    to={article.to}
                    className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#E31B23] hover:underline"
                  >
                    Read More
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LatestNews
