import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import SearchIcon from "@/public/search.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import Burger from './burger.svg'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <header className={styles.wrap}>
        <div className={classNames("container", styles.container)}>
          <div className={styles.top}>
            <Link href="/">About</Link>
            <Link href="/">Rates</Link>
            <Link href="/">Locations</Link>
            <Link href="/">Resources</Link>
            <Link href="/">News</Link>
            <Link href="/">Contact</Link>
            <Link href="/">
              <button>
                <SearchIcon width={18} height={18} />
              </button>
            </Link>
          </div>
          <div className={styles.bottom}>
            <Logo width={244} height={48} />
            <nav className={styles.list}>
              <Link href="/">Spending</Link>
              <Link href="/">Saving</Link>
              <Link href="/">Borrowing</Link>
              <Link href="/">Services</Link>
            </nav>
            <div className={styles.btns}>
              <Button>Schedule an Appointment</Button>
              <Button onClick={() => setIsVisible(true)}>Login</Button>
              <Burger onClick={() => setIsOpened(prev => !prev)} className={styles.burger} />
            </div>
          </div>
        </div>
      </header>
      <Popup isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className={classNames(styles.adaptive, { [styles.active]: isOpened })}>
        <Link href="/">About</Link>
        <Link href="/">Rates</Link>
        <Link href="/">Locations</Link>
        <Link href="/">Resources</Link>
        <Link href="/">News</Link>
        <Link href="/">Contact</Link>
        <Link href="/">
          <SearchIcon width={18} height={18} />
        </Link>
        <Link href="/">Spending</Link>
        <Link href="/">Saving</Link>
        <Link href="/">Borrowing</Link>
        <Link href="/">Services</Link>
        <Button>Schedule an Appointment</Button>
      </div>
    </>
  );
};

export default Navbar;
