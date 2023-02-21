import Link from "next/link";
import React, { FC } from "react";
import { ButtonProps } from "./Button.interface";
import styles from './Button.module.scss'
import cn from 'classnames'

const Button: FC<ButtonProps> = ({href, children, appearence = 'black', ...props}) => {
  if (href) {
    return (
      <Link
        className={cn(styles.btn, {
          [styles.black]: appearence === "black",
          [styles.red]: appearence === "red",
        })}
        href={href}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(styles.btn, {[styles.black]: appearence === 'black', [styles.red]: appearence === 'red'})} {...props}>
      {children}
    </button>
  );
};

export default Button;
