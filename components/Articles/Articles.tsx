import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './Articles.module.scss'

const Articles = () => {
    return (
        <section className={styles.wrap}>
            <div className={classNames(styles.container, "container")}>
                <h2>
                    Westerra's got big news to share</h2>
                <div>
                    <div>
                        <h3>Choose Your Chill at Westerra Credit Union&apos;s Special Olympics Colorado&apos;s 2023 Polar Plunge</h3>
                        <Link href="/login">The Polar Plunge is a cold-weather fundraiser aimed at raising $583,000 to provide critical funding for nearly 16,000 Special Olympics Colorado athletes. Supporting this important cause has become a cherished tradition at Westerra Credit Union. </Link>
                        <Link href="/login">LEARN MORE →</Link>
                    </div>
                    <div>
                        <h3>Choose Your Chill at Westerra Credit Union&apos;s Special Olympics Colorado&apos;s 2023 Polar Plunge</h3>
                        <Link href="/login">The Polar Plunge is a cold-weather fundraiser aimed at raising $583,000 to provide critical funding for nearly 16,000 Special Olympics Colorado athletes. Supporting this important cause has become a cherished tradition at Westerra Credit Union. </Link>
                        <Link href="/login">LEARN MORE →</Link>
                    </div>
                    <div>
                        <h3>Choose Your Chill at Westerra Credit Union&apos;s Special Olympics Colorado&apos;s 2023 Polar Plunge</h3>
                        <Link href="/login">The Polar Plunge is a cold-weather fundraiser aimed at raising $583,000 to provide critical funding for nearly 16,000 Special Olympics Colorado athletes. Supporting this important cause has become a cherished tradition at Westerra Credit Union. </Link>
                        <Link href="/login">LEARN MORE →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles