import { Link } from 'react-router'
import { ArrowRight, Megaphone } from 'lucide-react'

function ImportantNotice() {
  return (
    <section className="bg-[#F4F7FB] pt-6 pb-10" aria-labelledby="important-notice-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <article className="flex flex-col gap-3 rounded-2xl bg-white p-2.5 shadow-[0_18px_40px_-32px_rgba(14,35,71,0.4)] ring-1 ring-slate-200/80 lg:flex-row lg:items-stretch lg:p-2.5">

          {/* ── Red label ─────────────────────────────────────────── */}
          <div className="flex shrink-0 flex-row items-center gap-3 self-stretch rounded-r-xl bg-[#E31B23] px-5 py-3 text-white [clip-path:polygon(0_14%,100%_0,100%_100%,0_86%)] lg:w-[200px] lg:justify-center">
            <Megaphone className="size-11 shrink-0" fill="white" stroke="white" aria-hidden="true" />
            <p className="text-[15px] leading-[1.25] font-extrabold tracking-[0.06em] uppercase">
              Important<br />Notice
            </p>
          </div>

          {/* ── Content ───────────────────────────────────────────── */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 self-stretch px-3 py-2 lg:flex-row lg:items-center lg:gap-0 lg:px-5 lg:py-2">

            {/* Left: expiry block */}
            <div className="lg:w-[40%] lg:pr-8">
              <h2
                id="important-notice-heading"
                className="text-[13px] font-bold tracking-[0.04em] text-[#0E2347] uppercase"
              >
                All PINs/AINs expire on
              </h2>
              <p className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="bg-[#E31B23] px-2 py-1 text-[17px] leading-none font-extrabold tracking-wide text-white">
                  DECEMBER 31
                </span>
                <span className="bg-[#0E2347] px-2 py-1 text-[17px] leading-none font-extrabold tracking-wide text-white">
                  2023
                </span>
              </p>
              <p className="mt-2 text-[13px] leading-5 text-[#5C6770]">
                The N&amp;MC hereby informs our cherished Nurse Assistants, Nurses and Midwives to
                proceed to any of the Regional Offices for the renewal of their PINs/AINs.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden w-px self-stretch bg-[#E6EAF0] lg:block" aria-hidden="true" />

            {/* Right: requirements */}
            <div className="flex min-w-0 flex-1 flex-col justify-between lg:pl-8">
              <ol className="space-y-2">
                <li className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-[#1F4BDB] text-[11px] font-bold text-[#1F4BDB]">
                    01
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] leading-5">
                      <span className="font-bold text-[#0E2347]">Proof of Payment</span>
                    </p>
                    <ul className="mt-1 space-y-1 text-[12px] leading-5">
                      <li>
                        <span className="font-bold text-[#0E2347]">A. GRNMA, GRMA and NARM-GH Members</span>
                        <span className="block font-normal text-[#5C6770]">
                          Payslip from Controller and Accountant-General&apos;s Department, showing proof of membership
                        </span>
                      </li>
                      <li>
                        <span className="font-bold text-[#0E2347]">B. Other Association and Non-Association Members</span>
                        <span className="block font-normal text-[#5C6770]">
                          Bank Pay-in-Slip from GCB Bank or ADB Bank.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-[#1F4BDB] text-[11px] font-bold text-[#1F4BDB]">
                    02
                  </span>
                  <p className="text-[12px] leading-5 text-[#0E2347]">
                    Proof of participation in Continuous Professional Development (CPD) programmes
                    (Certificates and Logbooks)
                  </p>
                </li>
              </ol>
              <Link
                to="/notices/pin-ain-renewal"
                className="mt-2 inline-flex items-center gap-1 self-end text-[13px] font-semibold text-[#E31B23] hover:underline"
              >
                Read Full Notice
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ImportantNotice
