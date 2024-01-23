// 'use client'
import React from 'react'
import styles from './infiniteslider.module.css'

const InfiniteSlider = () => {
    return (
        <>
            <div className={styles.slider}>
                <div className={styles.slidetrack}>
                    <div className={styles.slide}>
                        <img src="/images/clients/1.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/2.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/3.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/4.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/5.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/6.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/1.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/2.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/3.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/4.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/5.png" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/clients/6.png" alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfiniteSlider