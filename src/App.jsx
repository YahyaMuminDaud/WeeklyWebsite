import Nav from './Nav'
import PhoneMockup from './PhoneMockup'
import { useFadeIn } from './useFadeIn'
import styles from './App.module.css'

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, visible } = useFadeIn(delay)
  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${visible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <p className={styles.eyebrow}>A different kind of productivity app</p>
        <h1 className={styles.heroTitle}>
          Seven<br />
          tasks.<br />
          <em>One</em><br />
          week.
        </h1>
        <p className={styles.heroDesc}>
          weekly. is a minimalist mobile app for people who are serious about following through.
          No endless lists. No rescheduling. No skipping.
          Just one task at a time, and one button to press.
        </p>
        <a href="#how" className={styles.heroCta}>
          See how it works
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>

      <div className={styles.heroRight}>
        <PhoneMockup />
        <div className={styles.heroStat}>
          <div className={styles.heroStatNum}>7</div>
          <div className={styles.heroStatLabel}>tasks per week.<br />not one more.</div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01 — Sunday', title: 'Write seven things.', body: 'At the start of every week, you write down up to seven things you want to accomplish. Take your time. These are the only ones you get.' },
    { num: '02 — Lock in', title: 'The list disappears.', body: 'The moment you lock them in, your list is hidden. You can\'t see what\'s coming, you can\'t reorder, and you can\'t go back.' },
    { num: '03 — Daily', title: 'One task. One button.', body: 'One task appears at a time. The only way to move forward is to press a single button: I did this. That\'s the entire interface.' },
    { num: '04 — Sunday again', title: 'The slate clears.', body: 'Every Sunday, it resets automatically. Done tasks are gone. Incomplete tasks are gone. A new week begins with no memory of the last.' },
  ]

  return (
    <section className={styles.how} id="how">
      <div className={styles.howSidebar}>
        <span className={styles.sectionLabel}>How it works</span>
        <p className={styles.sidebarQuote}>
          "The only way<br />
          to move forward<br />
          is to press a single<br />
          button."
        </p>
      </div>
      <div className={styles.howSteps}>
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 80} className={styles.step}>
            <p className={styles.stepNum}>{step.num}</p>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepBody}>{step.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className={styles.philosophy} id="philosophy">
      <div className={`${styles.philCol} ${styles.philDark}`}>
        <span className={`${styles.sectionLabel} ${styles.sectionLabelDark}`}>Philosophy</span>
        <h2 className={`${styles.philHeading} ${styles.philHeadingItalic}`}>
          Constraint<br />is<br />the point.
        </h2>
        <p className={`${styles.philBody} ${styles.philBodyDark}`}>
          Most productivity tools fail because they're too flexible.
          weekly. is built on the opposite belief — when you can't skip,
          reschedule, or peek ahead, the only option left is to show up.
        </p>
      </div>

      <div className={styles.philCol}>
        <h2 className={styles.philSubHeading}>Who it's for.</h2>
        <p className={styles.philBody}>
          People who already know what they need to do.
          People tired of apps that make it easy to feel productive without actually being productive.
          People who want a system that holds them to their word, even when no one is watching.
        </p>
        <br />
        <h2 className={styles.philSubHeading}>What it's not.</h2>
        <ul className={styles.notList}>
          {['No account or login','No social features','No notifications','No cloud sync','No way to cheat the system','No rescheduling or skipping'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.philCol}>
        <h2 className={styles.philSubHeading}>Everything on device.</h2>
        <p className={styles.philBody}>
          There's no server receiving your tasks. No algorithm optimizing your list.
          Everything lives on your device, unseen and untracked.
          weekly. does one thing and protects the integrity of that one thing fiercely.
        </p>
        <br />
        <p className={styles.philBody}>
          After five consecutive completed weeks, the app rewards you with one of thirty
          handwritten motivational messages — each one earned, not given.
        </p>
      </div>
    </section>
  )
}

const STREAK_ROWS = [
  { label: 'Week 01', lit: 'lit1', pct: 100 },
  { label: 'Week 02', lit: 'lit2', pct: 100 },
  { label: 'Week 03', lit: 'lit3', pct: 100 },
  { label: 'Week 04', lit: 'lit4', pct: 100 },
  { label: 'Week 05', lit: 'lit5', pct: 100 },
  { label: 'Week 06', lit: null,  pct: 0   },
]

function Streak() {
  return (
    <section className={styles.streakSection} id="streak">
      <FadeIn className={styles.streakVisual}>
        {STREAK_ROWS.map(({ label, lit, pct }) => (
          <div key={label} className={styles.streakRow} style={{ opacity: pct === 0 ? 0.3 : 1 }}>
            <span className={styles.streakWeekLabel}>{label}</span>
            <div className={styles.streakBar}>
              <div className={styles.streakBarFill} style={{ width: `${pct}%` }} />
            </div>
            <span className={`${styles.flameIcon} ${lit ? styles[lit] : ''}`}>🔥</span>
          </div>
        ))}
      </FadeIn>

      <FadeIn delay={200} className={styles.streakText}>
        <h3>The flame grows with you.</h3>
        <p>
          Completing every task before Sunday grows your streak. A flame icon tracks your
          progress — dim and cold at the start, building into a full roaring fire the
          longer your streak runs.
        </p>
        <p>Miss a week and it burns out completely.</p>
        <span className={styles.streakNote}>No grace period. No exceptions.</span>
      </FadeIn>
    </section>
  )
}

function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <p className={styles.manifestoLabel}>The belief</p>
      <p className={styles.manifestoText}>
        "When you can't skip, reschedule,
        or peek ahead — the only option left
        is to <span className={styles.manifestoAccent}>show up.</span>"
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerLogo}>weekly.</span>
      <span className={styles.footerRight}>weeklyoffical@gmail.com</span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <Philosophy />
      <Streak />
      <Manifesto />
      <Footer />
    </>
  )
}
