import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../Button/Button'
import { CardProps } from './Card.interface'
import styles from './Card.module.scss'

const Card: FC<CardProps> = ({img, number, title, subtitle, btnText, btn2Text}) => {
  return (
    <div className={styles.wrap}>
        <Image src={img} alt={title} />
        <div>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <Button>{btnText}</Button>
            {btn2Text && <Link href="/login">{btn2Text}</Link>}
        </div>
    </div>
  )
}

export default Card