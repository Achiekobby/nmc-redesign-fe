import { Link } from 'react-router'
import { Calendar, Eye, Folder, MessageCircle, Newspaper } from 'lucide-react'
import { hero_one, hero_two, logo_alt } from '@/utils/images'

const articles = [
  {
    title: 'Registrar interacts with students and staff in Yendi and Gushegu',
    excerpt:
      'As part of an operational visit, the Registrar of the Council, Mr. Felix Nyante and some Senior Staff of the Council held separate Staff and Student durbars to discuss issues relating to the regulation of...',
    writtenOn: 'Saturday, 17 April 2021 09:37',
    reads: '19936',
    image: hero_one,
    to: '/news/registrar-yendi-gushegu',
    featured: true,
  },
  {
    title: 'March 2021 online licensing examination begins',
    excerpt:
      'The Nursing and Midwifery Council has begun the March 2021 online licensing examinations for the basic programmes. The Registrar of the Council, Mr. Felix Nyante, accompanied by some senior officials of the Council visited the examination...',
    writtenOn: 'Friday, 12 March 2021 09:05',
    reads: '18604',
    tags: ['onlineexams', 'licenseexams', 'exams'],
    image: hero_two,
    to: '/news/march-2021-licensing-examination',
  },
  {
    title: 'Review of students handbook',
    excerpt:
      "The Nursing and Midwifery Council held a day's workshop to validate the draft student handbook for nursing and midwifery training institutions. Representatives of the Council, Reps of the Ghana Nurses and Midwives Trainee Association (GNMTA),...",
    writtenOn: 'Saturday, 04 April 2020 20:01',
    reads: '19514',
    tags: ['Hard books for students'],
    image: 'review',
    to: '/news/review-of-students-handbook',
  },
]

function ReviewMark() {
  return (
    <div
      className="relative grid h-[104px] w-[132px] shrink-0 place-items-center overflow-hidden rounded-lg bg-[#1A6FE8] text-white"
      aria-hidden="true"
    >
      <span className="absolute -top-6 -right-5 size-16 rotate-45 bg-white/15" />
      <span className="absolute -bottom-8 -left-6 size-20 rotate-12 bg-[#4C92F0]" />
      <span className="relative text-[22px] leading-none font-black tracking-wide">REVIEW</span>
    </div>
  )
}

function StoryImage({ image, featured }) {
  if (image === 'review') return <ReviewMark />

  return (
    <img
      src={image}
      alt=""
      className={
        featured
          ? 'h-44 w-full rounded-xl object-cover sm:h-auto sm:w-64 sm:self-stretch'
          : 'h-[104px] w-[132px] shrink-0 rounded-lg object-cover'
      }
    />
  )
}

function StoryMeta({ article, featured }) {
  return (
    <div className={`mt-4 border-t border-[#EEF2F6] pt-3 ${featured ? '' : 'space-y-2.5'}`}>
      <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#667085] ${featured ? '' : ''}`}>
        <p className="inline-flex items-center gap-1.5">
          <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
          Written on {article.writtenOn}
        </p>
        <p className="inline-flex items-center gap-1.5">
          <Folder className="size-3.5 shrink-0" aria-hidden="true" />
          in{' '}
          <Link to="/news/students" className="font-medium text-[#1D4ED8] hover:underline">
            Students News
          </Link>
        </p>
        {featured && (
          <>
            <Link
              to={`${article.to}#comments`}
              className="inline-flex items-center gap-1.5 font-medium text-[#1D4ED8] hover:underline"
            >
              <MessageCircle className="size-3.5 shrink-0" aria-hidden="true" />
              Be the first to comment!
            </Link>
            <p className="inline-flex items-center gap-1.5">
              <Eye className="size-3.5 shrink-0" aria-hidden="true" />
              Read {article.reads} times
            </p>
          </>
        )}
      </div>

      {!featured && article.tags && (
        <p className="flex flex-wrap items-center gap-2 text-[12.5px]">
          <span className="font-bold text-[#344054]">Tags:</span>
          {article.tags.map((tag) => (
            <Link
              key={tag}
              to={`/news/students?tag=${encodeURIComponent(tag)}`}
              className="rounded-full bg-[#E8F1FF] px-2.5 py-0.5 font-medium text-[#1D4ED8] hover:bg-[#DCE9FF]"
            >
              {tag}
            </Link>
          ))}
        </p>
      )}

      {!featured && (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
          <Link
            to={`${article.to}#comments`}
            className="inline-flex items-center gap-1.5 font-medium text-[#1D4ED8] hover:underline"
          >
            <MessageCircle className="size-3.5 shrink-0" aria-hidden="true" />
            Be the first to comment!
          </Link>
          <p className="inline-flex items-center gap-1.5 text-[#667085]">
            <Eye className="size-3.5 shrink-0" aria-hidden="true" />
            Read {article.reads} times
          </p>
        </div>
      )}
    </div>
  )
}

function StudentsNews() {
  const [featured, ...rest] = articles

  return (
    <section className="relative overflow-hidden bg-[#F3F7FC] py-12" aria-labelledby="students-news-heading">
      <div
        className="pointer-events-none absolute top-8 right-6 hidden grid-cols-8 gap-2 sm:grid"
        aria-hidden="true"
      >
        {Array.from({ length: 32 }, (_, index) => (
          <span key={index} className="size-1.5 rounded-full bg-[#D5E4F5]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="students-news-heading"
              className="text-[1.7rem] leading-none font-extrabold tracking-[-0.03em] text-[#0E3A86] sm:text-3xl"
            >
              Students News
            </h2>
            <span className="mt-2.5 block h-[3px] w-16 rounded-full bg-[#1D4ED8]" />
          </div>
          <p className="inline-flex items-center gap-2 text-[13px] text-[#667085]">
            <Newspaper className="size-4 text-[#1D4ED8]" aria-hidden="true" />
            Latest updates and stories from our students community
          </p>
        </div>

        <article className="mt-6 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-30px_rgba(14,35,71,0.45)] sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <img src={logo_alt} alt="" width={64} height={64} className="size-12 shrink-0 object-contain" />
            <div className="min-w-0 flex-1">
              <h3 className="text-[15px] leading-6 font-bold tracking-[0.01em] text-[#1D4ED8] uppercase sm:text-base">
                <Link to={featured.to} className="hover:underline">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-1 text-[12.5px] text-[#98A2B3]">Written by NMC-GH</p>
              <p className="mt-3 text-[14px] leading-6 text-[#5C6770]">{featured.excerpt}</p>
            </div>
            <StoryImage image={featured.image} featured />
          </div>
          <StoryMeta article={featured} featured />
        </article>

        <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {rest.map((article) => (
            <li key={article.to}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_16px_40px_-30px_rgba(14,35,71,0.45)] sm:p-5">
                <div className="flex gap-3">
                  <img
                    src={logo_alt}
                    alt=""
                    width={64}
                    height={64}
                    className="size-11 shrink-0 object-contain"
                  />
                  <div className="flex min-w-0 flex-1 gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13.5px] leading-5 font-bold tracking-[0.01em] text-[#1D4ED8] uppercase">
                        <Link to={article.to} className="hover:underline">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-[12px] text-[#98A2B3]">Written by NMC-GH</p>
                      <p className="mt-2.5 text-[13px] leading-5 text-[#5C6770]">{article.excerpt}</p>
                    </div>
                    <StoryImage image={article.image} />
                  </div>
                </div>
                <StoryMeta article={article} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StudentsNews
