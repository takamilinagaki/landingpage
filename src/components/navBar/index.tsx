import logo from "../../../public/logo.svg"
import Image from "next/image"
import styles from "../navBar/NavBar.module.css"
import Link from "next/link"

export default function NavBar(){
    return(
        <main className={styles.body}>
            <div>
                <Image 
                    src={logo}
                    alt=""
                    width={130}
                    height={80}/>
            </div>

            <div className={styles.topbar_links}>
                <a href="">About</a>
                <a href="">Pricing</a>
                <a href="">Services</a>
                <a href="">FAQ</a>
            </div>

            <div className={styles.topbar_buttons}>
                <button className={styles.topbar_login_button}>Login</button>
                <button className={styles.topbar_register_button}>Register</button>
            </div>
        </main>

    )
}