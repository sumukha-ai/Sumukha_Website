import React,{ useEffect }from 'react'
import styles from "./Integrations.module.css"
import {getImageUrl} from "../../utils"
import AOS from "aos"
import "aos/dist/aos.css"

export const Integrations = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <section  className={styles.container} > 
        <h2 className={styles.title}>Integrations</h2>
        <div className={styles.projects}>           
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="00">
                    <img src={getImageUrl("Integrations/whatsapp.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>WhatsApp</h3>
                    <p className={styles.description}>
                    Connect directly with customers on WhatsApp, allowing seamless interactions for inquiries, orders, and support.
                    </p>
                </div>
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="300">
                    <img src={getImageUrl("Integrations/web.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Websites</h3>
                    <p className={styles.description}>
                    Enhance user experience on websites by offering instant assistance and support through the AI chatbot.
                    </p>
                </div>  
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="600">
                    <img src={getImageUrl("Integrations/instagram.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Instagram</h3>
                    <p className={styles.description}>
                    Streamline customer engagement on Instagram through direct messaging, enabling inquiries, appointments, and product sharing.
                    </p>
                </div>       
        </div>
    </section>
  )
}