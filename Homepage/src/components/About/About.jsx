import React,{ useEffect }from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"
import AOS from "aos"
import "aos/dist/aos.css"

export const About = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <section  className={styles.container} id="about"> 
        <h2 className={styles.title}>About US</h2>
        <div className={styles.projects}>           
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="00">
                    <img src={getImageUrl("About/innovative.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Innovative AI Solutions</h3>
                    <p className={styles.description}>
                    We specialize in developing advanced chatbots for platforms like WhatsApp, ensuring seamless interactions between businesses and customers.
                    </p>
                </div>
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="300">
                    <img src={getImageUrl("About/cc.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Customer-Centric Approach</h3>
                    <p className={styles.description}>
                    With 24/7 availability and personalized responses, we prioritize customer satisfaction, enriching user experience and communication channels.
                    </p>
                </div>  
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="600">
                    <img src={getImageUrl("About/excellence.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Driven by Excellence</h3>
                    <p className={styles.description}>
                    Committed to excellence, we push boundaries in AI-driven communication, empowering businesses with integration, multilingual support, and data analytics for success.
                    </p>
                </div>       
        </div>
    </section>
  )
}