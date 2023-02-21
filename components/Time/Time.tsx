import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import styles from './Time.module.scss'
import TimeImage from '@/public/time.avif'
import classNames from 'classnames'

const Time = () => {
    return (
        <section className={styles.wrap}>
            <div className={classNames(styles.container)}>
                <div>
                    <div>
                        <h2>Ready to join the Westerra community?</h2>
                        <p>Open an account in 4 minutes and 59 seconds (we timed it).</p>
                        <Button href='/login'>Become a member</Button>
                    </div>
                </div>
                <Image src={TimeImage} alt="Photo" />
            </div>
        </section>
    )
}

export default Time