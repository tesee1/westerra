import React from 'react'
import Card from '../Card/Card'
import styles from './Make.module.scss'
import Make1 from '@/public/make1.avif'
import Make2 from '@/public/make2.avif'
import Make3 from '@/public/make3.avif'
import classNames from 'classnames'


const Make: React.FC = (): JSX.Element => {
    return (
        <section>
            <div className={classNames(styles.container)}>
                <div className={styles.top}>
                    <div className="container">
                        <h2>Let's make this easy</h2>
                        <span>
                            <label>
                                I am
                                <select>
                                    <option value="new-to-westerra">new To Westerra</option>
                                    <option value="new-to-westerra">a current member</option>
                                    <option value="new-to-westerra">business owner</option>
                                    <option value="new-to-westerra">a parent</option>
                                    <option value="new-to-westerra">heading to college</option>
                                    <option value="new-to-westerra">newly independent</option>
                                </select>
                            </label>
                            <label>
                                looking for
                                <select>
                                    <option value="a-new-bank">a new bank</option>
                                    <option value="a-new-bank">a loan</option>
                                    <option value="a-new-bank">a spending/checking account</option>
                                    <option value="a-new-bank">a savings account</option>
                                    <option value="a-new-bank">a branch</option>
                                </select>
                            </label>
                        </span>
                    </div>

                </div>
                <div className={styles.bottom}>
                    <div className={classNames("container", styles.bottomContainer)}>
                        <Card img={Make1} title='What even is a credit union?' number='01' subtitle='Though we are a lot like a bank, there are several ways we differ. One, there are no stockholders. That means everyone who has an account with us is a member and an owner. And two, all your deposits and funds stay local and contribute to the Colorado economy.' btnText="There's more" />
                        <Card img={Make2} title='Make money on your money with a CD' number='02' subtitle='Think of a certificate of deposit like savings on steroids. And you&apos;ll earn even more with our promotional rates.' btnText="Learn More" />
                        <Card img={Make3} title='No-fee spending account' number='03' subtitle='No monthly fees. No minimum balance required. Just a debit card that helps you earn rewards (like cash back).' btnText="Learn More" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Make