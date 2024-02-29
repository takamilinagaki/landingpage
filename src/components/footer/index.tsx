import Image from "next/image"
import logo from "../../../public/logo.svg"
import styles from "../footer/Footer.module.css"
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <main className={styles.footer_main}>
            <hr style={{
                marginBottom: '20px',
                width: '85%'
            }}/>
            <div className={styles.footer_contents}>
                <div className={styles.footerLeft}>
                    <Image 
                        className={styles.footer_image}
                        src={logo}
                        alt=""
                        width={84}
                        height={52}/>
                    <div className={styles.footer_buttons}>
                        <Link href="tunetrove-beta.vercel.app">
                            <button className={styles.button}>Live View</button>
                        </Link>

                        <Link href="https://github.com/justinweiyungwu/mdia-3109-project">
                        </Link>
                        <button className={styles.button}>View Code</button>
                    </div>
                </div>
                <div className={styles.footer_links}>
                    <a href="">About</a>
                    <a href="">Pricing</a>
                    <a href="">Services</a>
                    <a href="">FAQ</a>
                </div>
            </div>
            <hr style={{
                marginTop: '30px',
                width: '85%'
            }}/>
            <p className={styles.footer_copyright}>© 2024 tune trove. All rights reserved</p>
        </main>
        </>
    )
}