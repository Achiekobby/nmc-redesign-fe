import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import { portrait } from '@/utils/images'

function RegistrarAnnouncement() {
  return (
    <section className="bg-[#F6FBF7] py-12" aria-labelledby="registrar-announcement-heading">
      <div className="mx-auto grid max-w-8xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
        <Reveal from="left">
          <img
            src={portrait}
            alt="Congratulations card for Mrs Philomina Adjoa Nyarkoa Woolley on her appointment as the sixth Registrar of the Nursing and Midwifery Council of Ghana."
            width={1086}
            height={1448}
            className="h-auto w-full rounded-[28px] shadow-[0_24px_50px_-32px_rgba(20,80,40,0.55)]"
          />
        </Reveal>

        <Reveal from="right" className="flex h-full flex-col justify-between gap-5" delay={0.1}>
          <h2
            id="registrar-announcement-heading"
            className="text-[17px] leading-[1.35] font-bold text-[#1A1A1A] sm:text-[19px]"
          >
            Mrs. Philomina A. N. Woolley (FWAPCNM, FGCNM) has been appointed as the sixth Registrar
            for the Nursing and Midwifery Council of Ghana
          </h2>

          <p className="text-[15px] leading-8 font-normal text-[#5C6570]">
            The Nursing and Midwifery Council (N&amp;MC) of Ghana is delighted to announce the
            appointment of Mrs. Philomina Adjoa Nyarkoa Woolley as the sixth Registrar of the
            Council, effective July 31, 2024. This appointment was made by His Excellency Nana Addo
            Dankwa Akufo-Addo, the President of the Republic of Ghana, based on the advice of
            N&amp;MC&apos;s 15th Governing Board and in consultation with the Public Services
            Commission.
          </p>

          <hr className="border-[#E3E8EE]" />

          <h3 className="text-[16px] font-bold text-[#1A1A1A] sm:text-[17px]">
            A journey of excellence in nursing and midwifery
          </h3>

          <p className="text-[15px] leading-8 font-normal text-[#5C6570]">
            Mrs. Philomina A. N. Woolley brings to her new role a wealth of experience, having
            served the Council in different capacities including the Head of Examination Unit
            (2009-2016), Deputy Registrar in-charge of Operations (27th October, 2016 – 11th
            August, 2022), and Acting Registrar (12th August, 2022-30th July, 2024). Her
            distinguished career of about 32 years is marked by dedicated service, exemplary
            leadership, and significant contributions to the nursing and midwifery professions both
            locally and internationally.
          </p>

          <div>
            <p className="text-[15px] leading-8 font-normal text-[#5C6570]">
              Known for her strategic and visionary leadership, she is a person of integrity who
              values flexibility and embraces challenges with resilience. Her dedication to the
              profession, ability to endure and accept criticisms have earned her great respect and
              admiration from her colleagues and peers. She has been a participant and facilitator of
              numerous workshops, seminars, and conferences across the globe. To this end, her global
              perspective and insights have greatly enriched the practices and policies of the
              N&amp;MC.
            </p>

            <Link
              to="/news/appointment-of-registrar"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#1C8C3F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#167534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C8C3F]"
            >
              Read More
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default RegistrarAnnouncement
