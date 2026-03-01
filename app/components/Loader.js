

import React from 'react'
import styles from './loader.module.css'
import Image from 'next/image'

    export default function Loader() {
    return (
        <div className={styles['loader-wrapper']}>
            <div className={styles.loader}></div>
        </div>
    )
}
