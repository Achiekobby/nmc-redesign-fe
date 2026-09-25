import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Globe,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  TriangleAlert,
} from 'lucide-react'

const enquiryOptions = [
  { label: 'Request for Information', icon: Info },
  { label: 'Complaints', icon: TriangleAlert },
  { label: 'Suggestion', icon: Lightbulb },
  { label: 'General', icon: MessageSquare },
]

const ease = [0.22, 1, 0.36, 1]

const empty = {
  name: '',
  email: '',
  subject: '',
  message: '',
  copy: false,
  enquiry: [],
}

function checksFor(values) {
  return {
    enquiry: values.enquiry.length > 0,
    name: values.name.trim().length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()),
    subject: values.subject.trim().length >= 3,
    message: values.message.trim().length >= 12,
  }
}

function validate(values) {
  const checks = checksFor(values)
  const errors = {}
  if (!checks.name) errors.name = 'Enter your full name.'
  if (!checks.email) errors.email = 'Enter a valid email address.'
  if (!checks.subject) errors.subject = 'Add a short subject.'
  if (!checks.message) errors.message = 'Write a message of at least a few words.'
  if (!checks.enquiry) errors.enquiry = 'Choose at least one enquiry type.'
  return errors
}

function Contact() {
  const reduce = useReducedMotion()
  const formRef = useRef(null)
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [shake, setShake] = useState(0)

  const checks = checksFor(values)
  const complete = Object.values(checks).filter(Boolean).length
  const progress = (complete / 5) * 100

  const setField = (key, value) => {
    const next = { ...values, [key]: value }
    setValues(next)
    if (touched[key]) {
      setErrors((current) => ({ ...current, [key]: validate(next)[key] }))
    }
  }

  const touch = (key) => {
    setTouched((current) => ({ ...current, [key]: true }))
    setErrors((current) => ({ ...current, [key]: validate(values)[key] }))
  }

  const toggleEnquiry = (option) => {
    const enquiry = values.enquiry.includes(option)
      ? values.enquiry.filter((item) => item !== option)
      : [...values.enquiry, option]
    const next = { ...values, enquiry }
    setValues(next)
    setTouched((current) => ({ ...current, enquiry: true }))
    setErrors((current) => ({ ...current, enquiry: validate(next).enquiry }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
      enquiry: true,
    })
    const first = ['enquiry', 'name', 'email', 'subject', 'message'].find((key) => nextErrors[key])
    if (first) {
      setShake((count) => count + 1)
      const node = formRef.current?.querySelector(`[data-field="${first}"]`)
      node?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
      node?.querySelector('input, textarea, button')?.focus()
      return
    }

    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  return (
    <section className="relative overflow-hidden bg-[#F6F8FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D5E0F0 1.1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 right-0 size-[420px] rounded-full bg-[#E7F0FF] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-[320px] rounded-full bg-[#FDE8EE] blur-3xl" />

      <div className="relative mx-auto grid max-w-8xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-14 lg:py-20">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold tracking-wide text-nmc-red uppercase">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0E2347] sm:text-5xl">
            Registrar&apos;s Office
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-[#475467]">
            Write to the Registrar&apos;s Office. Share a request, a complaint, a suggestion, or a general enquiry.
          </p>

          <ul className="mt-8 space-y-3">
            <Fact
              icon={MapPin}
              title="Postal address"
              lines={['P.O. Box MB 44', 'Ministries', 'Accra', '00233', 'Ghana']}
            />
            <Fact icon={Phone} title="Telephone" lines={['0302522909']} href="tel:+233302522909" />
            <Fact icon={Globe} title="Website" lines={['www.nmc.gov.gh']} href="https://www.nmc.gov.gh" />
          </ul>
        </div>

        <div className="rounded-3xl border border-[#E6EAF0] bg-white p-6 shadow-[0_28px_60px_-32px_rgba(14,35,71,0.45)] sm:p-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <Success
                values={values}
                reduce={reduce}
                onReset={() => {
                  setSent(false)
                  setValues(empty)
                  setErrors({})
                  setTouched({})
                }}
              />
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, x: shake ? [0, -6, 6, -3, 0] : 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                onSubmit={submit}
                noValidate
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#E11D2E] text-white">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-[#0E2347]">Send an Email</h2>
                      <p className="text-sm text-[#667085]">* Required field</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-[#1236C2]">{complete} of 5</p>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#EEF1F6]">
                  <motion.div
                    className="h-full rounded-full bg-nmc-blue"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: reduce ? 0 : 0.35, ease }}
                  />
                </div>

                <fieldset className="mt-7" data-field="enquiry">
                  <legend className="text-sm font-semibold text-[#0E2347]">
                    What&apos;s your enquiry about? <span className="text-nmc-red">*</span>
                  </legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {enquiryOptions.map((option) => {
                      const selected = values.enquiry.includes(option.label)
                      const Icon = option.icon
                      return (
                        <button
                          key={option.label}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggleEnquiry(option.label)}
                          className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm transition-colors duration-200 ${
                            selected
                              ? 'border-nmc-blue bg-[#EEF3FF] font-semibold text-[#1236C2]'
                              : 'border-[#E6EAF0] text-[#344054] hover:border-[#C9D4EA] hover:bg-[#F8FAFC]'
                          }`}
                        >
                          <span
                            className={`grid size-8 shrink-0 place-items-center rounded-lg ${
                              selected ? 'bg-nmc-blue text-white' : 'bg-[#F4F7FB] text-[#667085]'
                            }`}
                          >
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="flex-1">{option.label}</span>
                          <span
                            className={`grid size-5 shrink-0 place-items-center rounded-md border ${
                              selected ? 'border-nmc-blue bg-nmc-blue text-white' : 'border-[#D0D5DD] bg-white'
                            }`}
                          >
                            {selected && <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  <FieldError message={touched.enquiry ? errors.enquiry : ''} />
                </fieldset>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="contact-name"
                    field="name"
                    label="Name"
                    required
                    value={values.name}
                    valid={checks.name}
                    error={touched.name ? errors.name : ''}
                    onChange={(value) => setField('name', value)}
                    onBlur={() => touch('name')}
                    autoComplete="name"
                  />
                  <Field
                    id="contact-email"
                    field="email"
                    label="Email"
                    type="email"
                    required
                    value={values.email}
                    valid={checks.email}
                    error={touched.email ? errors.email : ''}
                    onChange={(value) => setField('email', value)}
                    onBlur={() => touch('email')}
                    autoComplete="email"
                  />
                </div>
                <div className="mt-4">
                  <Field
                    id="contact-subject"
                    field="subject"
                    label="Subject"
                    required
                    value={values.subject}
                    valid={checks.subject}
                    error={touched.subject ? errors.subject : ''}
                    onChange={(value) => setField('subject', value)}
                    onBlur={() => touch('subject')}
                  />
                </div>
                <div className="mt-4">
                  <Field
                    id="contact-message"
                    field="message"
                    label="Message"
                    required
                    multiline
                    value={values.message}
                    valid={checks.message}
                    error={touched.message ? errors.message : ''}
                    onChange={(value) => setField('message', value)}
                    onBlur={() => touch('message')}
                    hint={`${values.message.trim().length} characters`}
                  />
                </div>

                <button
                  type="button"
                  aria-pressed={values.copy}
                  onClick={() => setField('copy', !values.copy)}
                  className="mt-5 flex w-full items-center justify-between gap-4 rounded-xl border border-[#E6EAF0] px-4 py-3 text-left"
                >
                  <span>
                    <span className="block text-sm font-medium text-[#0E2347]">Send a copy to yourself</span>
                    <span className="block text-xs text-[#667085]">(optional)</span>
                  </span>
                  <span
                    className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                      values.copy ? 'bg-nmc-blue' : 'bg-[#E4E7EC]'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform duration-200 ${
                        values.copy ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </span>
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-nmc-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41626] disabled:opacity-70"
                >
                  {sending ? 'Checking your message' : 'Send message'}
                  <ArrowRight className={`size-4 ${sending && !reduce ? 'animate-pulse' : ''}`} aria-hidden="true" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Success({ values, reduce, onReset }) {
  return (
    <motion.div
      key="sent"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-[#15803D] text-white">
        <Check className="size-7" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <h2 className="mt-6 text-2xl font-bold text-[#0E2347]">Message ready to send</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#475467]">
        {values.name.trim()}, this note is ready for the Registrar&apos;s Office
        {values.copy ? ', and a copy is marked for you' : ''}. The office mailbox is not connected yet.
      </p>
      <dl className="mt-6 divide-y divide-[#EEF1F6] rounded-2xl border border-[#E6EAF0] bg-[#F8FAFC]">
        <Receipt label="Enquiry" value={values.enquiry.join(', ')} />
        <Receipt label="From" value={`${values.name.trim()} · ${values.email.trim()}`} />
        <Receipt label="Subject" value={values.subject.trim()} />
        <Receipt label="Message" value={values.message.trim()} />
      </dl>
      <button
        type="button"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-nmc-blue px-5 py-3 text-sm font-semibold text-white hover:bg-[#1638c4]"
        onClick={onReset}
      >
        Write another message
      </button>
    </motion.div>
  )
}

function Receipt({ label, value }) {
  return (
    <div className="grid gap-1 px-4 py-3 sm:grid-cols-[7rem_1fr]">
      <dt className="text-xs font-semibold tracking-wide text-[#667085] uppercase">{label}</dt>
      <dd className="text-sm leading-6 text-[#0E2347]">{value}</dd>
    </div>
  )
}

function Fact({ icon: Icon, title, lines, href }) {
  const body = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#1C45E6] text-white">
        <Icon className="size-5" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-[#0E2347]">{title}</span>
        {lines.map((line) => (
          <span key={line} className="block text-sm leading-6 text-[#475467]">
            {line}
          </span>
        ))}
      </span>
    </>
  )

  const className =
    'flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-[0_12px_30px_-24px_rgba(14,35,71,0.8)]'

  if (!href) return <li className={className}>{body}</li>

  return (
    <li>
      <a
        href={href}
        className={`${className} transition-colors hover:border-[#C9D4EA]`}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {body}
      </a>
    </li>
  )
}

function Field({
  id,
  field,
  label,
  type = 'text',
  required,
  multiline,
  value,
  valid,
  error,
  hint,
  onChange,
  onBlur,
  autoComplete,
}) {
  const invalid = Boolean(error)
  const shared = `w-full rounded-xl border bg-[#FCFCFD] px-3.5 pt-6 pb-2.5 text-sm text-[#0E2347] outline-none transition-colors duration-200 ${
    invalid
      ? 'border-nmc-red bg-white'
      : valid
        ? 'border-[#86EFAC] bg-white focus:border-[#15803D]'
        : 'border-[#E6EAF0] focus:border-nmc-blue focus:bg-white'
  }`

  return (
    <div data-field={field}>
      <div className="relative">
        {multiline ? (
          <textarea
            id={id}
            rows={5}
            value={value}
            required={required}
            aria-invalid={invalid}
            aria-describedby={invalid ? `${id}-error` : undefined}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            className={`${shared} resize-y pr-10`}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={invalid}
            aria-describedby={invalid ? `${id}-error` : undefined}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            className={`${shared} pr-10`}
          />
        )}
        <label
          htmlFor={id}
          className={`pointer-events-none absolute top-2 left-3.5 text-xs font-medium ${
            invalid ? 'text-nmc-red' : 'text-[#667085]'
          }`}
        >
          {label}
          {required && <span className="text-nmc-red"> *</span>}
        </label>
        {valid && !invalid && (
          <Check className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#15803D]" aria-hidden="true" />
        )}
      </div>
      <div className="flex items-start justify-between gap-3">
        <FieldError id={`${id}-error`} message={error} />
        {hint && !error && <p className="pt-1.5 text-xs text-[#98A2B3]">{hint}</p>}
      </div>
    </div>
  )
}

function FieldError({ id, message }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease }}
          className="overflow-hidden text-xs text-nmc-red"
        >
          <span className="block pt-1.5">{message}</span>
        </motion.p>
      )}
    </AnimatePresence>
  )
}

export default Contact
