import { useId } from 'react'
import { Link } from 'react-router'
import { ArrowRight, BookOpen, Calendar, ChevronDown, Users } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const registrations = [
  { month: 'Jan', y2023: null, y2024: 282614 },
  { month: 'Feb', y2023: null, y2024: 397338 },
  { month: 'Mar', y2023: null, y2024: 742782 },
  { month: 'Apr', y2023: null, y2024: 60928 },
  { month: 'May', y2023: null, y2024: 58640 },
  { month: 'Jun', y2023: null, y2024: 47087 },
  { month: 'Jul', y2023: null, y2024: 42897 },
  { month: 'Aug', y2023: 48814, y2024: 27021 },
  { month: 'Sep', y2023: 81968, y2024: 20448 },
  { month: 'Oct', y2023: 96675, y2024: 18085 },
  { month: 'Nov', y2023: 116754, y2024: 24123 },
  { month: 'Dec', y2023: 248376, y2024: 36866 },
]

const yTicks = [0, 200000, 400000, 600000, 800000]

function formatCount(value) {
  return Number(value).toLocaleString('en-US')
}

function WceaMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#12A150" />
      <circle cx="16" cy="16" r="11.2" fill="none" stroke="white" strokeWidth="1.4" />
      <path
        d="M16 8.8l1.15 2.7 2.9.28-2.2 1.9.68 2.85L16 15.2l-2.53 1.33.68-2.85-2.2-1.9 2.9-.28z"
        fill="white"
      />
      <path
        d="M11.2 21.2c1.2 1.7 2.9 2.6 4.8 2.6s3.6-.9 4.8-2.6"
        fill="none"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CpdStatistics() {
  const reduceMotion = useReducedMotion()
  const titleId = useId()

  return (
    <section className="relative overflow-hidden bg-white py-14" aria-labelledby={titleId}>
      <div
        className="pointer-events-none absolute -top-28 -right-16 size-80 rounded-full bg-[#FDE8EE] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-[#F8E7EE] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[8%] -bottom-24 size-72 rounded-full bg-[#F6E4EA] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 shrink-0 rounded-full bg-[#E11D2E]" aria-hidden="true" />
              <h2
                id={titleId}
                className="text-[1.7rem] leading-none font-extrabold tracking-[-0.03em] text-[#101828] sm:text-4xl"
              >
                CPD STATISTICS
              </h2>
            </div>
            <p className="mt-2.5 text-[15px] text-[#667085]">
              Track growth, learning and impact through our CPD programmes
            </p>
          </div>

          <div className="hidden shrink-0 text-right sm:block">
            <div className="ml-auto grid w-fit grid-cols-5 gap-1.5" aria-hidden="true">
              {Array.from({ length: 15 }, (_, index) => (
                <span key={index} className="size-1.5 rounded-full bg-[#D0D5DD]" />
              ))}
            </div>
            <p className="mt-3 text-[13px] font-semibold text-[#344054]">Continuous Learning</p>
            <p className="text-[12px] text-[#98A2B3]">Stronger Health Systems</p>
            <span className="mt-1.5 ml-auto block h-[2px] w-14 rounded-full bg-[#E11D2E]" />
          </div>
        </div>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.75fr)_minmax(240px,0.62fr)]">
          <article className="rounded-[24px] border border-[#EEF1F4] bg-white px-4 py-5 shadow-[0_18px_40px_-28px_rgba(16,24,40,0.35)] sm:px-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-[17px] font-bold text-[#101828]">Monthly CPD Statistics</h3>
                <p className="mt-0.5 text-[13px] text-[#98A2B3]">
                  Number of course registrations per month
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
              <ul className="flex items-center gap-4 text-[13px] font-medium text-[#344054]">
                <li className="inline-flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm bg-nmc-blue" aria-hidden="true" />
                  2023
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span className="size-2.5 rounded-sm bg-nmc-red" aria-hidden="true" />
                  2024
                </li>
              </ul>
              <label className="relative inline-flex items-center">
                <span className="sr-only">Statistics period</span>
                <Calendar
                  className="pointer-events-none absolute left-3 size-4 text-[#667085]"
                  aria-hidden="true"
                />
                <select
                  defaultValue="2023-2024"
                  className="appearance-none rounded-full border border-[#E4E7EC] bg-white py-1.5 pr-8 pl-9 text-[13px] font-medium text-[#344054] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E3C]"
                >
                  <option value="2023-2024">2023 - 2024</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2.5 size-4 text-[#667085]"
                  aria-hidden="true"
                />
              </label>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <div className="h-[360px] min-w-[640px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={registrations}
                    margin={{ top: 12, right: 8, left: 0, bottom: 0 }}
                    barCategoryGap="12%"
                    barGap={4}
                  >
                    <CartesianGrid vertical={false} stroke="#EEF2F6" />
                    <XAxis
                      dataKey="month"
                      interval={0}
                      tickLine={false}
                      axisLine={{ stroke: '#E6EAF0' }}
                      height={32}
                      tick={{ fill: '#667085', fontSize: 12, fontFamily: 'Onest, sans-serif' }}
                    />
                    <YAxis
                      ticks={yTicks}
                      domain={[0, 800000]}
                      tickFormatter={(value) => String(value)}
                      axisLine={false}
                      tickLine={false}
                      width={62}
                      tick={{ fill: '#98A2B3', fontSize: 12, fontFamily: 'Onest, sans-serif' }}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(28, 69, 230, 0.06)' }}
                      formatter={(value, name) => [value == null ? '—' : formatCount(value), name]}
                      contentStyle={{
                        borderRadius: 12,
                        border: '1px solid #EEF1F4',
                        fontFamily: 'Onest, sans-serif',
                        fontSize: 13,
                      }}
                    />
                    <Bar
                      dataKey="y2023"
                      name="2023"
                      fill="#1c45e6"
                      radius={[3, 3, 0, 0]}
                      maxBarSize={32}
                      isAnimationActive={!reduceMotion}
                      activeBar={{ fill: '#1636b8' }}
                    />
                    <Bar
                      dataKey="y2024"
                      name="2024"
                      fill="#e11d2e"
                      radius={[3, 3, 0, 0]}
                      maxBarSize={32}
                      isAnimationActive={!reduceMotion}
                      activeBar={{ fill: '#c41626' }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <table className="sr-only">
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">2023</th>
                  <th scope="col">2024</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td>{item.y2023 == null ? 'Not reported' : formatCount(item.y2023)}</td>
                    <td>{formatCount(item.y2024)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <div className="flex flex-col gap-4">
            <article className="flex flex-1 items-center gap-4 rounded-[24px] border border-[#F6E4E8] bg-[#FFF7F8] px-5 py-5 shadow-[0_18px_40px_-28px_rgba(160,30,50,0.35)]">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#FDE8EC] text-[#A32038]">
                <BookOpen className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Courses</p>
                <p className="mt-1 text-[2rem] leading-none font-extrabold tracking-tight text-[#9B1B32]">
                  2.81M
                </p>
                <span className="mt-2.5 block h-[2px] w-8 rounded-full bg-[#E11D2E]" />
                <p className="mt-2 text-[13px] text-[#98A2B3]">Total CPD courses available</p>
              </div>
            </article>

            <article className="flex flex-1 items-center gap-4 rounded-[24px] border border-[#E7EEF8] bg-white px-5 py-5 shadow-[0_18px_40px_-28px_rgba(16,24,40,0.28)]">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#E8F1FB] text-[#3B82C4]">
                <Users className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Learners</p>
                <p className="mt-1 text-[2rem] leading-none font-extrabold tracking-tight text-[#1B2A4A]">
                  361.69k
                </p>
                <span className="mt-2.5 block h-[2px] w-8 rounded-full bg-[#D0D5DD]" />
                <p className="mt-2 text-[13px] text-[#98A2B3]">Total learners enrolled</p>
              </div>
            </article>

            <a
              href="https://wcea.education/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-[24px] border border-[#EEF1F4] bg-white px-5 py-4 text-[15px] font-semibold text-[#1F4BDB] shadow-[0_18px_40px_-28px_rgba(16,24,40,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4BDB]"
            >
              <WceaMark />
              Powered By WCEA
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/services/cpd"
            className="inline-flex items-center gap-2 rounded-full bg-[#7A1E3C] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_12px_24px_-14px_rgba(122,30,60,0.9)] transition-colors hover:bg-[#681833] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E3C]"
          >
            Register for CPD Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CpdStatistics
