import Image from 'next/image'
import React from 'react'
import styles from './Words.module.scss'
import WordsImage from '@/public/words.avif'
import Button from '../Button/Button'
import classNames from 'classnames'

const Words = () => {
  return (
    <section className={styles.wrap}>
        <div className={classNames("container", styles.container)}>
        <Image src={WordsImage} alt="Photo" />
        <div>
            <h2>The Westerra humble-brag</h2>
            <p>→ Why us? Westerra&apos;s community is built on meaningful personal relationships, not transactions. We&apos;re here for you with real support for your goals, your money and your financial education. That&apos;s the Westerra way.</p>
            <Button href='/login'>Learn More</Button>
        </div>
        </div>
    </section>
  )
}

export default Words