import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.scss';
import HeroImage from '@/public/hero.avif'
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className={styles.wrap}>
      <Image src={HeroImage} alt="Image" width={928} height={500} />
      <div>
        <h1>Welcome to Westerra</h1>
        <p>
          We&apos;re building a modern financial community where we all truly
          belong. Join us (it takes less than five minutes)
        </p>
        <Button appearence="red">Become a member</Button>
      </div>
    </section>
  );
}

export default Hero;