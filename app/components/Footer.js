import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (

            <footer className={styles['app-footer']}>
                &copy; {new Date().getFullYear()} All Right Reserved
            </footer>

        )
    }
