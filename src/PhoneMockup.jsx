import { useState } from 'react'
import styles from './PhoneMockup.module.css'

const TASKS = [
  'Finish the project proposal',
  'Call your mentor',
  'Write for 30 minutes',
]

export default function PhoneMockup() {
  const [taskIndex, setTaskIndex] = useState(0)
  const [streakCount, setStreakCount] = useState(3)
  const [done, setDone] = useState(false)

  function handlePress() {
    if (done) return
    setDone(true)
    setTimeout(() => {
      setTaskIndex(i => (i + 1) % TASKS.length)
      setStreakCount(s => s + 1)
      setDone(false)
    }, 800)
  }

  const flameClass = streakCount >= 5
    ? `${styles.flame} ${styles.flameBig}`
    : styles.flame

  return (
    <div className={styles.wrap}>
      <div className={styles.phone}>
        <p className={styles.weekLabel}>Week 04 · Task 3 of 7</p>
        <p className={styles.task}>{TASKS[taskIndex]}</p>
        <button
          className={done ? styles.btn : `${styles.btn} ${styles.btnActive}`}
          onClick={handlePress}
        >
          {done ? '✓ Done' : 'I did this'}
        </button>
        <div className={flameClass}>🔥</div>
        <p className={styles.streak}>{streakCount} week streak</p>
      </div>
    </div>
  )
}
