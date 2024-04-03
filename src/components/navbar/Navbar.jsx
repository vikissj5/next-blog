import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="facebook" width={24} height={24} />
                <Image src="/youtube.png" alt="facebook" width={24} height={24} />
                <Image src="/tiktok.png" alt="facebook" width={24} height={24} />

            </div>
            <div className={styles.logo}>Website Name</div>
            <div className={styles.links}></div>
        </div>

    )
}

export default Navbar