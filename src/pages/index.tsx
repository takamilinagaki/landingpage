import Image from "next/image";
import NavBar from "@/components/navBar";
import styles from "../styles/Home.module.css";
import image1 from "../../public/homepage.svg"
import Footer from "@/components/footer";
import Spline from "@splinetool/react-spline";
import PricingCards from "../components/pricingCard/index"
import Head from "next/head";

export default function Home() {
  return (
    <main>
      
      <Head>
        <title>Tune Trove</title>
        <link rel="icon" href="/favicon.svg"/>
      </Head>

      <div className={styles.body}>
        <div className={styles.navBar}>
          <NavBar />
        </div>
        <hr style={{
          marginTop: '30px',
          width: '85%'
          }}/>
        <div className={styles.homepage_topSection}>
          <div className={styles.homepage_contents}>
              <h1 className={styles.homepage_title}>Explore the world of Music</h1>
              <p className={styles.homepage_subTitle}>Tune Trove helps you discover and learn more about songs using a map. 
              It's like a fun adventure where you can explore music charts and find out what songs are popular in different places. 
              The app lets you see how music varies in different parts of the world. You can dive into the charts, learn interesting facts about songs, 
               and enjoy the combination of music and maps!! </p>
              <button className={styles.button}>Read More</button>
                <div className={styles.newsletter_section}>
                  <p className={styles.subscription_title}>subscribe to our news letter!</p>
                  <input className={styles.subscription_input} placeholder="Enter your email..."/>
                  <button className={styles.subscription_button}>subscribe</button>
                </div>
          </div>
          <div>
           <Spline scene="https://prod.spline.design/k-BTbLGEtjYs3Y17/scene.splinecode" />
          </div>
        </div>

        <div className={styles.homepage_pricingSection}>
          <h2 className={styles.homepage_section_title}>Pricings</h2>
          <p className={styles.homepage_section_subTitle}>We offer three different plans for you to choose from.</p>
            <div className={styles.homepage_pricingTags}>
               <PricingCards />
            </div>
        </div>

        <div className={styles.homepage_informationSection}>
          <div>
            <Spline scene="https://prod.spline.design/P4-EClE2QYEanbDC/scene.splinecode" />
          </div>
            <div className={styles.homepage_informationSectionTexts}>
              <h3 className={styles.homepage_section_title}
                style={{
                  textAlign: 'left'
                }}>Enjoy the personalization</h3>
              <p className={styles.homepage_section_subTitle}
                style={{
                  textAlign: 'left'
                }}>Tune Trove stands out as a remarkable app that goes beyond just exploration—it automatically recommends songs tailored to your unique taste based on what you're currently listening to. This innovative feature transforms your music experience into a personalized journey, suggesting tunes that resonate with your preferences! </p>
              <button className={styles.button}>Learn more</button>
  
            </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
