import styles from "../pricingCard/PricingCard.module.css"
import {priceCard} from "../../data/priceCard"
import { useState } from "react"
import Spline from "@splinetool/react-spline";

export default function PricingCards(){

    const [data, setData] = useState([...priceCard.priceCards]);
    return(
        <main className={styles.priceCards}>
            {data && 
                data.map((e, index) => {
                    return(
                        <div className={styles.priceCardBody}
                             style={{
                                backgroundColor: e.priceCardColour,
                             }}>
                            <h1 className={styles.priceCardTitle}>{e.priceCardTitle}</h1>
                            <h2 className={styles.priceCardPrice}>{e.priceCardPrice}</h2>
                            <li className={styles.priceCardList}>{e.priceCardDetail1}</li>
                            <li className={styles.priceCardList}>{e.priceCardDetail2}</li>
                            <li className={styles.priceCardList}>{e.priceCardDetail3}</li>

                            <button className={styles.button}>Learn more</button>
                        </div>
                    )
                })}
        </main>
    )
}