import classNames from 'classnames'
import React, { LegacyRef, MouseEventHandler, useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import { PopupProps } from './Popup.interface'
import styles from './Popup.module.scss'

const Popup: React.FC<PopupProps> = ({ isVisible, setIsVisible }) => {
    const ref = useRef(null)

    useEffect(() => {
        function clickFn(e: any) {
            if (ref.current && ref.current === e.target) {
                setIsVisible(false);
            }
        }
        document.addEventListener('click', clickFn)

        return () => {
            document.removeEventListener('click', clickFn)
        }
    }, [])



    return (
        <div ref={ref} className={classNames(styles.popup, { [styles.active]: isVisible })}>
            <div>
                <svg onClick={() => setIsVisible(false)} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="xmark" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"></path></svg>
                <h4>
                    What type of account are you signing into?
                </h4>
                <Button href='/login1'>Personal Account</Button>
                <Button href='/businesslogin'>Business Account</Button>
            </div>
        </div>
    )
}

export default Popup