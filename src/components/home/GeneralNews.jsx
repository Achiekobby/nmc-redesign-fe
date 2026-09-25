import { useCallback, useEffect, useId, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Eye, MessageCircle, X } from 'lucide-react'
import Reveal, { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { logo_alt, news_five, news_four, news_one, news_three, news_two } from '@/utils/images'

const articles = [
  {
    title: 'NMC HOLDS STAKEHOLDER CONSULTATIVE MEETING',
    image: news_one,
    writtenBy: 'NMC-GH',
    reads: '13038',
    snippet:
      'Professionals from various fields of health practice gathered in a Stakeholder Consultative meeting to deliberate on procedures of revalidation for Nurse Assistants, Nurses and Midwives in a bid to improve the quality of practice in…',
    paragraphs: [
      'Professionals from various fields of health practice gathered in a Stakeholder Consultative meeting to deliberate on procedures of revalidation for Nurse Assistants, Nurses and Midwives in a bid to improve the quality of practice in Ghana.',
      'The meeting, which took place at the Nursing and Midwifery Council on Tuesday 20th February, 2024 discussed the development of a system of revalidation aimed at strengthening the N&MC’s licensing regulation in alignment with the Organization’s mission, which is to secure in the public interest, the highest standards of training and practice of Nursing and Midwifery.',
      'The Acting Registrar of the Council, Mrs. Philomina Woolley, in her opening address told participants that in spite of the Council’s several regulatory practices, there was a public outcry of poor attitudes of Nursing and Midwifery care in Ghana. She added that the Council in a resolution to improve care and service in all fields of Nursing and Midwifery, would therefore introduce the practice of revalidation every five years, for Nurse Assistants, Nurses and Midwives in their various areas of practice.',
      'Mrs. Woolley emphasized that the revalidation exercise was a measure in response to those challenges, in order to build the confidence of clients, patients and the entire public in Nursing and Midwifery practitioners.',
      'Mrs. Woolley announced that the project was being funded by the UK Department of Health and Social Care and managed by the Tropical Health and Education Trust (THET) as part of Global Health Workforce Program. This funding, she said, was acquired after a collaborative application with the University of Huddersfield, in the United Kingdom; a team which had worked collaboratively with N&MC Ghana, over the years.',
      'Representative from the University of Huddersfield, Precious Adade Duodu, in his presentation, told participants that the essence of the meeting was to gather some views, and develop a framework and guidelines for the revalidation project which the Nursing and Midwifery Council would introduce in the nearest future.',
    ],
  },
  {
    title:
      'NURSING AND MIDWIFERY COUNCIL OF GHANA EMPOWERS PROFESSIONAL STAFF THROUGH COLLABORATIVE TRAINING PROGRAMME ON REVALIDATION',
    image: news_two,
    writtenBy: 'NMC-GH',
    writtenOn: 'Monday, 20 May 2024 11:01',
    reads: '14770',
    snippet:
      'The Nursing and Midwifery Council of Ghana (N&MC) joined forces with esteemed educational institutions, the University of Huddersfield and the University of Liverpool (both in the UK), to conduct a comprehensive three-day capacity-building training. The…',
    paragraphs: [
      "The Nursing and Midwifery Council of Ghana (N&MC) joined forces with esteemed educational institutions, the University of Huddersfield and the University of Liverpool (both in the UK), to conduct a comprehensive three-day capacity-building training. The programme, held in Accra, brought together professional staff and Management Information System (MIS) personnel both at the N&MC's Head Office and regional branches. The primary objective was to equip participants with a thorough understanding of the revalidation processes, enabling them to effectively disseminate this vital information to their peers. The N&MC seeks to introduce a revalidation policy for nurses and midwives in 2026.",
      'Mrs. Philomina Woolley, Acting Registrar of the N&MC, delivered a keynote presentation, emphasizing the significance of revalidation in enhancing adherence to professional standards and codes of practice within the nursing and midwifery sector. She underscored that revalidation serves as a mechanism for practitioners to assess their performance, demonstrate compliance with standards, remain abreast of evolving practices, and foster heightened public confidence in the profession.',
      'Central to the training agenda was the advancement of the revalidation framework and associated guidelines.',
      'Mr. Ampem Darko Oklodu-Abbey Esq, Deputy Director (Operations) and Head of Intelligence and Discipline Unit at the N&MC took the participants through the steps of revalidation and what will be expected from registrants.',
      'Participants actively engaged in collaborative exercises facilitated by lead partners including Dr. Bibha Simkhada, a Senior Lecturer in Adult Nursing and Deputy Director of Graduate Education at the School of Human and Health Sciences, University of Huddersfield, UK as well as Dr. Susan Jones, Lecturer and Professional Lead in Nursing at the School of Allied Health Professionals and Nursing, University of Liverpool, UK. Also, Prof. Charles Ampong Adjei from School of Nursing and Midwifery at the University of Ghana and a Research Assistant/Coordinator on this project supported the training programme. Together, they deliberated on the development of revalidation templates, requisite criteria, and strategies for sensitization and dissemination. This training programme forms part of a project under a Global Health Workforce Programme funded by the UK Department of Health and Social Care via Tropical Health and Education Trust (THET). This project aims to “strengthen the ability of the Nursing and Midwifery Council (N&MC) of Ghana to oversee and regulate the professional register of nurses and midwives and to ensure high-quality nursing and midwifery care”.',
      'Upon conclusion, attendees expressed gratitude to the organizers for orchestrating an insightful programme. Reflecting on the experience, one participant articulated, "We are profoundly grateful for the opportunity to gain firsthand insights into the revalidation process. Armed with this knowledge, we pledge to serve as ambassadors, igniting enthusiasm and understanding among our peers and the wider community."',
      'The collaborative initiative marks a pivotal step towards advancing professional excellence and fostering a culture of continuous improvement within the nursing and midwifery domain in Ghana.',
    ],
  },
  {
    title:
      "Strengthening Nursing and Midwifery Regulation in Ghana: Insights from the N&MC Ghana's Visit to NMC UK on Revalidation",
    image: news_three,
    writtenBy: 'NMC-GH',
    writtenOn: 'Monday, 08 April 2024 13:13',
    reads: '12332',
    snippet:
      'On Wednesday, March 20, 2024, a delegation from the Nursing and Midwifery Council (N&MC) of Ghana, the University of Huddersfield, UK, and TechnoFerry International Limited, UK, embarked on a significant visit to the Nursing and…',
    paragraphs: [
      'On Wednesday, March 20, 2024, a delegation from the Nursing and Midwifery Council (N&MC) of Ghana, the University of Huddersfield, UK, and TechnoFerry International Limited, UK, embarked on a significant visit to the Nursing and Midwifery Council (NMC) UK. The delegation included Mrs. Philomina A.N. Woolley, Acting Registrar; Mr. Ampem Darko Oklodu-Abbey Esq, Deputy Director (Operations) and Head of Intelligence and Discipline Unit; and Mr. Dennis Addai, Senior IT Officer (all at the N&MC of Ghana). Accompanying them were Dr. Bibha Simkhada, Senior Lecturer in Adult Nursing and Deputy Director of Graduate Education, University of Huddersfield, UK; as well as Mr. Hari Krishna Neupane, IT Consultant; and Mr. Manish Parajuli, Project Manager (both representing TechnoFerry International Limited, UK).',
      'The primary objective of this visit to the NMC UK was to glean insights and expertise in implementing the innovative revalidation policy for nurses and midwives. The delegation sought to understand firsthand how the UK has effectively spearheaded this initiative, which has significantly contributed to enhancing health outcomes and fostering professional development among nurses and midwives. This visit was a pivotal component of an ongoing collaborative project aimed at “strengthening the N&MC of Ghana\'s capacity to oversee and regulate the professional registration of nurses and midwives to ensure high-quality care”. Supported by funding from the UK Department of Health and Social Care through the Tropical Health and Education Trust (THET), this project is part of the Global Health Workforce Programme. By leveraging the experiences, strategies, and best practices of leaders like the NMC UK, the delegation aims to tailor its approach to suit the distinctive needs and challenges of the healthcare system in Ghana.',
      'Upon arrival, the delegation was warmly received by Natasha Dare, Head of Regulatory Policy, NMC UK, who graciously facilitated the meeting in the absence of Peter Pinto de Sa, Assistant Director, Office of the Chair and Chief Executive, NMC UK. The visit commenced with an illuminating presentation on revalidation, setting the stage for discussions and the exchange of practical recommendations on the introduction of a context-specific policy in Ghana. Additionally, the IT team had the opportunity to delve into the technological intricacies of policy implementation. In addition, Natasha Dare kindly agreed to serve on the Steering Committee for the execution of this project.',
      'In conclusion, the visit to the NMC UK was instrumental in providing invaluable insights and expertise that will inform the development and implementation of revalidation policies for nurses and midwives in Ghana. Through collaboration and knowledge exchange, both countries are poised to strengthen regulatory frameworks, enhance professional standards, and ultimately, improve healthcare delivery for the benefit of all.',
    ],
  },
  {
    title:
      'Strengthening Global health partnerships: Nursing & Midwifery Council of Ghana and University of Huddersfield, UK sign Memorandum of Understanding',
    image: news_four,
    writtenBy: 'NMC-GH',
    writtenOn: 'Monday, 08 April 2024 13:10',
    reads: '12409',
    snippet:
      'On Thursday, 21st March 2024, a significant step towards enhancing collaboration in nursing and midwifery education, practice and research was taken, as a delegation from the Nursing and Midwifery Council (N&MC) of Ghana visited the…',
    paragraphs: [
      'On Thursday, 21st March 2024, a significant step towards enhancing collaboration in nursing and midwifery education, practice and research was taken, as a delegation from the Nursing and Midwifery Council (N&MC) of Ghana visited the prestigious University of Huddersfield in the United Kingdom. Led by Mrs. Philomina A.N. Woolley, Acting Registrar of the N&MC of Ghana, the delegation comprised Mr. Ampem Darko Oklodu-Abbey Esq, Deputy Director (Operations) and Head of Intelligence and Discipline Unit, and Mr. Dennis Addai, Senior IT Officer.',
      'This visit marked a pivotal moment in the ongoing collaborative project aimed at “strengthening the ability of the N&MC of Ghana to oversee and regulate the professional registration of nurses and midwives to ensure high-quality care”. The collaborative project, funded by the UK Department of Health and Social Care through the Tropical Health and Education Trust (THET), is part of the Global Health Workforce Programme.',
      'A highlight of the visit was the signing of a Memorandum of Understanding (MoU) between the University of Huddersfield and the N&MC of Ghana. Professor Jane Owen-Lynch signed the MoU on behalf of the University of Huddersfield, while Mrs. Philomina A.N. Woolley represented the N&MC Ghana.',
    ],
  },
  {
    title: 'N&MC Hosts 8th Credentialing Forum to Uphold Standards in Nursing and Midwifery Education',
    image: news_five,
    writtenBy: 'NMC-GH',
    writtenOn: 'Tuesday, 12 March 2024 14:07',
    reads: '14505',
    snippet:
      'The Nursing and Midwifery Council (N&MC) of Ghana reaffirmed its commitment to excellence in nursing and midwifery education through the successful culmination of its 8th Credentialing Forum held at the Rev. Veronica Darko Conference Hall…',
    paragraphs: [
      'The Nursing and Midwifery Council (N&MC) of Ghana reaffirmed its commitment to excellence in nursing and midwifery education through the successful culmination of its 8th Credentialing Forum held at the Rev. Veronica Darko Conference Hall at the Council’s Head Office in Accra from March Monday 4th to Thursday 7th March, 2024.',
      'The Credentialing Forum convened key stakeholders from fourteen (14) esteemed Nursing and Midwifery training institutions. It served as a pivotal public gathering, bringing together a distinguished Panel comprised of members of the 15th Governing Board of N&MC alongside Directors of Nursing and Midwifery and Senior Staff of N&MC. This forum was situated within the Council’s objective to “secure in the public interest the highest standards of training and practice of nursing and midwifery”. It stands as a cornerstone in the N&MC\'s accreditation process, underscoring the imperative for applicants to adhere unwaveringly to stringent criteria or standards.',
      'Mrs. Agnes Oppong-Baah, Head of Accreditations and Supervision, representing the Acting Registrar (Mrs Philomina A.N. Woolley), underscored the pivotal role of accreditation in upholding standards of mission, administration, faculty, curriculum, and resources across participating institutions. "This Credentialing Forum, initiated in November 2020, stands as a testament to N&MC\'s unwavering dedication to bolster accreditation protocols, ensuring excellence in both established and emerging institutions," remarked Mrs. Oppong-Baah during her opening address.',
    ],
  },
]

function ArticleDrawer({ article, onClose }) {
  const reduceMotion = useReducedMotion()
  const titleId = useId()

  useEffect(() => {
    if (!article) return
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [article, onClose])

  return (
    <AnimatePresence>
      {article && (
        <>
          <motion.button
            type="button"
            aria-label="Close article"
            className="fixed inset-0 z-[70] bg-[#0E2347]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-[680px] flex-col bg-white shadow-2xl"
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: '100%' }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[#EEF1F4] px-6 py-4">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-[#E31B23] uppercase">
                General News
              </p>
              <button
                type="button"
                onClick={onClose}
                className="grid size-9 place-items-center rounded-lg text-[#0E2347] hover:bg-[#F4F7FB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4BDB]"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <article className="overflow-y-auto px-6 py-8 sm:px-10">
              <img src={article.image} alt="" className="mb-6 w-full rounded-2xl object-cover" />
              <h2
                id={titleId}
                className="text-[1.45rem] leading-snug font-extrabold tracking-[-0.02em] text-[#1D4ED8] uppercase"
              >
                {article.title}
              </h2>
              <p className="mt-2 text-[13px] text-[#98A2B3]">Written by {article.writtenBy}</p>
              {article.writtenOn && (
                <p className="mt-1 text-[13px] text-[#667085]">Written on {article.writtenOn}</p>
              )}
              <div className="mt-6 space-y-5">
                {article.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[16.5px] leading-8 text-[#3D4754]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function GeneralNews() {
  const [selected, setSelected] = useState(null)
  const closeArticle = useCallback(() => setSelected(null), [])

  return (
    <section className="bg-[#F7F9FC] py-14" aria-labelledby="general-news-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="general-news-heading"
            className="text-2xl font-extrabold tracking-[-0.03em] text-[#0E2347] sm:text-3xl"
          >
            General News
          </h2>
          <Link
            to="/news"
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#1F4BDB] hover:underline"
          >
            View all news
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-8 space-y-4">
          {articles.map((article) => (
            <RevealItem key={article.title}>
              <article className="grid gap-5 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-30px_rgba(14,35,71,0.4)] sm:p-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
                <div className="min-w-0">
                  <div className="flex gap-3">
                    <img src={logo_alt} alt="" className="size-11 shrink-0 object-contain" />
                    <div className="min-w-0">
                      <h3 className="text-[15px] leading-6 font-bold text-[#1D4ED8] uppercase">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] text-[#98A2B3]">
                        Written by {article.writtenBy}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-[#5C6770]">{article.snippet}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]">
                    <button
                      type="button"
                      onClick={() => setSelected(article)}
                      className="inline-flex items-center gap-1.5 font-semibold text-[#1D4ED8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      Read more
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </button>
                    <span className="inline-flex items-center gap-1.5 text-[#1D4ED8]">
                      <MessageCircle className="size-3.5" aria-hidden="true" />
                      Be the first to comment!
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#667085]">
                      <Eye className="size-3.5" aria-hidden="true" />
                      Read {article.reads} times
                    </span>
                  </div>
                </div>
                <img
                  src={article.image}
                  alt=""
                  className="h-44 w-full rounded-xl object-cover lg:h-40"
                />
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <ArticleDrawer article={selected} onClose={closeArticle} />
    </section>
  )
}

export default GeneralNews
