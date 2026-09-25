import { motion, useReducedMotion } from 'framer-motion'

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
}

const viewport = { once: true, amount: 0.15, margin: '0px 0px -40px 0px' }
const ease = [0.22, 1, 0.36, 1]

const shifts = {
  up: { y: 28 },
  left: { x: -36 },
  right: { x: 36 },
  fade: { y: 12 },
}

function Reveal({ as = 'div', className, delay = 0, from = 'up', children, ...rest }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = tags[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: 0, y: 0, ...shifts[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

function RevealGroup({ as = 'ul', className, children, ...rest }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = tags[as] ?? motion.ul

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={group}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

function RevealItem({ as = 'li', className, children, ...rest }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = tags[as] ?? motion.li

  return (
    <MotionTag className={className} variants={item} {...rest}>
      {children}
    </MotionTag>
  )
}

export { RevealGroup, RevealItem }
export default Reveal
